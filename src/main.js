import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3AutoScroll from "vue3-auto-scroll";
import Select2 from "vue3-select2-component";

import "@/assets/main.scss";

const app = createApp(App);

app.use(router);
app.use(Vue3AutoScroll);
app.use(Select2);

app.mount("#app");
