<script>
  import { store } from '@/store.js';

  export default {
    data() {
      return {
        keyword: ''
      }
    },
    computed: {
      reservedCues() {
        return store.reservedCues;
      }
    },
    methods: {
      setCurrentCue(cue) {
        store.currentCue = cue;
      },
      removeCue(cueId) {
        store.reservedCues = store.reservedCues.filter(cue => cue.id == cueId);
      }
    }
  }
</script>

<template>
  <div class="cue-pool pt-4 pl-4 pb-4 pr-0">
    <nav class="panel">
      <p class="panel-heading">
        Search
      </p>
      <div class="panel-block">
        <p class="control">
          <input class="input" type="text" placeholder="Search">
        </p>
      </div>
      <div class="panel-block is-justify-content-space-between">
        <a class="is-block mr-3">bulma</a>
        <a class="is-block">reserve</a>
      </div>
    </nav>
    <nav class="panel">
      <p class="panel-heading">
        Reserved
      </p>
      <div v-bind:key="index" v-for="(cue, index) in reservedCues" class="panel-block is-justify-content-space-between">
        <a class="is-block mr-3" @click="setCurrentCue(cue)">{{ cue.title }}</a>
        <a class="is-block" @click="removeCue(cue.id)">remove</a>
      </div>
    </nav>
  </div>
</template>
