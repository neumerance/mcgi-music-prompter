<script>
  import { store, actions } from '@/store.js';

  export default {
    data() {
      return {
        keyword: ''
      }
    },
    computed: {
      reservedCues() {
        return store.reservedCues;
      },
      searchedCues() {
        return store.searchedCues;
      }
    },
    created() {
      this.fetchCues(null);
    },
    methods: { ...actions }
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
          <input v-model="keyword" class="input" type="text" placeholder="Search" @change="fetchCues(keyword)">
        </p>
      </div>
      <div v-bind:key="`search-cue-${index}`" v-for="(cue, index) in searchedCues" class="panel-block is-justify-content-space-between">
        <a class="is-block mr-3" @click="setCurrentCue(cue.id)">{{ cue.title }}</a>
        <a class="is-block" @click="reserveCue(cue)">reserve</a>
      </div>
    </nav>
    <nav class="panel">
      <p class="panel-heading">
        Reserved
      </p>
      <div v-bind:key="`reserved-cue-${index}`" v-for="(cue, index) in reservedCues" class="panel-block is-justify-content-space-between">
        <a class="is-block mr-3" @click="setCurrentCue(cue)">{{ cue.title }}</a>
        <a class="is-block" @click="removeCue(cue.id)">remove</a>
      </div>
    </nav>
  </div>
</template>
