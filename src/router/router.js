import { createRouter, createWebHashHistory } from 'vue-router';
import LoginAll from '../components/LoginAll.vue';
import MainPage from '../components/MainPage.vue';

const routes = [
  { path: '/login', component: LoginAll },
  { path: '/mainPage', component: MainPage },
  { path: '/', redirect: '/mainPage' }, 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
