<template>
  <navbar btn-background="bg-gradient-primary" />
  <div
    class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
    :style="{
      backgroundImage:
        'url(' + require('@/assets/img/curved-images/curved6.jpg') + ')',
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2 text-white">С возвращением!</h1>
          <p class="text-white text-lead">
            Управляйте своим инвестиционным кейсом при помощи Collective Money
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>Войти</h5>
          </div>
          <div class="card-body">
            <form role="form">
              <div class="mb-3">
                <vsud-input
                  id="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  @input-value="(v) => this.email = v"
                />
              </div>
              <div class="mb-3">
                <vsud-input
                  id="password"
                  type="password"
                  placeholder="Пароль"
                  aria-label="Password"
                  @input-value="(v) => this.password = v"
                />
              </div>
                    <vsud-switch id="rememberMe" name="rememberMe" checked>
                      Запомнить меня
                    </vsud-switch>

              <div class="text-center">
                <vsud-button
                  color="dark"
                  full-width
                  variant="gradient"
                  class="my-4 mb-2"
                  @click.prevent="signin"
                  >Войти</vsud-button
                >
              </div>
              <p class="text-sm mt-3 mb-0">
                Нет аккаунта аккаунта?
                <router-link
                  :to="{ name: 'Sign Up' }"
                  class="text-dark font-weight-bolder"
                >
                  Зарегистрироваться
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import Navbar from "@/PageLayout/Navbar.vue";
import AppFooter from "@/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";

export default {
  name: "SignIn",
  components: {
    Navbar,
    AppFooter,
    VsudInput,
    VsudSwitch,
    VsudButton,
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  data() {
     return {
        email: '',
        password: '',
     }
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    signin() {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios
            .post("/login", { 
               email: this.email, 
               password: this.password, 
            })
            .then((r) => {
              localStorage.setItem(
                "x_xsrf_token",
                r.config.headers["X-XSRF-TOKEN"]
              );
              this.$router.push("Dashboard"); // user.personal
            })
            .catch((err) => {
              console.log(err.response);
            });
        });
    },
  },
};
</script>
