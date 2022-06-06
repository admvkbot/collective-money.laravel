<template>
  <vsud-alert-top
    color="info"
    icon="ni ni-like-2 ni-lg"
    dismissible
    :alertTopVisible="alertTopVisible"
  >
    <strong>{{ alert.title }}</strong> {{ alert.text }}
  </vsud-alert-top>
  <sidenav
    :custom_class="this.$store.state.mcolor"
    :class="[
      this.$store.state.isTransparent,
      this.$store.state.isRTL ? 'fixed-end' : 'fixed-start',
    ]"
    v-if="this.$store.state.showSidenav"
  />
  <main
    class="
      main-content
      position-relative
      max-height-vh-100
      h-100
      border-radius-lg
    "
    :style="this.$store.state.isRTL ? 'overflow-x: hidden' : ''"
  >
    <!-- nav -->
    <navbar
      :class="[navClasses]"
      :textWhite="this.$store.state.isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="this.$store.state.showNavbar && this.$route.name != 'Sign Up'"
    />
    <router-view />
    <app-footer v-show="this.$store.state.showFooter" />
    <configurator
      :toggle="toggleConfigurator"
      :class="[
        this.$store.state.showConfig ? 'show' : '',
        this.$store.state.hideConfigButton ? 'd-none' : '',
      ]"
    />
  </main>
</template>
<script>
import Sidenav from "./Sidenav";
import Configurator from "./Configurator.vue";
import Navbar from "./Navbars/Navbar.vue";
import AppFooter from "./examples/Footer.vue";
import VsudAlertTop from "@/components/VsudAlertTop.vue";

import getMyData from "@/assets/js/getMyData.js";

import { mapMutations } from "vuex";
import { computed, ref } from "vue";

export default {
  name: "App",
  setup() {
    const myData = ref("");
    myData.value = getMyData();
    return { myData };
  },
  provide() {
    return {
      myData: computed(() => this.myData),
      alertTopVisible: computed(() => this.alertTopVisible),
      alert: computed(() => this.alert),
    };
  },
  data() {
    return {
      alertTopVisible: false,
      alert: { title: "", text: "" },
    };
  },
  components: {
    getMyData,
    Sidenav,
    Configurator,
    Navbar,
    VsudAlertTop,
    /*AppFooter,*/
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky":
          this.$store.state.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2":
          this.$store.state.isAbsolute,
        "px-0 mx-4 mt-4": !this.$store.state.isAbsolute,
      };
    },
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
};
</script>
