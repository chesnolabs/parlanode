<template>
  <scroll-shadow ref="shadow">
    <div class="documents" @scroll="$refs.shadow.check($event.currentTarget)">
      <template v-for="(docs, groupName) in groupedDocuments" :key="groupName">
        <div class="section-name">{{ groupName }}</div>
        <ul class="links">
          <li v-for="doc in docs" :key="doc.id" class="link">
            <div class="icon">
              <div class="parlaicon parlaicon-documents"></div>
            </div>
            <div class="name">
              <a :href="doc.url" target="_blank" class="funblue-light-hover">
                {{ doc.name }}
              </a>
            </div>
          </li>
        </ul>
      </template>
    </div>
  </scroll-shadow>
</template>

<script>
import { groupBy } from 'lodash-es';
import ScrollShadow from '@/_components/ScrollShadow.vue';

export default {
  components: {
    ScrollShadow,
  },
  props: {
    documents: {
      type: Array,
      required: true,
    },
  },
  computed: {
    groupedDocuments() {
      const other = this.$t('other');
      return groupBy(
        this.documents,
        (document) => document?.tags?.[0]?.name || other
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'parlassets/scss/colors';
@import 'parlassets/scss/breakpoints';

.documents {
  height: 453px;
  margin-top: 13px;
  overflow-y: auto;

  .section-name {
    background-color: $background;
    font-weight: bold;
    padding: 10px;
  }

  .links {
    margin: 0;
    padding: 0;
    list-style: none;

    .link {
      border-bottom: 1px solid $background;
      padding: 15px 0;
      list-style: none;
      display: flex;
      align-items: center;
      font-size: 16px;

      &:last-child {
        border-bottom: 0;
      }

      .icon {
        display: flex;
        padding: 12px;
      }
    }
  }
}
</style>
