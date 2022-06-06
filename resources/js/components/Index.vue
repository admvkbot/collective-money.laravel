<template>
  <div id="appw">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="/images/header/logo.svg" alt="logo" class="navbar__logo" />
          Collective Money</a
        >
        <div class="navbar-burger burger" data-target="navbarExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start" v-if="token" :key="route.name">
          <router-link
            v-if="token"
            :to="{ name: 'get.index' }"
            class="navbar-item"
            >Get</router-link
          >

          <router-link
            v-if="token"
            :to="{ name: 'user.personal.firstTab' }"
            class="navbar-item"
            >Personal</router-link
          >
          <a class="navbar-item" href="https://bulma.io/">Home</a>
          <div class="navbar-item has-dropdown is-hoverable" v-if="privilege">
            <a class="navbar-link" href="#">Admin</a>
            <div class="navbar-dropdown is-boxed">
              <router-link
                  :to="{ name: 'admin.users' }"
                  class="navbar-item"
                  >Users</router-link
               >
              <hr class="navbar-divider" />
              <router-link
                  :to="{ name: 'admin.settings' }"
                  class="navbar-item"
                  >Settings</router-link
               >
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <!--<p class="control">
                    <a
                      class="bd-tw-button button"
                      data-social-network="Twitter"
                      href="#"
                    >
                      <span class="icon">
                        <i class="fab fa-twitter fa-2x"></i>
                      </span>
                    </a>
                  </p>-->
              <p class="control" v-if="token">
                <a class="button is-outlined" @click.prevent="logout" href="#">
                  <span class="icon">
                    <i class="fa fa-sign-out-alt"></i>
                  </span>
                  <span>Sign out</span>
                </a>
              </p>
              <p class="control" v-if="!token && this.nowRegister == 1">
                <router-link
                  class="button is-info"
                  :to="{ name: 'user.login' }"
                >
                  <span class="icon">
                    <i class="fa fa-sign-in-alt"></i>
                  </span>
                  <span>Sign in</span>
                </router-link>
              </p>
              <p class="control" v-if="!token && this.nowRegister != 1">
                <router-link
                  class="button is-info"
                  :to="{ name: 'user.registration' }"
                >
                  <span class="icon">
                    <i class="fa fa-user-plus"></i>
                  </span>
                  <span>Sign up</span>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="container">
      <router-view @nowRegister="doNowRegister" />
    </section>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  props: [],
  setup(props) {
    const route = useRoute();
    const token = ref();

    watch(
      () => route.name,
      () => {
        console.log(
          `MyCoolComponent - watch route.name changed to ${route.name}`
        );
        token.value = getToken();
        // Do something here...

        // Optionally you can set immediate: true config for the watcher to run on init
        //}, { immediate: true });
      }
    );

    const getToken = () => {
      return localStorage.getItem("x_xsrf_token");
    };

    token.value = getToken();
    /*onMounted(() => {
      token = getToken();
    });*/
    return {
      token,
      route,
      token,
    };
  },

  name: "Index",

  mounted() {
     this.getUserData();
  },

  data() {
    return {
      nowRegister: false,
      privilege: false,
    };
  },

  methods: {
     getUserData() {
      axios.get("/api/userdata").then((res) => {
         if (res.data === 1) {
            this.privilege = true;
         }
      });
    },
    doNowRegister(value) {
      this.nowRegister = value;
    },

    logout() {
      axios.post("/logout").then((res) => {
        localStorage.removeItem("x_xsrf_token");
        this.$router.push({ name: "Sign In" });
      });
    },
  },
};
</script>

<style>
</style>