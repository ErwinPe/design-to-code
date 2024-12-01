import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import router from "@/router";
import { createPinia } from "pinia";
import { i18n } from "@/plugins/i18n";

const app = createApp(App);

app.use(createPinia()).use(i18n).use(router).mount("#app");
