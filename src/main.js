import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import "sweetalert2/dist/sweetalert2.min.css";
import VueSweetalert2 from "vue-sweetalert2";

import { createYmaps } from "vue-yandex-maps";

import Group from "./pages/Group.vue";
import Home from "./pages/Home.vue";
import Privacy from "./pages/Privacy.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Курс по йоге, пилатесу и стретчингу — Фитнес школа Эксперт",
      description:
        "Профессиональное обучение инструкторов йоги, пилатеса и стретчинга в Краснодаре. Получите сертификат и начните карьеру в фитнес-индустрии.",
    },
    component: Home,
  },
  {
    path: "/group",
    name: "group",
    meta: {
      title: "Инструктор групповых программ — Обучение и диплом",
      description:
        "Станьте универсальным фитнес-инструктором групповых программ. Обучение методикам силовых, функциональных и аэробных тренировок с выдачей диплома в Краснодаре.",
    },
    component: Group,
  },
  {
    path: "/privacy",
    name: "privacy",
    meta: {
      title: "Политика конфиденциальности — Фитнес школа Эксперт",
      description:
        "Условия обработки персональных данных и политика конфиденциальности фитнес школы.",
    },
    component: Privacy,
  },
];

const options = {
  confirmButtonColor: "#923EA1",
  cancelButtonColor: "#ff7674",
};

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Объединяем логику обновления Title и Description
router.beforeEach((to, from, next) => {
  // Title
  document.title = to.meta.title || "Фитнес школа Эксперт";

  // Description
  const description = to.meta.description;
  if (description) {
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", description);
    } else {
      metaDescriptionTag = document.createElement("meta");
      metaDescriptionTag.setAttribute("name", "description");
      metaDescriptionTag.setAttribute("content", description);
      document.head.appendChild(metaDescriptionTag);
    }
  }
  next();
});

// Объединяем логику обновления Title и Description
router.afterEach((to) => {
  if (window.ym) {
    window.ym(98219653, "hit", to.fullPath);
  }
});

const ymaps = createYmaps({
  // apikey: "9fa90fbc-ce5f-4dc9-ae6d-433e0ec7338b",
  apikey: "b416be62-553e-4d30-ab13-a0204407db26",
});

app.use(router);
app.use(VueSweetalert2, options);
app.use(ymaps);
app.mount("#app");
