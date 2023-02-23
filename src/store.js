import { reactive } from 'vue';
import lyrics1 from '@/assets/images/Himno 34.jpg';
import lyrics2 from '@/assets/images/Adaptation - Araw-araw ng Buhay Ko (Constantly).jpg';

export const store = reactive({
  currentCue: null,
  searchedCues: [],
  reservedCues: []
});

export const actions = {
  reserveCue(cue) {
    store.reservedCues = store.reservedCues.concat(cue);
  },
  removeCue(cueId) {
    store.reservedCues = store.reservedCues.filter(cue => cue.id == cueId);
  },
  setCurrentCue(cueId) {
    fetch(`http://${import.meta.env.VITE_API_HOST}/cues/${cueId}`)
      .then((response) => response.json())
      .then((cue) => {
        store.currentCue = cue.data.attributes;
      });
  },
  fetchCues(keyword = '') {
    fetch(`http://${import.meta.env.VITE_API_HOST}/cues?keyword=${keyword}`)
      .then((response) => response.json())
      .then((cues) => {
        store.searchedCues = cues.data.map((cue) => cue.attributes)
      });
  }
}