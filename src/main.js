import "./assets/main.css";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import Yoga from "./pages/Yoga.vue";

const app = createApp(App);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/yoga", name: "yoga", component: Yoga },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
