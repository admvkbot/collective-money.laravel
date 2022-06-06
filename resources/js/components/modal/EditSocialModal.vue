<template>
  <div
    class="modal fade"
    id="editSocialModalMessage"
    tabindex="-1"
    role="dialog"
    aria-labelledby="editSocialModalMessageTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">
            Редактирование данных соцсети
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
              <vsud-input
                id="social-name"
                type="text"
                placeholder="Название рабочего аккаунта"
                aria-label="Name"
                :isRequired="true"
                :active="false"
                :value="this.social ? this.social.name : ''"
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
                :value="this.social ? this.social.socialid : ''"
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
                :value="this.social ? this.social.url : ''"
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
                :value="this.social ? this.social.description : ''"
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
import { Modal } from "bootstrap";
import { url, required, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "editSocialModal",
  inject: ["socialNetworksData", "alert", "alertTopVisible"],
  /*  created() {
    console.log(this.socialNetworksData.value);
  },*/
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
      alertTopVisible: false,
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
  created() {
    //this.alertModal = new Modal(document.getElementById("alert-top"));
    //console.log(this.alertTopVisible);
    this.alertTopVisible = true;
    //console.log(this.alertTopVisible);
    //this.alert.value.title = "OK";
    //this.alert.value.text = "Изменения в настройки соцсети внесены";
    //this.alertModal.show();
  },
  props: {
    /*socialNetworksData: { 
        type: Array, 
        default: [{id: 1, name: "Twitter", description: "ddd"}],      
     },*/
    editModal: {
      type: Object,
      default: () => {},
    },
    social: {
      type: Object,
      default: () => {},
    },
    accountId: {
      type: Number,
      default: 0,
    },
  },
  components: {
    VsudInput,
    VsudButton,
    Modal,
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
            .post("/api/edit-social", {
              id: this.social.id,
              account_id: this.accountId,
              social_network_id: this.social.social_network_id,
              socialid: this.socialid.value,
              url: this.url.value,
              description: this.description,
            })
            .then((r) => {
              //localStorage.setItem("invite", v.invite);
              //this.registerError = "";
              ////this.$router.push("Dashboard");
              this.closeModal();
              this.alertTopVisible = true;
              this.alert.value.title = "OK";
              this.alert.value.text = "Изменения в настройки соцсети внесены";

              //this.$router.push('/accounts');
              //this.$router.go()
              ///this.$emit("socialsReload");
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
        this.social.socialid = this.socialid.value;
      }

      if (v.url.value.$invalid) {
        this.url.error = true;
        this.url.success = false;
        flagStatus = false;
      } else {
        this.url.error = false;
        this.url.success = true;
        this.social.url = this.url.value;
      }

      return flagStatus;
    },
    closeModal() {
      this.editModal.hide();
    },
  },
};
</script>
