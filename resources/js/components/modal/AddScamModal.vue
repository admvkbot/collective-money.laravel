<template>
  <div
    class="modal fade"
    id="addScamMessage"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addScamMessageTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">Добавление скама в базу</h5>
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
            <div v-if="tgUserData.username || projectData.name">
              <div class="form-group" v-if="tgUserData.username">
                <label>Telegram username</label>
                <div class="row">
                  <div class="col-12 col-sm-8">
                    <vsud-input
                      id="tg-user-name"
                      type="text"
                      placeholder="@user_name"
                      aria-label="tg-user-name"
                      :isRequired="false"
                      :value="'@' + tgUserData.username"
                      @input-value="(v) => (tgUserData.username = v)"
                    />
                  </div>
                  <div class="col-12 col-sm-4 mt-3 mt-sm-0">
                    <button
                      type="button"
                      class="btn bg-gradient-primary"
                      @click.prevent="sendSetScamUserStatusData(messageId)"
                    >
                      Подтвердить
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group" v-if="projectData.name">
                <label>Проект</label>
                <div class="row">
                  <div class="col-12 col-sm-8">
                    <vsud-input
                      id="project-name"
                      type="text"
                      placeholder="Название проекта"
                      aria-label="project-name"
                      :isRequired="false"
                      :value="projectData.name"
                      @input-value="(v) => (projectData.name = v)"
                    />
                  </div>
                  <div class="col-12 col-sm-4 mt-3 mt-sm-0">
                    <button
                      type="button"
                      class="btn bg-gradient-primary"
                      @click.prevent="sendSetScamProjectStatusData(messageId)"
                    >
                      Подтвердить
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else><label>Данные не найдены</label></div>
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
            class="btn bg-gradient-success"
            @click.prevent="sendIgnoreData(messageId)"
          >
            Игнорировать
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

export default {
  name: "AddScamModal",
  emits: ["reload"],
  props: {
    messageId: {
      type: Number,
      require: true,
    },
    rawString: {
      type: String,
      default: "",
    },
    modal: {
      type: Object,
      default: () => {},
    },
    tgUserData: {
      type: Object,
      require: true,
      default: {
        id: null,
        username: "",
      },
    },
    projectData: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
  components: {
    VsudInput,
    VsudButton,
  },
  methods: {
    strToTgUsername(str) {
      return `@${str}`;
    },
    sendIgnoreData(messageId) {
      axios
        .get("/api/scam-tg-message-ignore/" + messageId, {})
        .then((r) => {
          this.closeModal();
          this.$emit("mesagesReload");
        })
        .catch((err) => {
          console.log(err.response);
          this.registerError = "Ошибка запроса на игнор сообщения о скаме";
          alert(this.registerError);
        });
    },
    sendSetScamUserStatusData(messageId) {
      axios
        .post("/api/pre-scam-tg-user/" + messageId, {
          tgUsername: this.tgUserData.username,
          tgUserId: this.tgUserData.id,
          projectId: this.projectData.id,
        })
        .then((r) => {
          this.closeModal();
          this.$emit("mesagesReload");
        })
        .catch((err) => {
          console.log(err.response);
          this.registerError = "Ошибка запроса становку статуса Scam";
          alert(this.registerError);
        });
    },
    sendSetScamProjectStatusData(messageId) {
      axios
        .post("/api/pre-scam-project/" + messageId, {
          tgUsername: this.tgUserData.username,
          tgUserId: this.tgUserData.id,
          projectId: this.projectData.id,
        })
        .then((r) => {
          this.closeModal();
          this.$emit("mesagesReload");
        })
        .catch((err) => {
          console.log(err.response);
          this.registerError = "Ошибка запроса становку статуса Scam";
          alert(this.registerError);
        });
    },
    closeModal() {
      this.modal.hide();
    },
  },
};
</script>
