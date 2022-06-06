<template>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-8 is-offset-2 register">
        <div class="columns">
          <div class="column left">
            <h1 class="title is-1">Super Cool Website</h1>
            <h2 class="subtitle colored is-4">Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ex deleniti aliquam tempora libero excepturi vero soluta odio
              optio sed.
            </p>
          </div>
          <div class="column right has-text-centered">
            <h1 class="title is-4">Log in</h1>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    v-model.trim="email"
                    class="input is-medium"
                    type="email"
                    placeholder="Email"
                    v-on:blur="showEmailError(v$.email)"
                  />
                </div>
                <p class="help is-danger" v-if="emailStatus">
                  {{ emailStatus }}
                </p>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="password"
                    class="input is-medium"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model.trim="invite"
                    class="input is-medium"
                    type="text"
                    placeholder="Invite"
                    v-on:blur="showInviteError(v$.invite)"
                  />
                </div>
                <p class="help is-danger" v-if="inviteStatus">
                  {{ inviteStatus }}
                </p>
              </div>

              <button
                class="button is-block is-primary is-fullwidth is-medium"
                @click.prevent="login(v$)"
              >
                Login
              </button>
              <br />
              <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
              <br />
              <!--<div :class="{ error: v$.email.$errors.length }">
                <input v-model="email" />
                <div
                  class="input-errors"
                  v-for="error of v$.email.$errors"
                  :key="error.$uid"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>-->
            </form>
          </div>
        </div>
      </div>
      <div class="column is-8 is-offset-2">
        <br />
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-instagram"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="level-right">
            <small class="level-item" style="color: var(--textLight)">
              &copy; Super Cool Website. All Rights Reserved.
            </small>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>


<script>
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, alphaNum } from "@vuelidate/validators";

export default {
  props: [],
  emits: ["nowRegister"],
  setup(props, { emit }) {
    const setIsRegister = (nowRegister) => {
      emit("nowRegister", nowRegister);
    };
    /*onMounted() => {
        this.setIsRegister();
      };*/
    const nowRegister = false;
    setIsRegister(nowRegister);
    return { v$: useVuelidate() };
  },

  name: "Login",

  data() {
    return {
      emailStatus: "",
      inviteStatus: "",
      invite: null,
      name: null,
      email: null,
      password: null,
    };
  },

  validations() {
    return {
      invite: { required, minLengthValue: minLength(8) },
      email: { email, required },
      password: { required },
    };
  },

  methods: {
    login(v) {
      if (!this.showInviteError(v.invite) && !this.showEmailError(v.email)) {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios
            .post("/login", { email: this.email, password: this.password })
            .then((r) => {
              localStorage.setItem(
                "x_xsrf_token",
                r.config.headers["X-XSRF-TOKEN"]
              );
              this.$router.push("personal/first"); // user.personal
            })
            .catch((err) => {
              console.log(err.response);
            });
        });
      }
    },
    showEmailError(event) {
      if (event.$invalid) {
        this.emailStatus = "This email is invalid";
      } else {
        this.emailStatus = "";
      }
      return this.emailStatus;
    },
    showInviteError(event) {
      if (event.$invalid) {
        this.inviteStatus = "This invite is invalid";
      } else {
        this.inviteStatus = "";
      }
      return this.inviteStatus;
    },
  },
};
</script>

<style>
</style>