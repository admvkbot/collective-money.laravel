<template>
  <navbar btn-background="bg-gradient-primary" />
  <div
    class="
      pt-5
      m-3
      page-header
      align-items-start
      min-vh-50
      pb-11
      border-radius-lg
    "
    :style="{
      backgroundImage: 'url(/img/curved-images/curved14.jpg)',
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2 text-white">Приветствуем!</h1>
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
            <h5>Регистрация</h5>
          </div>
          <div class="card-body" v-if="!is_first_time">
            <form role="form">
              <div class="mb-3">
                <vsud-input
                  id="name"
                  type="text"
                  placeholder="Никнейм"
                  aria-label="Name"
                  :error="this.nickName.error"
                  :success="this.nickName.success"
                  :value="this.nickName.value"
                  @input-value="(v) => (this.nickName.value = v)"
                />
              </div>
              <div class="mb-3">
                <vsud-input
                  id="tg-id"
                  type="text"
                  placeholder="telegram_username"
                  aria-label="tg-id"
                  :error="this.tgUsername.error"
                  :success="this.tgUsername.success"
                  :value="this.tgUsername.value"
                  :disabled="tgId ? true : false"
                  @input-value="(v) => (this.tgUsername.value = v)"
                />
              </div>
              <div class="mb-3">
                <vsud-input
                  id="password"
                  type="password"
                  placeholder="Пароль"
                  aria-label="Password"
                  :error="this.password.error"
                  :success="this.password.success"
                  :value="this.password.value"
                  @input-value="(v) => (this.password.value = v)"
                />
              </div>
              <div class="mb-3">
                <vsud-input
                  id="passwordConfirm"
                  type="password"
                  placeholder="Повторите пароль"
                  aria-label="PasswordConfirm"
                  @input-value="(v) => (this.password.valueConfirm = v)"
                />
              </div>
              <div class="mb-3">
                <vsud-input
                  id="invite"
                  type="text"
                  placeholder="Инвайт"
                  aria-label="Invites"
                  :error="this.invite.error"
                  :success="this.invite.success"
                  :value="this.invite.value"
                  :disabled="invite.value ? true : false"
                  @input-value="(v) => (this.invite.value = v)"
                />
              </div>
              <vsud-checkbox
                id="flexCheckDefault"
                name="flexCheckDefault"
                class="font-weight-light"
                checked
              >
                Я согласен с
                <a href="javascript:;" class="text-dark font-weight-bolder"
                  >условиями использования</a
                >
              </vsud-checkbox>

              <div class="text-center">
                <vsud-button
                  color="dark"
                  full-width
                  variant="gradient"
                  class="my-4 mb-2"
                  @click.prevent="register(v$)"
                  >Зарегистрироваться</vsud-button
                >
              </div>
              <p class="text-sm mt-3 mb-0">
                Уже есть аккаунт?
                <router-link
                  :to="{ name: 'Sign In' }"
                  class="text-dark font-weight-bolder"
                >
                  Войти
                </router-link>
              </p>
            </form>
          </div>
          <div class="card-body" v-else>
            <form role="form">
              <div class="mb-6 text-center">
                <a class="telegram-button" :href="tg_bot_url" target="_blank">
                  <i></i>
                  <span class="ml-2">@collective_money_bot</span>
                </a>
              </div>
              <p class="text-sm mt-3 mb-0">
                Уже есть аккаунт?
                <router-link
                  :to="{ name: 'Sign In' }"
                  class="text-dark font-weight-bolder"
                >
                  Войти
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
import Navbar from "../PageLayout/Navbar.vue";
import AppFooter from "../PageLayout/Footer.vue";
import VsudInput from "../components/VsudInput.vue";
import VsudCheckbox from "../components/VsudCheckbox.vue";
import VsudButton from "../components/VsudButton.vue";
//import { CryptoJS } from "crypto-js";
const CryptoJS = require("crypto-js");

import { mapMutations } from "vuex";

import { useVuelidate } from "@vuelidate/core";
import {
  required,
  maxLength,
  minLength,
  alphaNum,
  sameAs,
  helpers,
} from "@vuelidate/validators";

const contains = (param) => (value) => {
  let regexp = new RegExp(`^${param}[\\w_]+$`, "g");
  //console.log(regexp);
  return !helpers.req(value) || value.match(regexp);
};

export default {
  name: "SignupBasic",
  setup() {
    return { v$: useVuelidate() };
  },

  components: {
    Navbar,
    AppFooter,
    VsudInput,
    VsudCheckbox,
    VsudButton,
  },
  data() {
    return {
      tg_bot_url: "",
      is_first_time: true,
      _keyStr:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      tgId: 0,
      nickName: {
        value: "",
        error: false,
        success: false,
      },
      tgUsername: {
        value: "",
        error: false,
        success: false,
      },
      password: {
        value: "",
        valueConfirm: "",
        error: false,
        success: false,
      },
      invite: {
        value: "",
        error: false,
        success: false,
      },
      registerError: "",
    };
  },
  created() {
    this.tg_bot_url = process.env.MIX_TG_BOT_URL;
    if (typeof this.$route.query.q !== "undefined") {
      this.is_first_time = false;
      const key = CryptoJS.enc.Utf8.parse(process.env.MIX_TG_SEND_KEY);
      const decrypted = CryptoJS.AES.decrypt(this.$route.query.q, key, {
        mode: CryptoJS.mode.ECB,
      });
      [this.tgId, this.tgUsername.value, this.invite.value] =
        this.getQueryVariable(decrypted.toString(CryptoJS.enc.Utf8));
      this.nickName.value = this.tgUsername.value;
    } else {
      this.is_first_time = true;
    }

    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  validations() {
    return {
      nickName: {
        value: { required, minLength: minLength(3) },
      },
      invite: {
        value: { required, minLength: minLength(process.env.MIX_INVITE_LENGTH), maxLength: maxLength(process.env.MIX_INVITE_LENGTH), alphaNum },
      },
      tgUsername: {
        value: {
          tgId: contains(""),
          required,
        },
      },
      password: {
        value: { required, minLength: minLength(8) },
        valueConfirm: {
          required,
          sameAs: sameAs(this.password.value),
        },
      },
    };
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    register(v) {
      //console.log(v.nickName.value.$invalid);
      if (this.checkFields(v)) {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios
            .post("/register", {
              name: this.nickName.value,
              tg_id: this.tgId,
              tg_username: this.tgUsername.value,
              password: this.password.value,
              invite: this.invite.value,
            })
            .then((r) => {
              localStorage.setItem(
                "x_xsrf_token",
                r.config.headers["X-XSRF-TOKEN"]
              );
              //localStorage.setItem("invite", v.invite);
              //this.registerError = "";
              this.$router.push("Dashboard");
            })
            .catch((err) => {
              //console.log(err.response);
              this.registerError = "Неизвестная ошибка";
              alert(this.registerError);
            });
        });
      }

      //console.log(VsudInput);
    },
    checkFields(v) {
      let flagStatus = true;
      if (v.nickName.value.$invalid) {
        this.nickName.error = true;
        this.nickName.success = false;
        flagStatus = false;
      } else {
        this.nickName.error = false;
        this.nickName.success = true;
      }

      if (v.tgUsername.value.$invalid) {
        this.tgUsername.error = true;
        this.tgUsername.success = false;
        flagStatus = false;
      } else {
        this.tgUsername.error = false;
        this.tgUsername.success = true;
      }

      if (v.password.value.$invalid || v.password.valueConfirm.$invalid) {
        this.password.error = true;
        this.password.success = false;
        flagStatus = false;
      } else {
        this.password.error = false;
        this.password.success = true;
      }

      if (v.invite.value.$invalid) {
        this.invite.error = true;
        this.invite.success = false;
        flagStatus = false;
      } else {
        this.invite.error = false;
        this.invite.success = true;
      }

      return flagStatus;
    },

    encode: function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = this._utf8_encode(input);

      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output =
          output +
          this._keyStr.charAt(enc1) +
          this._keyStr.charAt(enc2) +
          this._keyStr.charAt(enc3) +
          this._keyStr.charAt(enc4);
      }

      return output;
    },

    // public method for decoding
    decode: function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < input.length) {
        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }

      output = this._utf8_decode(output);

      return output;
    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
      var string = "";
      var i = 0;
      var c = 0;
      var c3 = 0;
      var c2 = 0;

      while (i < utftext.length) {
        c = utftext.charCodeAt(i);

        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(
            ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
          );
          i += 3;
        }
      }
      return string;
    },
    rsa_decrypt(encrypted) {
      // Decrypt with the private key...
      const decrypt = new JSEncrypt();
      decrypt.setPrivateKey(process.env.MIX_TG_SEND_KEY);
      const uncrypted = decrypt.decrypt(encrypted);

      return uncrypted;
    },
    getQueryVariable(str) {
      const query = str; //.substring(1);
      const vars = query.split("&");
      const out = [];
      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (decodeURIComponent(pair[1])) {
          let param = decodeURIComponent(pair[1]);
          param = typeof value === "number" ? parseInt(param) : param;
          out.push(param);
        }
      }
      return out;
    },
  },
};
</script>
<style scoped>
.telegram-button {
  position: relative;
  display: inline-block;
  vertical-align: top;
  height: 40px;
  box-sizing: border-box;

  cursor: pointer;
  background-color: #0088cc;
  border-radius: 5px;
  padding: 5px 10px 10px 10px;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  /*font-size: 11px;*/
  color: #fff;
  text-decoration: none;
}

.telegram-button:hover {
  background-color: #007dbb;
}

.telegram-button:active {
  background-color: #026698;
}

.telegram-button i {
  display: inline-block;
  height: 16px;
  width: 19px;
  vertical-align: middle;
  margin-right: 2px;

  background: url("https://telegram.org/img/oauth/tg_button_medium.png")
    no-repeat;
  background-size: contain;
}

.telegram-button span {
  display: inline-block;
  vertical-align: top;
}
</style>
