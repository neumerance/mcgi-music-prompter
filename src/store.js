import { reactive } from 'vue';
import lyrics1 from '@/assets/images/Himno 34.jpg';
import lyrics2 from '@/assets/images/Adaptation - Araw-araw ng Buhay Ko (Constantly).jpg';

export const store = reactive({
  currentCue: null,
  reservedCues: [
    {
      id: 1,
      title: 'Himno # 34.jpg',
      src: lyrics1
    },
    {
      id: 2,
      title: 'Adaptation - Araw-araw ng Buhay Ko (Constantly)',
      src: lyrics2
    }
  ]
});
