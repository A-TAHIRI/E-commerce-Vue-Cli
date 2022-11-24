import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import * as bootstrap from "bootstrap";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap";


createApp(App).use(router).use(store).use(bootstrap).mount("#app");



