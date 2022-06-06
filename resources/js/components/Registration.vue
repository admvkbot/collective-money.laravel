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
            <p class="help is-danger" v-if="registerError">
              {{ registerError }}
            </p>
            <h1 class="title is-4">Sign up today</h1>
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
                    v-model="password.password"
                    class="input is-medium"
                    type="password"
                    placeholder="Password"
                    v-on:blur="showPasswordError(v$.password.password)"
                  />
                </div>
                <p class="help is-danger" v-if="passwordStatus">
                  {{ passwordStatus }}
                </p>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="password.passwordConfirmation"
                    class="input is-medium"
                    type="password"
                    placeholder="Repeate password"
                    v-on:blur="
                      showPasswordConfirmationError(
                        v$.password.passwordConfirmation
                      )
                    "
                  />
                </div>
                <p class="help is-danger" v-if="passwordConfirmationStatus">
                  {{ passwordConfirmationStatus }}
                </p>
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
                @click.prevent="register(v$)"
                class="button is-block is-primary is-fullwidth is-medium"
              >
                Sign up
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
import {
  email,
  required,
  minLength,
  alphaNum,
  sameAs,
} from "@vuelidate/validators";
import { onMounted } from "vue";

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
    const nowRegister = true;
    setIsRegister(nowRegister);
    return { v$: useVuelidate() };
  },

  name: "Registration",

  data() {
    return {
      registerError: "",
      emailStatus: "",
      inviteStatus: "",
      passwordStatus: "",
      passwordConfirmationStatus: "",
      invite: null,
      email: null,
      password: {
        password: null,
        passwordConfirmation: null,
      },
      name: null,
    };
  },

  validations() {
    return {
      invite: { required, minLengthValue: minLength(8) },
      email: { email, required },
      password: {
        password: { required, minLength: minLength(8) },
        passwordConfirmation: {
          required,
          sameAs: sameAs(this.password.password),
        },
      },
    };
  },

  methods: {
    register(v) {
      if (
        !this.showInviteError(v.invite) &&
        !this.showEmailError(v.email) &&
        !this.showPasswordError(v.password.password) &&
        !this.showPasswordConfirmationError(v.password.passwordConfirmation)
      ) {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios
            .post("/register", {
              invite: this.invite,
              email: this.email,
              password: this.password.password,
            })
            .then((r) => {
              localStorage.setItem(
                "x_xsrf_token",
                r.config.headers["X-XSRF-TOKEN"]
              );
              localStorage.setItem("invite", v.invite);
              this.registerError = "";
              this.$router.push("user.personal.firstTab");
            })
            .catch((err) => {
              console.log(err.response);
              this.registerError = "Registration error";
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
    showPasswordError(event) {
      if (event.$invalid) {
        this.passwordStatus = "This password is invalid";
      } else {
        this.passwordStatus = "";
      }
      return this.passwordStatus;
    },
    showPasswordConfirmationError(event) {
      if (event.$invalid) {
        this.passwordConfirmationStatus = "Must be same as Password";
      } else {
        this.passwordConfirmationStatus = "";
      }
      return this.passwordConfirmationStatus;
    },
  },
};
</script>

<style>
</style>
