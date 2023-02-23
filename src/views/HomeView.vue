<script setup>
import CueScroller from "../components/CueScroller.vue";
import CuePool from "../components/CuePool.vue";
import Credits from "../components/Credits.vue";
</script>

<template>
  <main>
    <div class="columns">
      <div class="column p-0">
        <CuePool />
        <Credits />
      </div>
      <div class="column is-four-fifths p-0">
        <CueScroller />
      </div>
    </div>
  </main>
</template>
