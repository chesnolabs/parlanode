import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import slugs from '@/../data/slugs.dev.json';
import siteMap from '@/../data/siteMap.default.json';
/* eslint-disable import/no-unresolved */
import defaultMessages from '@/_i18n/{cardLang}/defaults.yaml';
import Card from './card.vue';
import cardData from './data.json';
import cardState from './state.json';
/* eslint-enable import/no-unresolved */

(async () => {
  let cardMessages = {};
  try {
    const module = await import('@/_i18n/{cardLang}/{cardName}.yaml');
    cardMessages = module.default ?? {};
  } catch (e) {
    // noop
  }

  const locale = '{cardLang}';
  const i18n = createI18n({
    locale,
    messages: {
      [locale]: merge({}, defaultMessages, cardMessages),
    },
  });

  const cardName = '{cardName}';
  const uid = Math.random().toString(36).slice(2);
  const mountId = `${cardName.replace(/\//g, '_')}__${uid}`;
  const contextData = {
    mountId,
    cardName,
    cardData,
    cardState,
    slugs,
    siteMap,
  };

  window.card = createApp({ ...Card, contextData });
  window.card.use(i18n);
  window.card.mount('#card');

  /* eslint-disable no-underscore-dangle */
  const element = window.card._container.parentElement;
  const { template } = window.card._component.contextData;
  /* eslint-enable no-underscore-dangle */
  element.className = template.frameContainerClass;
  // eslint-disable-next-line no-console
})().catch((error) => console.error(error));
