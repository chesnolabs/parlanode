<template>
  <card-wrapper :header-config="headerConfig">
    <template #generator>
      <tools-tabs current-tool="compass" />
    </template>
    <compass
      :compass-data="$options.contextData.cardData?.data?.results || []"
    />
  </card-wrapper>
</template>

<script>
import common from '@/_mixins/common.js';
import { defaultHeaderConfig } from '@/_mixins/altHeaders.js';
import { defaultOgImage } from '@/_mixins/ogImages.js';
import ToolsTabs from '@/_components/ToolsTabs.vue';
import Compass from './Compass.vue';

export default {
  name: 'CardToolCompass',
  components: {
    ToolsTabs,
    Compass,
  },
  mixins: [common],
  cardInfo: {
    doubleWidth: true,
  },
  data() {
    return {
      headerConfig: defaultHeaderConfig(this, { circleIcon: 'og-kompas' }),
      ogConfig: defaultOgImage(this, { icon: 'og-kompas' }),
    };
  },
};
</script>
