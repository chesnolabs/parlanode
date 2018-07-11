import CardWrapper from 'components/Card/Wrapper.vue';

import url from 'mixins/url';
import slugs from '../../assets/urls.json';

export default {
  data() {
    return {
      slugs,
    };
  },
  components: {
    CardWrapper,
  },
  mixins: [
    url,
  ],
  created() {
    this.$root.$options.cardData.template = {
      pageTitle: this.$t('card.title'),
      frameContainerClass: this.$root.$options.cardData.cardData.big
        ? 'col-md-12'
        : 'col-md-6 col-md-offset-3',
      embedContainerClass:
        (this.$root.$options.cardData.cardData.big ? ' big-card' : '')
        + (this.$root.$options.cardData.cardData.high ? ' high-card' : ''),
      contextUrl: this.slugs.urls.base,
    };
  },
};
