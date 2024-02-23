import './assets/styles/main.scss'
import "vue-awesome-paginate/dist/style.css";
import VueAwesomePaginate from "vue-awesome-paginate";
import 'vue3-toastify/dist/index.css';
import "vue3-loading-skeleton/dist/style.css";
import { SkeletonLoader } from "vue3-loading-skeleton";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3Toasity from 'vue3-toastify';
const app = createApp(App)

const ToastContainerOptions = {
    autoClose: 3000,
}

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.component("SkeletonLoader", SkeletonLoader)
app.use(pinia).use(router).use(VueAwesomePaginate).use(Vue3Toasity,  ToastContainerOptions).mount('#app')
