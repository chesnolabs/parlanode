<template>
  <card-wrapper :header-config="headerConfig" max-height>
    <div class="date-and-stuff">
      <a
        :href="getSessionVotesLink(results.session)"
        class="funblue-light-hover"
      >
        {{ results.session?.name }} </a
      ><span class="date">, {{ formatDate(results.session?.start_time) }}</span>
    </div>

    <div :class="['summary', { 'fire-badge': results.result?.is_outlier }]">
      <div class="result">
        <template v-if="results.result?.passed === true">
          <i class="accepted glyphicon glyphicon-ok"></i>
          <div v-t="'vote-passed'" class="text"></div>
        </template>
        <template v-else-if="results.result?.passed === false">
          <i class="not-accepted glyphicon glyphicon-remove"></i>
          <div v-t="'vote-not-passed'" class="text"></div>
        </template>
        <template v-else>
          <i class="glyphicon parlaicon-unknown"></i>
          <div v-t="'vote-unknown'" class="text"></div>
        </template>
      </div>
      <div class="name">
        <template v-if="projects && projects.length">
          <template v-for="(project, i) in projects">
            <div
              v-if="i !== 0"
              :key="project"
              :style="{ top: visibleTooltipTopPos }"
              :class="[
                'tooltip',
                `tooltip-${data.id}-${i}`,
                { 'tooltip--show': visibleTooltip === `${data.id}-${i}` },
              ]"
            >
              {{ project }}
            </div>
          </template>
          <p class="projects">
            <component
              :is="i > 0 ? 'a' : 'span'"
              v-for="(project, i) in projects"
              :key="project"
              :class="['project', { 'project--tooltip': i > 0 }]"
              :data-target="`${data.id}-${i}`"
              href="#"
              @click.prevent="() => {}"
              @mouseover="setVisibleTooltip(`${data.id}-${i}`)"
              @mouseout="visibleTooltip = null"
            >
              <template v-if="i === 0">{{ project }}</template>
              <span v-else>{{ i + 1 }}</span>
            </component>
          </p>
        </template>
        <p>{{ title }}</p>
      </div>
    </div>

    <template v-if="results.members?.length">
      <div
        v-if="content"
        v-t="'summary'"
        class="izvlecek-switch visible-xs"
        @click="showMobileExcerpt = !showMobileExcerpt"
      />
      <excerpt
        v-if="showMobileExcerpt && content"
        :content="content"
        :main-law="excerptData"
        :show-parent="true"
        class="visible-xs"
      />
      <p-tabs :start-tab="selectedTab" class="visible-xs" @switch="focusTab">
        <p-tab :label="$t('mps')">
          <poslanci
            :members="results.members"
            :result="results.result"
            :all-votes="allVotes"
            :state="state"
            @namefilter="(newNameFilter) => (state.nameFilter = newNameFilter)"
          />
        </p-tab>
        <p-tab :label="$t('parties')">
          <poslanske-skupine
            :members="results.members"
            :parties="results.groups"
            :state="state"
            :selected-party="state.selectedParty || null"
            :selected-option="state.selectedOption || null"
            @selectedparty="(newParty) => (state.selectedParty = newParty)"
            @selectedoption="(newOption) => (state.selectedOption = newOption)"
          />
        </p-tab>
        <p-tab v-if="results.government_sides?.length" :label="$t('gov-side')">
          <poslanske-skupine
            :members="results.members"
            :parties="results.government_sides"
            :state="state"
            :selected-party="state.selectedParty || null"
            :selected-option="state.selectedOption || null"
            @selectedparty="(newParty) => (state.selectedParty = newParty)"
            @selectedoption="(newOption) => (state.selectedOption = newOption)"
          />
        </p-tab>
        <p-tab v-if="results.documents?.length" :label="$t('documents')">
          <documents :documents="results.documents" />
        </p-tab>
      </p-tabs>
      <p-tabs :start-tab="selectedTab" class="hidden-xs" @switch="focusTab">
        <p-tab v-if="content" :label="$t('summary')">
          <excerpt
            :content="content"
            :main-law="excerptData"
            :show-parent="true"
          />
        </p-tab>
        <p-tab :label="$t('mps')">
          <poslanci
            :members="results.members"
            :result="results.result"
            :all-votes="allVotes"
            :state="state"
            @namefilter="(newNameFilter) => (state.nameFilter = newNameFilter)"
          />
        </p-tab>
        <p-tab :label="$t('parties')">
          <poslanske-skupine
            :members="results.members"
            :parties="results.groups"
            :state="state"
            :selected-party="state.selectedParty || null"
            :selected-option="state.selectedOption || null"
            @selectedparty="(newParty) => (state.selectedParty = newParty)"
            @selectedoption="(newOption) => (state.selectedOption = newOption)"
          />
        </p-tab>
        <p-tab v-if="results.government_sides?.length" :label="$t('gov-side')">
          <poslanske-skupine
            :members="results.members"
            :parties="results.government_sides"
            :state="state"
            :selected-party="state.selectedParty || null"
            :selected-option="state.selectedOption || null"
            @selectedparty="(newParty) => (state.selectedParty = newParty)"
            @selectedoption="(newOption) => (state.selectedOption = newOption)"
          />
        </p-tab>
        <p-tab v-if="results.documents?.length" :label="$t('documents')">
          <documents :documents="results.documents" />
        </p-tab>
      </p-tabs>
    </template>
    <template v-else>
      <div v-if="allVotes" class="session_voting row">
        <div class="col-md-6 col-md-offset-3">
          <div class="session_votes">
            <div class="row">
              <div class="col-xs-3">
                {{ allVotes.for }}
                <div v-t="'vote-for'" class="type"></div>
                <div class="indicator aye">&nbsp;</div>
              </div>
              <div class="col-xs-3">
                {{ allVotes.against }}
                <div v-t="'vote-against'" class="type"></div>
                <div class="indicator ney">&nbsp;</div>
              </div>
              <div class="col-xs-3">
                {{ allVotes.abstain }}
                <div v-t="'vote-abstain'" class="type"></div>
                <div class="indicator abstention">&nbsp;</div>
              </div>
              <div class="col-xs-3">
                {{ allVotes.absent }}
                <div v-t="'vote-absent'" class="type"></div>
                <div class="indicator not">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <data-not-published :text="$t('data-not-published.show-of-hands')" />
    </template>
  </card-wrapper>
</template>

<script>
import common from '@/_mixins/common.js';
import links from '@/_mixins/links.js';
import { defaultHeaderConfig } from '@/_mixins/altHeaders.js';
import { defaultOgImage } from '@/_mixins/ogImages.js';
import { voteSessionVotesContextUrl } from '@/_mixins/contextUrls.js';
import { parseVoteTitle } from '@/_helpers/voteTitle.js';
import dateFormatter from '@/_helpers/dateFormatter.js';
import PTab from '@/_components/Tab.vue';
import PTabs from '@/_components/Tabs.vue';
import Excerpt from '@/_components/Excerpt.vue';
import DataNotPublished from '@/_components/DataNotPublished.vue';
import Documents from '@/_components/Documents.vue';
import fixAbstractHtml from '@/_helpers/fixAbstractHtml.js';
import Poslanci from './Poslanci.vue';
import PoslanskeSkupine from './PoslanskeSkupine.vue';

export default {
  name: 'CardVoteSingle',
  components: {
    Poslanci,
    PoslanskeSkupine,
    PTab,
    PTabs,
    Excerpt,
    DataNotPublished,
    Documents,
  },
  mixins: [common, links, voteSessionVotesContextUrl],
  cardInfo: {
    doubleWidth: true,
  },
  data() {
    const { cardState, cardData } = this.$root.$options.contextData;

    const results = cardData?.data?.results || {};

    // parse vote title and any associated projects from text
    const { title, projects } = parseVoteTitle(results.title);

    const allVotes = {};
    ['for', 'against', 'abstain', 'absent'].forEach((key) => {
      if (typeof results.all_votes[key] !== 'number') {
        allVotes[key] = '?';
      } else {
        allVotes[key] = results.all_votes[key];
      }
    });

    return {
      results,
      title,
      projects: [...(results.agenda_items || []), ...projects],
      state: cardState || {},
      selectedTab: cardState?.selectedTab || 0,
      headerConfig: defaultHeaderConfig(this),
      ogConfig: defaultOgImage(this),
      showMobileExcerpt: false,
      visibleTooltip: null,
      visibleTooltipTopPos: '20px',
      allVotes,
    };
  },
  computed: {
    excerptData() {
      return {
        epa: this.results.legislation?.epa || '',
        name: this.results.legislation?.text,
        link: this.getLegislationLink(this.results.legislation),
      };
    },
    content() {
      return fixAbstractHtml(this.results.abstract);
    },
  },
  methods: {
    focusTab(tabNumber) {
      this.state.selectedTab = tabNumber;
    },
    setVisibleTooltip(target) {
      const elem = document.querySelector(`[data-target="${target}"]`);
      if (elem) {
        const elemRect = elem.getBoundingClientRect();
        this.visibleTooltipTopPos = `${elemRect.bottom + 10}px`;
        this.visibleTooltip = target;
      }
    },
    formatDate: dateFormatter,
  },
};
</script>

<style lang="scss" scoped>
@import 'parlassets/scss/colors';
@import 'parlassets/scss/breakpoints';

.p-tabs :deep(.p-tabs-content) {
  &,
  .tab-content {
    overflow-y: visible;
    overflow-x: visible;

    .scroll-shadow-top::after {
      left: -20px;
      right: -20px;
      width: auto;
    }
  }
}

.date-and-stuff {
  margin-bottom: 20px;

  .date {
    font-family: Roboto Slab;
    font-size: 14px;
    line-height: 22px;
  }
}

.summary {
  $section-border: 1px solid $font-placeholder;
  background: $background;
  margin: 7px 0 8px 0;
  min-height: 90px;
  padding: 10px 14px;
  position: relative;

  @include respond-to(desktop) {
    display: flex;
    margin-bottom: 24px;
  }

  .result {
    align-items: center;
    border-bottom: $section-border;
    display: flex;
    justify-content: center;
    padding: 0 0 10px 0;

    @include respond-to(desktop) {
      border-bottom: none;
      border-right: $section-border;
      padding: 0 22px 0 0;
    }

    .glyphicon {
      font-size: 24px;
      margin-bottom: 4px;

      &.accepted {
        color: $icon-accepted;
      }

      &.not-accepted {
        color: $icon-rejected;
      }

      @include respond-to(desktop) {
        font-size: 29px;
      }
    }

    .parlaicon-unknown {
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;

      @include respond-to(desktop) {
        width: 29px;
        height: 29px;
      }

      &::before {
        content: '?';
        font-family: sans-serif;
        font-size: 1.2em;
        font-weight: 700;
      }
    }

    .text {
      color: $font-default;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      margin-left: 12px;
    }
  }

  .name {
    font-family: 'Roboto Slab', 'Times New Roman', serif;
    font-size: 11px;
    font-weight: 300;
    line-height: 1.45em;
    padding: 10px 0 4px 0;

    @include respond-to(desktop) {
      display: flex;
      flex: 4;
      font-size: 14px;
      padding: 5px 0 5px 12px;
      flex-direction: column;
      justify-content: center;
    }

    p {
      margin: 6px 0;

      &.projects {
        font-family: Roboto, sans-serif;
        font-size: 12px;
        line-height: 1.2;
        font-weight: 600;
        text-transform: uppercase;

        .project--tooltip {
          color: $font-default;
          text-decoration: none;
          cursor: help;

          &::after {
            content: ', ';
          }

          &:first-of-type::before {
            content: '(';
            margin-left: 0.25em;
          }

          &:last-of-type::after {
            content: ')';
          }

          span {
            text-decoration: underline;

            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}

.tabs .tab-content {
  overflow: hidden;
}

.tooltip {
  position: fixed;
  background-color: $font-default;
  color: #fff;
  top: 45%;
  font-family: Roboto;
  padding: 3px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  max-width: 90%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  visibility: hidden;

  &.tooltip--show {
    opacity: 1;
    visibility: visible;
  }
}

@media (max-width: 767px) {
  .tooltip {
    max-width: 100%;
    width: 90%;
  }
}

.session_voting {
  padding: 0;

  .session_votes {
    font-size: 24px;
    line-height: 30px;
    margin: 0;

    .type {
      font-size: 12px;
      line-height: 20px;
      text-transform: uppercase;

      @include respond-to(mobile) {
        font-size: 10px;
      }
    }
  }
}
</style>

<style lang="scss">
@import 'parlassets/scss/colors';

.lightning-badge::before {
  background: $font-placeholder;
  border-radius: 50%;
  content: '';
  height: 31px;
  left: -6px;
  position: absolute;
  bottom: -6px;
  width: 31px;
  background-image: url('#{get-parlassets-url()}/icons/strela.svg');
  background-size: 11px 19px;
  background-position: center center;
  background-repeat: no-repeat;
}

.fire-badge::before {
  background: $font-placeholder;
  border-radius: 50%;
  content: '';
  height: 31px;
  left: -6px;
  position: absolute;
  top: -7px;
  width: 31px;
  background-image: url('#{get-parlassets-url()}/icons/ogenj.svg');
  background-size: 40px 40px;
  background-position: center center;
  background-repeat: no-repeat;
}

.izvlecek-switch {
  width: 100%;
  height: 40px;
  line-height: 20px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  background: $font-placeholder;
  margin-bottom: 10px;
}
</style>
