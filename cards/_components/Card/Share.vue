<template>
  <div class="card-content-share">
    <div class="card-back-content">
      <div class="share-content">
        <label v-t="'share.direct-link'" for="share-url"></label>
        <input
          id="share-url"
          ref="urlInput"
          :value="shortenedUrl"
          type="url"
          class="form-control share-url"
        />
        <button
          class="btn-parlameter btn-full-width btn-blue"
          @click="copyLink"
        >
          <span v-if="copied" v-t="'copied'"></span>
          <span v-else v-t="'copy'"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import copyInput from '@/_helpers/copyInput.js';

export default {
  name: 'CardShare',
  inject: ['cardUrl'],
  data() {
    return {
      copied: false,
      shortenedUrl: null,
    };
  },
  computed: {
    shareUrl() {
      return `${this.cardUrl}&locale=${this.$i18n.locale}&template=share`;
    },
  },
  watch: {
    shareUrl() {
      this.shortenUrl();
    },
  },
  mounted() {
    this.shortenedUrl = this.shareUrl;
    this.shortenUrl();
  },
  methods: {
    shortenUrl() {
      axios
        .get(
          `https://parla.me/shortner/generate?url=${encodeURIComponent(
            this.shareUrl
          )}`
        )
        .then((response) => {
          this.shortenedUrl = response.data;
          this.copied = false;
          this.$nextTick(() => {
            this.$refs.urlInput.select();
          });
        });
    },
    copyLink() {
      this.copied = copyInput(this.$refs.urlInput);
    },
  },
};
</script>
