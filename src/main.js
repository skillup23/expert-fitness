import './assets/main.css';

import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';

import Home from './pages/Home.vue';
import Yoga from './pages/Yoga.vue';

const app = createApp(App);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/yoga', name: 'yoga', component: Yoga },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount('#app');

// import './assets/main.css';
// import Vue from 'vue';
// import { VueRouter } from 'vue-router';
// import App from './App.vue';

// import Home from './pages/Home.vue';
// import Yoga from './pages/Yoga.vue';

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: [
//     { path: '/', name: 'Home', component: Home },
//     { path: '/yoga', name: 'yoga', component: Yoga },
//   ],
// });

// new Vue({
//   el: '#app',
//   router,
//   template: '<App></App>',
//   components: { App },
// });
