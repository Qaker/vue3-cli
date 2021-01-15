import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router";
import store from "./store";

import "normalize.css";
import "element-plus/lib/theme-chalk/index.css";
import "./styles/index.scss";

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
