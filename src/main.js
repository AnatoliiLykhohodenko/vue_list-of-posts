import 'bulma/bulma.sass';
import 'material-icons/iconfont/material-icons.css';
import './assets/sidebar.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

createApp(App).use(router).mount('#app');
