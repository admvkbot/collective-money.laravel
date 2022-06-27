<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse navText="Dashboard" :to="{ name: 'Dashboard' }">
          <template #icon>
            <spaceship-icon />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Проекты" :to="{ name: 'Products' }">
          <template #icon>
            <products />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Парсер Telegram" :to="{ name: 'TgParser' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
      <!--<li class="nav-item">
        <sidenav-collapse navText="Billing" :to="{ name: 'Billing' }">
          <template #icon>
            <credit-card />
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse
          navText="Virtual Reality"
          :to="{ name: 'Virtual Reality' }"
        >
          <template #icon>
            <box3d />
          </template>
        </sidenav-collapse>
      </li>-->
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2"
        >
          НАСТРОЙКИ
        </h6>
      </li>
      <!--<li class="nav-item">
        <sidenav-collapse navText="Аккаунты" :to="{ name: 'Accounts' }">
          <template #icon>
            <accounts />
          </template>
        </sidenav-collapse>
      </li>-->
      <li class="nav-item">
        <sidenav-collapse navText="Профиль" :to="{ name: 'Profile' }">
          <template #icon>
            <customer-support />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Аккаунты" :to="{ name: 'Accounts' }">
          <template #icon>
            <accounts-icon />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Рефереры" :to="{ name: 'Referers' }">
          <template #icon>
            <referers-icon />
          </template>
        </sidenav-collapse>
      </li>
      <!--<li class="nav-item">
        <sidenav-collapse navText="Sign Up" :to="{ name: 'Sign Up' }">
          <template #icon>
            <spaceship />
          </template>
        </sidenav-collapse>
      </li>-->
      <div v-if="isModerator">
        <li class="mt-3 nav-item">
          <h6
            class="
              text-xs
              ps-4
              text-uppercase
              font-weight-bolder
              opacity-6
              ms-2
            "
          >
            МОДЕРАЦИЯ
          </h6>
        </li>
        <li class="nav-item">
          <sidenav-collapse navText="Scam" :to="{ name: 'Scam' }">
            <template #icon>
              <scam-icon />
            </template>
          </sidenav-collapse>
        </li>
        <li class="nav-item">
          <sidenav-collapse navText="Продукты" :to="{ name: 'ProductsModerator' }">
            <template #icon>
              <humidity />
            </template>
          </sidenav-collapse>
        </li>
      </div>
    </ul>
  </div>
  <!--  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card
      :class="cardBg"
      textPrimary="Need Help?"
      textSecondary="Please check our docs"
      route="https://www.creative-tim.com/learning-lab/vue/overview/soft-ui-dashboard/"
      label="Documentation"
      icon="ni ni-diamond"
    />
    <a
      class="btn bg-gradient-success mt-4 w-100"
      href="https://www.creative-tim.com/product/vue-soft-ui-dashboard-pro?ref=vsud"
      type="button"
      >Upgrade to pro</a
    >
  </div>-->
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
//import SidenavCard from "./SidenavCard.vue";
import Office from "../components/Icon/Office.vue";
import CreditCard from "../components/Icon/CreditCard.vue";
import Box3d from "../components/Icon/Box3d.vue";
import CustomerSupport from "../components/Icon/CustomerSupport.vue";
import AccountsIcon from "../components/Icon/Accounts.vue";
import Document from "../components/Icon/Document.vue";
import Spaceship from "../components/Icon/Spaceship.vue";
import Settings from "../components/Icon/Settings.vue";
import ReferersIcon from "../components/Icon/Referers.vue";
import Humidity from "../components/Icon/Humidity.vue";
import ScamIcon from "../components/Icon/Scam.vue";
import SpaceshipIcon from "../components/Icon/Spaceship.vue";
import Products from "../components/Icon/Products.vue";
import { inject } from "vue";

export default {
  name: "SidenavList",
  setup() {
    let myData = inject("myData");
    return { myData };
  },
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Панель Collective Money",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavCollapse,
    /*SidenavCard,*/
    Office,
    CreditCard,
    Box3d,
    CustomerSupport,
    AccountsIcon,
    Document,
    Spaceship,
    Settings,
    ReferersIcon,
    Humidity,
    SpaceshipIcon,
    ScamIcon,
    Products,
    /*AsyncComponent: defineAsyncComponent(() => import("@/views/Moderator.vue")),*/
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
  computed: {
    isModerator() {
      return this.myData.value.type === 1 ? true : false;
    },
  },
};
</script>
