import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
import axios from 'axios'
import VueLoading from 'vue-loading-overlay';

require('@/assets/js/plugins/init.js')
//import { config } from 'dotenv';
//config();


window.axios = axios;
window.axios.interceptors.response.use({}, err => {
   //console.log(router.currentRoute.value.name);
   if ((err.response.status === 401 || err.response.status === 419) && router.currentRoute.value.name != 'Sign Up') {
      const token = localStorage.getItem('x_xsrf_token')
      if (token) {
         localStorage.removeItem('x_xsrf_token')
      }
      router.push({ name: 'Sign In' })
   }
})

require('./bootstrap');

window.globalBlockTypes = [
   { id: 1, title: "Новый", color: "success", icon: "fas fa-child" },
   {
      id: 2,
      title: "Предварительная активность",
      color: "warning",
      icon: "fas fa-hiking",
   },
   {
      id: 3,
      title: "Открыт Whitelist",
      color: "primary",
      icon: "fas fa-play",
   },
   {
      id: 4,
      title: "Закрытие Whitelist",
      color: "danger",
      icon: "fas fa-pause",
   },
   {
      id: 5,
      title: "Начало продаж",
      color: "success",
      icon: "fas fa-check",
   },
   { id: 6, title: "Листинг", color: "info", icon: "fas fa-chart-line" },
   { id: 7, title: "Рабочий", color: "secondary", icon: "fas fa-star" },
   {
      id: 8,
      title: "Другое",
      color: "secondary",
      icon: "fas fa-hand-point-right",
   },
];

window.globalMonths = [
   { id: 1, title: "Январь" },
   { id: 2, title: "Февраль" },
   { id: 3, title: "Март" },
   { id: 4, title: "Апрель" },
   { id: 5, title: "Май" },
   { id: 6, title: "Июнь" },
   { id: 7, title: "Июль" },
   { id: 8, title: "Август" },
   { id: 9, title: "Сентябрь" },
   { id: 10, title: "Октябрь" },
   { id: 11, title: "Ноябрь" },
   { id: 12, title: "Декабрь" },
 ];

const appInstance = createApp(App);
document.querySelector('#app').classList = ['g-sidenav-show'];
appInstance.use(VueLoading);
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.mount("#app");