import { reactive } from 'vue';
import lyrics1 from '@/assets/images/Himno 34.jpg';
import lyrics2 from '@/assets/images/Adaptation - Araw-araw ng Buhay Ko (Constantly).jpg';

export const store = reactive({
  currentCue: null,
  searchedCues: [],
  reservedCues: []
});
