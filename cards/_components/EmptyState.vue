<template>
  <div class="empty">
    <div :class="['circle', icon, { small }]">{{ $t(text) }}</div>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',
  props: {
    icon: {
      type: String,
      default: 'empty-icon',
    },
    text: {
      type: String,
      default: 'no-results',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'parlassets/scss/breakpoints';
@import 'parlassets/scss/colors';

@mixin circle($size: 220px) {
  width: $size;
  height: $size;
  padding: #{$size / 1.6} #{$size / 8} 0;
  background-color: $light-background;
  background-size: $size / 3;
  background-position: center #{$size / 5};
  background-repeat: no-repeat;
  border-radius: 50%;
  font-size: ($size / 220px) * 17px;
  font-style: italic;
  line-height: 1.1;
  text-align: center;
  position: absolute;
  top: calc(50% - #{$size / 2});
  left: calc(50% - #{$size / 2});
}

.empty {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .circle {
    @include circle;

    &.small {
      @include circle(180px);
    }

    @include respond-to(mobile) {
      &,
      &.small {
        @include circle(150px);
      }
    }
  }
}
</style>
