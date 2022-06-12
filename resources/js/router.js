import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import Dashboard from "./views/Dashboard.vue";
import TgParser from "./views/TgParser.vue";
import Billing from "./views/Billing.vue";
import VirtualReality from "./views/VirtualReality.vue";
import Profile from "./views/Profile.vue";
import Accounts from "./views/Accounts.vue";
import Referers from "./views/Referers.vue";
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
      path: "/billing",
      name: "Billing",
      component: Billing,
   },
   {
      path: "/virtual-reality",
      name: "Virtual Reality",
      component: VirtualReality,
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
      component: defineAsyncComponent(() => import("@/views/ModerateProducts.vue")),
   },
   {
      path: "/products/add",
      name: "Add Product",
      component: defineAsyncComponent(() => import("@/views/AddProduct.vue")),
      props: true,
   },
   {
      path: "/products/edit/:productId",
      name: "Edit Product",
      component: defineAsyncComponent(() => import("@/views/EditProduct.vue")),
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
