import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store'
import router from './router'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')