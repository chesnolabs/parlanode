<template>
  <div
    v-click-outside="() => toggleDropdown(false)"
    :class="['search-dropdown', { small: small }]"
  >
    <div
      v-if="
        !hideClear &&
        (selectedIds.length > 0 || (allowManualValue && manualValue))
      "
      class="search-dropdown-clear"
      @click="clearSelection"
    >
      ×
    </div>
    <!--
      Don't use v-model="localFilter" because it doesn't work on mobile
      because of text composition (autocomplete/autocorrect)
      See: https://github.com/vuejs/vue/issues/8231
    -->
    <input
      :value="localFilter"
      :placeholder="adjustedPlaceholder"
      class="search-dropdown-input"
      type="text"
      @input="localFilter = $event.target.value"
      @focus="toggleDropdown(true)"
      @keydown.enter.prevent="pressEnter"
      @keydown.up.prevent="focus(focused - 1, true)"
      @keydown.down.prevent="focus(focused + 1, true)"
    />
    <span class="search-icon-wrapper" @click="search"></span>
    <ul
      ref="dropdown"
      :class="[
        'search-dropdown-options',
        { visible: active, up: up, empty: empty },
      ]"
      :style="{ 'margin-top': upMargin }"
      @mouseleave="focus(-1)"
    >
      <div v-if="isLoading" class="nalagalnik__wrapper">
        <div class="nalagalnik"></div>
      </div>
      <template v-for="(item, index) in filteredItems" :key="`${item.id}`">
        <li v-if="item.groupLabel" class="search-dropdown-group-label">
          {{ item.groupLabel }}
        </li>
        <li
          :class="generateItemClass(item, index)"
          @click="selectItem(item.id)"
          @mouseenter="focus(index)"
        >
          <div class="search-dropdown-label">
            <img
              v-if="item.image"
              :src="item.image"
              :style="item.imageStyle"
              class="image"
            />
            <span
              v-else-if="item.color"
              :style="{ background: item.color }"
              class="color"
            />
            <span
              v-else-if="item.colorClass"
              :class="['color', item.colorClass]"
            />
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="item.highlightLabel" />
          </div>
          <div v-if="item.count">{{ item.count }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
const ITEM_HEIGHT = 23;
const ITEM_COUNT = 10;

export default {
  name: 'SearchDropdown',
  directives: {
    clickOutside: {
      beforeMount(el, binding) {
        let mouseDownWasOutside = false;
        const isOutside = (targetElement) => {
          return !el.contains(targetElement) && el !== targetElement;
        };
        const onMouseDown = (e) => {
          mouseDownWasOutside = isOutside(e.target);
        };
        const onClick = (e) => {
          if (mouseDownWasOutside && isOutside(e.target)) {
            binding.value(e);
          }
        };
        el.vco_onMouseDown = onMouseDown;
        el.vco_onClick = onClick;
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('click', onClick);
      },
      unmounted(el) {
        document.removeEventListener('mousedown', el.vco_onMouseDown);
        document.removeEventListener('click', el.vco_onClick);
        el.vco_onMouseDown = undefined;
        el.vco_onClick = undefined;
      },
    },
  },
  props: {
    alphabetise: {
      type: Boolean,
      default: true,
    },
    groups: {
      type: Array,
      default: null,
    },
    modelValue: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    single: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    up: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: String,
      default: '',
    },
    hideClear: {
      type: Boolean,
      default: false,
    },
    allowManualValue: {
      type: Boolean,
      default: false,
    },
    manualValue: {
      type: String,
      default: null,
    },
    dontFilterLocally: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:filter', 'search', 'select', 'clear'],
  data() {
    return {
      active: false,
      focused: -1,
      upMargin: 0,
      localFilter: this.filter,
      currentSingleSelection: null,
    };
  },
  computed: {
    empty() {
      return this.filteredItems.length === 0 && !this.isLoading;
    },
    filteredItems() {
      const filterAndSort = (items) => {
        const itemsFiltered = this.dontFilterLocally
          ? items
          : items.filter(
              (item) =>
                item.selected ||
                (item.label || '')
                  .toLowerCase()
                  .indexOf(this.localFilter.toLowerCase()) > -1
            );

        return itemsFiltered
          .map((item, index) => {
            item.sortIndex = index;
            item.highlightLabel = this.highlightLabel(item.label);
            return item;
          })
          .sort((a, b) => {
            if (!this.single) {
              if (
                this.alphabetise &&
                Boolean(a.selected) === Boolean(b.selected)
              ) {
                return (a.label || '').localeCompare(b.label, 'sl');
              }

              if (a.selected && !b.selected) {
                return -1;
              }
              if (!a.selected && b.selected) {
                return 1;
              }
            }

            if (a.sortIndex < b.sortIndex) {
              return -1;
            }
            if (a.sortIndex > b.sortIndex) {
              return 1;
            }

            return 0;
          });
      };

      if (this.groups) {
        return this.groups
          .map((group) => {
            const itemsFromGroup = filterAndSort(
              this.modelValue.filter(
                (item) => group.items.indexOf(item.id) > -1
              )
            );

            itemsFromGroup.forEach((item, index) => {
              // eslint-disable-next-line no-param-reassign
              item.groupLabel = index === 0 ? group.label : null;
            });

            return itemsFromGroup;
          })
          .reduce((a, b) => a.concat(b), []);
      }
      return filterAndSort(this.modelValue);
    },
    selectedIds() {
      return this.filteredItems
        .filter((item) => item.selected)
        .map((item) => item.id);
    },
    adjustedPlaceholder() {
      const selectedItem = this.filteredItems.filter(
        (item) => item.selected
      )[0];

      if (this.allowManualValue && !selectedItem && this.manualValue) {
        return this.manualValue;
      }

      if (!selectedItem && this.placeholder) {
        return this.placeholder;
      }

      if (this.single) {
        return selectedItem
          ? selectedItem.label
          : this.$t('select-placeholder');
      }

      if (this.placeholder) {
        return this.placeholder;
      }

      return this.selectedIds.length > 0
        ? this.$t('selected-placeholder', { num: this.selectedIds.length })
        : this.$t('select-placeholder');
    },
    largeItems() {
      return (this.modelValue || []).some(
        (item) => item?.image || item?.color || item?.colorClass
      );
    },
  },
  watch: {
    filter() {
      this.focus(this.focused);
    },
    localFilter() {
      this.$emit('update:filter', this.localFilter);
      this.$refs.dropdown.scrollTop = 0;
    },
    active() {
      this.$nextTick(() => {
        if (this.up) {
          this.upMargin = `-${
            this.$refs.dropdown.getBoundingClientRect().height + 39
          }px`;
        }
      });
    },
  },
  methods: {
    pressEnter() {
      if (this.focused === -1) {
        if (this.allowManualValue) {
          this.$emit('select', this.selectItem(this.localFilter));
        } else {
          this.$emit('search', this.localFilter);
        }
      } else {
        this.selectItem(this.filteredItems[this.focused].id);
      }
    },
    search() {
      this.$emit('search', this.localFilter);
    },
    selectItem(selectedItemId) {
      if (this.single) {
        // this.clearSelection();
        this.toggleDropdown(false);
        this.localFilter = '';
      }
      // make sure clearSelection propagates
      this.$nextTick(() => {
        this.toggleItem(selectedItemId);
      });
    },
    toggleItem(itemId) {
      this.$emit('select', itemId);
      let newItems = JSON.parse(JSON.stringify(this.modelValue));
      if (this.single) {
        newItems = newItems.map((item) => ({
          ...item,
          selected: item.id === itemId,
        }));
      } else {
        newItems = newItems.map((item) => ({
          ...item,
          selected: item.id === itemId ? !item.selected : item.selected,
        }));
      }
      this.$emit('update:modelValue', newItems);
    },
    toggleDropdown(state) {
      this.active = state;
    },
    clearSelection() {
      let newItems = JSON.parse(JSON.stringify(this.modelValue));
      newItems = newItems.map((item) => ({ ...item, selected: false }));
      this.$emit('clear');
      this.$emit('update:modelValue', newItems);
    },
    focus(index, withKeyboard) {
      const multiplier = this.largeItems ? 2 : 1;
      this.focused = Math.max(
        Math.min(this.filteredItems.length - 1, index),
        -1
      );

      if (!withKeyboard) {
        return;
      }

      const additionalOffset = this.filteredItems
        .slice(0, this.focused + 1)
        .map((item) => (item.groupLabel ? 1 : 0))
        .reduce((a, b) => a + b, 0);
      const optionListEl = this.$refs.dropdown;
      const focusedPosition =
        (this.focused * multiplier + additionalOffset) * ITEM_HEIGHT;

      if (focusedPosition < optionListEl.scrollTop) {
        optionListEl.scrollTop = focusedPosition;
      } else if (
        focusedPosition >
        optionListEl.scrollTop + (ITEM_COUNT - multiplier) * ITEM_HEIGHT
      ) {
        optionListEl.scrollTop =
          focusedPosition - (ITEM_COUNT - multiplier) * ITEM_HEIGHT;
      }
    },
    generateItemClass(item, index) {
      return {
        selected: item.selected,
        focused: this.focused === index,
        large: this.largeItems,
      };
    },
    highlightLabel(label) {
      if (this.localFilter === '') {
        return label;
      }

      const regEx = new RegExp(this.localFilter, 'ig');
      return label.replace(regEx, '<b>$&</b>');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'parlassets/scss/colors';
@import 'parlassets/scss/breakpoints';
@import 'parlassets/scss/helper';

.search-dropdown {
  text-align: left;
}

.up {
  border-bottom: none;
  border-top: 1px solid $font-placeholder;
}

.search-dropdown-options {
  &.empty {
    border-bottom: none;
  }

  li {
    margin-right: 0;

    &.large {
      height: 46px;
      line-height: 46px;
      padding: 0 5px;

      &::after {
        content: none;
      }

      .image {
        border-radius: 50%;
        height: 37px;
        margin-right: 3px;
        width: 37px;
      }

      .color {
        display: inline-block;
        border-radius: 50%;
        height: 16px;
        margin: 0 13px -3px 11px;
        width: 16px;
      }
    }

    &.search-dropdown-group-label {
      @include gradient('horizontal');
      // background: linear-gradient(to left, $first, $third);
      color: $white;
      &::after {
        content: none;
      }
    }
  }

  .nalagalnik__wrapper {
    .nalagalnik {
      height: 30px;
      background-size: 19px;
    }
  }
}
</style>
