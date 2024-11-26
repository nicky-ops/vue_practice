import {createApp} from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import $pages from './data';
import $bus from './utils/Events';
import router from './routes';

const app = createApp(App);

app.use(router);

app.config.globalProperties.$bus = $bus;
// app.config.globalProperties.$pages = $pages;

app.provide('$pages', $pages);

app.mount('#app');