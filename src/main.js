import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import createRouter from './router';

const router = createRouter();
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');


