import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
import axios from 'axios'


//import { config } from 'dotenv';
//config();


window.axios = axios;
window.axios.interceptors.response.use({}, err => {
   if (err.response.status === 401 || err.response.status === 419) {
      const token = localStorage.getItem('x_xsrf_token')
      if (token) {
         localStorage.removeItem('x_xsrf_token')
      }
      router.push({ name: 'Sign In' })
   }
})

require('./bootstrap');

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.mount("#app");