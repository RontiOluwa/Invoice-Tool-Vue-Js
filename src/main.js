import { createApp } from 'vue'
import App from './App.vue'
// import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-sugar.css';
import './assets/css/main.css'
import router from './router'
import store from "./store.js";

const app = createApp(App)
app.use(store)
// app.use(VueToast)
app.use(router)
app.mount('#app')