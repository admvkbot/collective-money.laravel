import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import Dashboard from "./views/Dashboard.vue";
import TgParser from "./views/TgParser.vue";
import Profile from "./views/Profile.vue";
import Accounts from "./views/accounts/Accounts.vue";
import Referers from "./views/referers/Referers.vue";
import EditAccount from "./views/accounts/EditAccount.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";

const routes = [
   {
      path: "/",
      name: "/",
      redirect: "/dashboard",
   },
   {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
   },
   {
      path: "/tgparser",
      name: "TgParser",
      component: TgParser,
   },
   {
      path: "/profile",
      name: "Profile",
      component: Profile,
   },
   {
      path: "/accounts",
      name: "Accounts",
      component: Accounts,
   },
   {
      path: "/referers",
      name: "Referers",
      component: Referers,
   },
   {
      path: "/accounts/edit/:accountId",
      name: "Edit Account",
      component: EditAccount,
      props: true,
   },
   {
      path: "/products",
      name: "Products",
      component: defineAsyncComponent(() => import("@/views/products/ProductsModerator.vue")),
   },
   {
      path: "/products/add",
      name: "Add Product",
      component: defineAsyncComponent(() => import("@/views/products/AddProduct.vue")),
      props: true,
   },
   {
      path: "/products/edit/:productId",
      name: "Edit Product",
      component: defineAsyncComponent(() => import("@/views/products/EditProduct.vue")),
      props: true,
   },
   {
      path: "/products/edit-key/:productId",
      name: "Edit Product Key",
      component: defineAsyncComponent(() => import("@/views/products/EditProductKey.vue")),
      props: true,
   },
   {
      path: "/sign-in",
      name: "Sign In",
      component: SignIn,
   },
   {
      path: "/sign-up",
      name: "Sign Up",
      component: SignUp,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
   linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
   const token = localStorage.getItem('x_xsrf_token')

   if (!token) {
      if (to.name === 'Sign In' || to.name === 'Sign Up') {
         return next()
      } else {
         return next({
            name: 'Sign In'
         })
      }
   }

   /*if ((to.name === 'Dashboard') && token) {
      return next({
         name: 'user.personal.firstTab'
      })
   }

   if ((to.name === 'user.login' || to.name === 'user.registration') && token) {
      return next({
         name: 'user.personal.firstTab'
      })
   }*/

   next()

})

export default router;
