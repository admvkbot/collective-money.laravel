<template>
  <div
    class="modal fade"
    id="addSocialModalMessage"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addSocialModalMessageTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">
            Добавление аккаунта соцсети
          </h5>
          <button
            type="button"
            class="btn-close text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label>Соцсеть</label>
              <select
                class="form-control"
                name="choices-button"
                id="choices-button"
                placeholder="Выберите соцсеть"
                v-model="selected"
                v-if="socialNetworksData.value.length > 1"
              >
                <option
                  v-for="item in socialNetworksData.value"
                  :value="item.id"
                  :key="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
              <vsud-input
                v-else
                id="social-name"
                type="text"
                placeholder="Название рабочего аккаунта"
                aria-label="Name"
                :isRequired="true"
                :active="false"
                :value="
                  socialNetworksData.value.length
                    ? this.socialNetworksData.value[0].name
                    : ''
                "
                :disabled="true"
              />
              <!--<input type="text" class="form-control" placeholder="Название рабочего аккаунта" v-model="email">-->
            </div>

            <div class="form-group">
              <label>ID</label>
              <vsud-input
                id="social-id"
                type="text"
                :placeholder="placeholder"
                aria-label="ID"
                :isRequired="true"
                :error="this.socialid.error"
                :success="this.socialid.success"
                :value="this.socialid.value"
                @input-value="(v) => (this.socialid.value = v)"
              />
              <!--<input type="email" class="form-control" placeholder="Email рабочего аккаунта" v-model="email">-->
            </div>
            <div class="form-group">
              <label>URL</label>
              <vsud-input
                id="social-url"
                type="text"
                placeholder="Ссылка на аккаунт"
                aria-label="Social URL"
                :isRequired="true"
                :error="this.url.error"
                :success="this.url.success"
                :value="this.url.value"
                @input-value="(v) => (this.url.value = v)"
              />
              <!--<input type="email" class="form-control" placeholder="Дескрипшн" v-model="email">-->
            </div>
            <div class="form-group">
              <label>Описание</label>
              <vsud-input
                id="description"
                type="text"
                placeholder="Краткое описание"
                aria-label="Description"
                @input-value="(v) => (this.description = v)"
              />
              <!--<input type="email" class="form-control" placeholder="Дескрипшн" v-model="email">-->
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn bg-gradient-secondary"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>
          <button
            type="button"
            class="btn bg-gradient-primary"
            @click.prevent="sendData(v$)"
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import VsudInput from "../VsudInput.vue";
import VsudButton from "../VsudButton.vue";
//import VueSelect from 'vue-next-select';
//import 'vue-next-select/dist/index.min.css'
import { useVuelidate } from "@vuelidate/core";
import { url, required, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "AddSocialModal",
  inject: ["socialNetworksData"],
  created() {
    console.log(this.socialNetworksData.value);
  },
  setup() {
    /*    const value = ref(0)
    const options = reactive([0, 1, 2])*/
    return {
      v$: useVuelidate(),
    };
  },
  emits: ["socialsReload"],
  data() {
    return {
      socialNetworkId: null,
      socialid: {
        value: "",
        error: false,
        success: false,
      },
      url: {
        value: "",
        error: false,
        success: false,
      },
      description: "",
      registerError: "",
      selected: null,
      out: "",
    };
  },
  props: {
    /*socialNetworksData: { 
        type: Array, 
        default: [{id: 1, name: "Twitter", description: "ddd"}],      
     },*/
    addModal: {
      type: Object,
      default: () => {},
    },
    accountId: 0,
  },
  components: {
    VsudInput,
    VsudButton,
    /*VueSelect*/
  },
  validations() {
    return {
      socialid: {
        value: { required, minLength: minLength(3) },
      },
      url: {
        value: { url, required },
      },
      description: { required, maxLength: maxLength(256) },
    };
  },
  methods: {
    sendData(v) {
      //console.log("---"+this.accountId)
      if (this.checkFields(v)) {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios
            .post("/api/add-social", {
              accountId: this.accountId,
              socialNetworkId:
                this.socialNetworksData.value.length == 1
                  ? this.socialNetworksData.value[0].id
                  : this.selected,
              socialid: this.socialid.value,
              url: this.url.value,
              description: this.description,
            })
            .then((r) => {
              //localStorage.setItem("invite", v.invite);
              //this.registerError = "";
              ////this.$router.push("Dashboard");
              this.closeModal();
              //this.$router.push('/accounts');
              //this.$router.go()
              this.$emit("socialsReload");
            })
            .catch((err) => {
              console.log(err.response);
              this.registerError = "Неизвестная ошибка";
              alert(this.registerError);
            });
        });
      }
    },
    checkFields(v) {
      let flagStatus = true;
      if (v.socialid.value.$invalid) {
        this.socialid.error = true;
        this.socialid.success = false;
        flagStatus = false;
      } else {
        this.socialid.error = false;
        this.socialid.success = true;
      }

      if (v.url.value.$invalid) {
        this.url.error = true;
        this.url.success = false;
        flagStatus = false;
      } else {
        this.url.error = false;
        this.url.success = true;
      }

      return flagStatus;
    },
    closeModal() {
      this.addModal.hide();
    },
  },
};
</script>
