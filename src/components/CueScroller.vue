<script>
  import lyrics from "@/assets/images/lyrics.jpg";

  export default {
    data() {
      return {
        lyrics: lyrics
      }
    }
  }
</script>

<template>
  <div class="cue-scroll">
    <img class="cue-scroll__lyrics" :src="lyrics" />
  </div>
</template>

<style lang="scss" scoped>
  .cue-scroll {
    &__lyrics {
      display: block;
      width: 100%;
    }
  }
</style>