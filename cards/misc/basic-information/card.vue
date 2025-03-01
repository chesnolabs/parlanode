<template>
  <card-wrapper :header-config="headerConfig" max-height>
    <div class="poslanec osnovne-informacije-poslanca">
      <div class="row">
        <div class="parlaicon-container">
          <span class="parlaicon parlaicon-vodja" aria-hidden="true"></span>
        </div>
        <div class="bordertop0">
          <span class="key">
            {{ $t('mayor') }}:
            <a :href="getLeaderLink()" class="funblue-light-hover">
              {{ results.leader?.name }}
            </a>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="parlaicon-container">
          <span class="parlaicon parlaicon-globe" aria-hidden="true"></span>
        </div>
        <div class="bordertop0">
          <span class="key">
            {{ $t('website') }}:
            <a
              :href="results.website"
              target="_blank"
              class="funblue-light-hover icon-link"
            >
              <span class="sr-only">Link</span>
              <span class="icon-link-icon" aria-hidden="true"></span>
            </a>
          </span>
        </div>
      </div>

      <div v-if="results.email" class="row">
        <div class="parlaicon-container">
          <span class="parlaicon parlaicon-kontakt" aria-hidden="true"></span>
        </div>
        <div class="bordertop0 contact-container">
          <span class="key">
            <span v-t="'contact'"></span>:
            <a
              :href="`mailto:${results.email}`"
              target="_blank"
              class="funblue-light-hover"
              >{{ shortEmail }}</a
            >
          </span>
        </div>
      </div>

      <div class="row">
        <div class="parlaicon-container">
          <span class="parlaicon parlaicon-budget" aria-hidden="true"></span>
        </div>
        <div class="bordertop0">
          <span class="key">
            {{ $t('budget') }}:
            <a
              :href="results.budget"
              target="_blank"
              class="funblue-light-hover icon-link"
            >
              <span class="sr-only">Link</span>
              <span class="icon-link-icon" aria-hidden="true"></span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </card-wrapper>
</template>

<script>
import common from '@/_mixins/common.js';
import { defaultHeaderConfig } from '@/_mixins/altHeaders.js';
import links from '@/_mixins/links.js';

export default {
  name: 'CardMiscBasicInformation',
  mixins: [common, links],
  data() {
    const { cardData } = this.$root.$options.contextData;

    return {
      results: cardData?.data?.results ?? {},
      headerConfig: defaultHeaderConfig(this, {
        title: cardData?.data?.results?.name,
      }),
    };
  },
  computed: {
    shortEmail() {
      if (this.results.email?.length) {
        if (this.results.email.length < 26) {
          return this.results.email;
        }
        const [addr, domain] = this.results.email?.split('@');
        if (addr.length < 18) {
          return this.results.email;
        }
        return `${addr.slice(0, 17)}…@${domain}`;
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'parlassets/scss/breakpoints';
@import 'parlassets/scss/colors';
@import 'parlassets/scss/helper';
@import 'parlassets/scss/icons';

@function icon-link($color) {
  @return 'data:image/svg+xml;utf8,<svg fill="%23#{str_slice("#{$color}", 2)}" xmlns="http://www.w3.org/2000/svg" height="50.456" width="50.45" viewBox="0 0 50.449501 50.456001"><path d="M16.712 45.482a5.394 5.394 0 0 1-7.62 0l-4.12-4.122a5.393 5.393 0 0 1 0-7.618l6.775-6.775-2.404-2.404-6.775 6.776c-3.424 3.426-3.424 9 0 12.425l4.12 4.123a8.766 8.766 0 0 0 6.216 2.568c2.25 0 4.5-.857 6.213-2.57l13.55-13.55a8.72 8.72 0 0 0 2.575-6.214 8.73 8.73 0 0 0-2.574-6.213l-4.123-4.12-2.404 2.403 4.124 4.12a5.352 5.352 0 0 1 1.578 3.81c0 1.438-.56 2.79-1.578 3.808L16.712 45.483z"/><path d="M43.76 2.575A8.728 8.728 0 0 0 37.545 0h-.002a8.73 8.73 0 0 0-6.213 2.574l-13.548 13.55a8.725 8.725 0 0 0-2.576 6.214 8.73 8.73 0 0 0 2.574 6.215l4.12 4.12 2.405-2.403-4.12-4.12a5.357 5.357 0 0 1-1.58-3.812c0-1.438.562-2.79 1.58-3.81l13.55-13.55a5.348 5.348 0 0 1 3.81-1.578c1.44 0 2.792.56 3.81 1.578l4.12 4.12c2.1 2.1 2.1 5.52 0 7.618l-6.774 6.777 2.405 2.404 6.775-6.777c3.426-3.427 3.426-9 0-12.426l-4.12-4.12z"/></svg>';
}

.icon-link {
  .icon-link-icon {
    margin-bottom: -4px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-position: center;
    background-size: cover;
    background-image: url('#{icon-link($link)}');
  }
}

.parlaicon-container {
  padding: 10px 16px;

  @include respond-to(desktop) {
    min-width: 50px;
  }
}

.bordertop {
  border-top: 1px solid $background;
  padding: 10px 0;
  margin: 5px 0;
}

.bordertop0 {
  border-top: 1px solid $background;
  padding: 0;
  margin: 0;
}

.bordertop,
.bordertop0 {
  flex: 1;
}

.osnovne-informacije-poslanca {
  display: flex;
  flex-direction: column;
  height: 100%;

  .row {
    display: flex;
    flex: 1;
    margin: 0;
    min-height: 0; // firefox flex bug
    min-height: -moz-fit-content;
    min-height: fit-content;
    min-height: 60px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .key {
      color: $font-default;
    }
  }
}
</style>
