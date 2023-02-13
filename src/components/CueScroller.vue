<script>
import lyrics from "@/assets/images/lyrics.jpg";
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      lyrics: lyrics,
      scrollSpeed: 0,
    };
  },
};
</script>

<template>
  <div>
    <div class="cue-scroll">
      <vue3-auto-scroll hide-scroll-bar :control="false" :speed="scrollSpeed">
        <img class="cue-scroll__lyrics" :src="lyrics" />
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
