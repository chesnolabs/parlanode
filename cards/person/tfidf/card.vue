<template>
  <card-wrapper :header-config="headerConfig">
    <empty-state v-if="!chartRows.length" />
    <bar-chart v-else :data="chartRows" />
  </card-wrapper>
</template>

<script>
import links from '@/_mixins/links.js';
import common from '@/_mixins/common.js';
import { personHeader } from '@/_mixins/altHeaders.js';
import { personOgImage } from '@/_mixins/ogImages.js';
import { personSpeechesContextUrl } from '@/_mixins/contextUrls.js';
import BarChart from '@/_components/BarChart.vue';
import EmptyState from '@/_components/EmptyState.vue';

export default {
  name: 'CardPersonTfidf',
  components: {
    BarChart,
    EmptyState,
  },
  mixins: [
    common,
    personSpeechesContextUrl,
    personHeader,
    personOgImage,
    links,
  ],
  computed: {
    chartRows() {
      const results = this.cardData.data?.results || [];
      // const person = this.cardData.data?.person || {};
      return results.map((item) => ({
        label: item.token,
        value: Math.round(item.value * 5000),
        // TODO we used to pass mps in here to get the link
        // to filter only speeches that belong to this mp.
        // this feature isn't implemented on the new parladata
        // yet, so it's excluded. it should be reimplemented.
        link: this.getSearchTermLink(item.token),
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.card-content-front) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.word-list {
  width: 100%;
}
</style>
