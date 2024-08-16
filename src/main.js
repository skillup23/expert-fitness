import './assets/main.css';

import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createYmaps } from 'vue-yandex-maps';

import Home from './pages/Home.vue';
import Yoga from './pages/Yoga.vue';

const app = createApp(App);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/yoga', name: 'yoga', component: Yoga },
];

const options = {
  confirmButtonColor: '#923EA1',
  cancelButtonColor: '#ff7674',
};

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const ymaps = createYmaps({
  apikey: '9fa90fbc-ce5f-4dc9-ae6d-433e0ec7338b',
  // apikey: 'b416be62-553e-4d30-ab13-a0204407db26',
});

app.use(router);
app.use(VueSweetalert2, options);
app.use(ymaps);
app.mount('#app');
