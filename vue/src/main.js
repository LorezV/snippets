import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

export const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
app.congig = {
    globalProperties: {
        apiServerIP: '127.0.0.1:8000'
    }
}