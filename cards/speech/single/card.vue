<template>
  <card-wrapper :header-config="headerConfig" max-height>
    <speech
      v-quotable
      :speech="speech"
      :session="speech?.session"
      show-session
    />
  </card-wrapper>
</template>

<script>
import links from '@/_mixins/links.js';
import common from '@/_mixins/common.js';
import { personTitle } from '@/_mixins/titles.js';
import { sessionHeader } from '@/_mixins/altHeaders.js';
import { sessionOgImage } from '@/_mixins/ogImages.js';
import { speechSessionTranscriptContextUrl } from '@/_mixins/contextUrls.js';
import Speech from '@/_components/Speech.vue';
import quotable from '@/_directives/quotable.js';

export default {
  name: 'CardSpeechSingle',
  components: {
    Speech,
  },
  directives: {
    quotable,
  },
  mixins: [
    common,
    links,
    speechSessionTranscriptContextUrl,
    personTitle,
    sessionHeader,
    sessionOgImage,
  ],
  cardInfo: {
    doubleWidth: true,
  },
  data() {
    const { cardData } = this.$root.$options.contextData;

    return {
      speech: cardData?.data?.results || {},
    };
  },
};
</script>

<style lang="scss" scoped>
:deep(.card-header) {
  display: none;
}

:deep(.card-back-content) {
  margin-top: 20px;
}
</style>
