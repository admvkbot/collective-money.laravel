//import Vue from "vue"
import { createApp, reactive, defineCustomElement } from 'vue'
//import { defineCustomElement } from 'vue'
//import { useVuelidate } from '@vuelidate/core'
//import { email, required } from '@vuelidate/validators'
import Index from './components/Index'
import router from "./router"
import axios from 'axios'
import mainFooter from './components/mainFooter.ce'

window.axios = axios;
window.axios.interceptors.response.use({}, err => {
   if (err.response.status === 401 || err.response.status === 419) {
      const token = localStorage.getItem('x_xsrf_token')
      if (token) {
         localStorage.removeItem('x_xsrf_token')
      }
      router.push({ name: 'user.login' })
   }
})

//require('./bootstrap');

//Vue.component('Index', Index)
//Vue.component('mainFooter', mainFooter)

const mainFooterElement = defineCustomElement(mainFooter)
customElements.define('main-footer', mainFooterElement)

const app = createApp({
   //el: '#app',

   components: {
      Index
   }
})
   .use(router)

//console.log(app.config)
//app.config.globalProperties.$nowRegister = true
//console.log(app.config)

app.mount('#app')
