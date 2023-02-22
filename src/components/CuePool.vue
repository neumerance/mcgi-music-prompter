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
    <nav class="panel cue-pool__search">
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
    <nav class="panel cue-pool__reserve">
      <p class="panel-heading">
        Reserved
      </p>
      <div v-bind:key="`reserved-cue-${index}`" v-for="(cue, index) in reservedCues" class="panel-block is-justify-content-space-between">
        <a class="is-block mr-3" @click="setCurrentCue(cue.id)">{{ cue.title }}</a>
        <a class="is-block" @click="removeCue(cue.id)">remove</a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  .cue-pool {
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    ::-webkit-scrollbar-thumb:window-inactive {
      background: rgba(255, 255, 255, 0.3);
    }

    &__search {
      height: 45vh;
      max-height: 45vh;
      overflow-y: scroll;
    }

    &__reserve {
      height: 45vh;
      max-height: 45vh;
      overflow-y: scroll;
    }
  }
</style>
