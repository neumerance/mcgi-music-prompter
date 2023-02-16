<script>
import lyrics from "@/assets/images/lyrics.jpg";
import Slider from "@vueform/slider";
import { store } from '@/store.js';

export default {
  components: {
    Slider,
  },
  data() {
    return {
      lyrics: lyrics,
      scrollSpeed: 0
    };
  },
  computed: {
    currentCue() {
      if (store.currentCue) {
        return {
          ...store.currentCue,
          src: `http://${import.meta.env.VITE_API_HOST}${store.currentCue.src}`
        }
      } else {
        return null
      }
    }
  },
  methods: {
    scrollCueBack() {
      this.$refs.cueScroll.scrollTop = 0;
    }
  },
  watch: {
    currentCue(_newCue, _oldCue) {
      this.scrollCueBack();
    }
  }
};
</script>

<template>
  <div>
    <div class="cue-scroll is-flex is-justify-content-center" ref="cueScroll">
      <div v-if="!currentCue" class="cue-scroll__nothing pt-5">
        <h4 class="is-size-3">Nothing here yet!</h4>
        <p class="is-size-6">Please search the song and reserve it</p>
      </div>
      <vue3-auto-scroll :key="currentCue.id" v-if="currentCue" hide-scroll-bar :control="false" :speed="scrollSpeed" :back-speed="0">
        <img class="cue-scroll__lyrics" :src="currentCue.src" />
      </vue3-auto-scroll>
    </div>
    <div class="cue-controls">
      <Slider
        v-model="scrollSpeed"
        :min="0"
        :max="5"
        :step="0.1"
        :tooltips="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cue-scroll {
  height: 97vh;
  overflow: hidden;

  &__lyrics {
    display: block;
    width: 100%;
  }
}

.slider-target {
  --slider-handle-width: 32px;
  --slider-handle-height: 32px;
}
</style>
