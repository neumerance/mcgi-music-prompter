<script setup>
  import CueScroller from '../components/CueScroller.vue'
  import CuePool from '../components/CuePool.vue'
</script>

<template>
  <main>
    <div class="columns">
      <div class="column">
        <CuePool />
      </div>
      <div class="column is-four-fifths">
        <CueScroller />
      </div>
    </div>
  </main>
</template>
