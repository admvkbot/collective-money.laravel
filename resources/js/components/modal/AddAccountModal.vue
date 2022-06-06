<template>
    <div class="modal fade" id="addAccountModalMessage" tabindex="-1" role="dialog" aria-labelledby="addAccountModalMessageTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">Создание рабочего аккаунта</h5>
            <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
                <form>
                   <div class="form-group">
                     <label>Название</label>
                        <vsud-input
                           id="name"
                           type="text"
                           placeholder="Название рабочего аккаунта"
                           aria-label="Name"
                           :isRequired="true"
                           :error="this.accountName.error"
                           :success="this.accountName.success"
                           :value="this.accountName.value"
                           @input-value="(v) => this.accountName.value = v"
                        />
                        <!--<input type="text" class="form-control" placeholder="Название рабочего аккаунта" v-model="email">-->
                     </div>

                     <div class="form-group">
                     <label>Email</label>
                        <vsud-input
                           id="email"
                           type="email"
                           placeholder="Email рабочего аккаунта"
                           aria-label="Email"
                           :isRequired="true"
                           :error="this.email.error"
                           :success="this.email.success"
                           :value="this.email.value"
                           @input-value="(v) => this.email.value = v"
                        />
                        <!--<input type="email" class="form-control" placeholder="Email рабочего аккаунта" v-model="email">-->
                     </div>
                     <div class="form-group">
                     <label>Описание</label>
                        <vsud-input
                           id="description"
                           type="text"
                           placeholder="Краткое описание"
                           aria-label="Description"
                           @input-value="(v) => this.description = v"
                        />
                        <!--<input type="email" class="form-control" placeholder="Дескрипшн" v-model="email">-->
                     </div>
               </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Закрыть</button>
                  <button type="button" class="btn bg-gradient-primary"  @click.prevent="sendData(v$)">Создать</button>
               </div>
         </div>
      </div>
    </div>
</template>

<script>
import VsudInput from "../VsudInput.vue";
import VsudButton from "../VsudButton.vue";
import { useVuelidate } from "@vuelidate/core";
import {
  email,
  required,
  minLength,
  maxLength,
} from "@vuelidate/validators";

export default {
  name: "AddAccountModal",
  setup() {
    return { v$: useVuelidate() };
  },
  emits: [
     'accountsReload'
  ],
  data() {
    return {
      accountName: {
         value: '',
         error: false,
         success: false,
      },
      email: {
         value: '',
         error: false,
         success: false,
      },
      description: '',
      registerError: '',

       out: "",

    } 
  },
  props: {
     theModal: {
        type: Object, 
        default: () => {},      
     }
  },
  components: {
    VsudInput,
    VsudButton,
  },
  validations() {
    return {
        accountName: {
           value: { required, minLength: minLength(3) },
        },
        email: {
         value: { email, required },
        },        
        description: { required, maxLength: maxLength(256) },
      }
  },
  methods: {
    sendData(v) {
       console.log(v.accountName.value.$invalid);
       if (this.checkFields(v))
       {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios
            .post("/api/add-account", {
              name: this.accountName.value,
              email: this.email.value,
              description: this.description,
            })
            .then((r) => {
              //localStorage.setItem("invite", v.invite);
              //this.registerError = "";
              ////this.$router.push("Dashboard");
              this.closeModal();
              //this.$router.push('/accounts'); 
              //this.$router.go()           
              this.$emit('accountsReload')
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
       if (v.accountName.value.$invalid)
       {
        this.accountName.error = true;
        this.accountName.success = false;
        flagStatus = false;
       } else {
        this.accountName.error = false;
        this.accountName.success = true;
       }

       if (v.email.value.$invalid)
       {
        this.email.error = true;
        this.email.success = false;
        flagStatus = false;
       } else {
        this.email.error = false;
        this.email.success = true;
       }
      
       return flagStatus;
    },
    closeModal() {
       this.theModal.hide();
    }

}  
};
</script>
