import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementPlus from "./plugins/element"

createApp(App).use(router).use(store)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount("#app");
