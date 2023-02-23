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
    <h4 v-else class="is-size-3	has-text-weight-light has-text-centered m-5">Nothing here yet, please use the search section</h4>
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
