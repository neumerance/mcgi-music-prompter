<script>
import lyrics from "@/assets/images/lyrics.jpg";
import { Smoothie } from "vue-smoothie";
import { store } from '@/store.js';

export default {
  components: {
    Smoothie,
  },
  data() {
    return {
      lyrics: lyrics
    };
  },
  computed: {
    currentCue() {
      return store.currentCue
    }
  }
};
</script>

<template>
  <Smoothie class="cue-scroll" :weight="0.02">
    <img :key="currentCue.id" v-if="currentCue" class="cue-scroll__lyrics" :src="currentCue.src" />
  </Smoothie>
</template>

<style lang="scss" scoped>
.cue-scroll {
  height: 100vh;
  overflow: hidden;

  &__lyrics {
    display: block;
    width: 100%;
  }
}
</style>
