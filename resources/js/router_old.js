//import Vue from "vue";
//import VueRouter from "vue-router";
import { createRouter, createWebHistory } from 'vue-router'
//import { nextTick } from "vue/types/umd";

//Vue.use(createRouter)

const routes = [
   {
      path: "/user/admin", component: () => import('./components/admin/Index'),
      name: "admin",
      children: [
         {
            path: "/user/admin/users", component: () => import('./components/admin/Users'),
            name: "admin.users"
         },
         {
            path: "/user/admin/settings", component: () => import('./components/admin/Settings'),
            name: "admin.settings"
         }

      ]

   },
   {
      path: "/get", component: () => import('./components/Get'),
      name: "get.index"
   },
   {
      path: "/user/login", component: () => import('./components/Login'),
      name: "user.login"
   },
   {
      path: "/user/registration", component: () => import('./components/Registration'),
      name: "user.registration"
   },
   {
      path: "/user/personal", component: () => import('./components/Personal'),
      name: "user.personal",
      children: [
         {
            path: "/user/personal/first", component: () => import('./components/tabs/FirstTab'),
            name: "user.personal.firstTab"
         },
         {
            path: "/user/personal/second", component: () => import('./components/tabs/SecondTab'),
            name: "user.personal.secondTab"
         }

      ]
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

router.beforeEach((to, from, next) => {
   const token = localStorage.getItem('x_xsrf_token')

   if (!token) {
      if (to.name === 'user.login' || to.name === 'user.registration') {
         return next()
      } else {
         return next({
            name: 'user.login'
         })
      }
   }

   if ((to.name === 'user.personal') && token) {
      return next({
         name: 'user.personal.firstTab'
      })
   }

   if ((to.name === 'user.login' || to.name === 'user.registration') && token) {
      return next({
         name: 'user.personal.firstTab'
      })
   }

   next()

})

export default router