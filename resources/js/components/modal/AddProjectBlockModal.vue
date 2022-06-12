<template>
  <div
    class="modal fade"
    id="addProjectBlockModalMessage"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addProjectBlockModalMessageTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">
            Добавление этапа развития проекта
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
              <label>Тип</label>
              <select
                class="form-control"
                :class="
                  getSelectClasses(selectedType.success, selectedType.error)
                "
                name="choices-button"
                id="choices-button"
                placeholder="Выберите статус"
                v-model="selectedType.value"
              >
                <option
                  v-for="item in blockTypes"
                  :value="item.id"
                  :key="item.id"
                >
                  {{ item.title }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label>Название стадии</label>
              <vsud-input
                id="stage-name"
                type="text"
                placeholder="напр. Анонс в соцсетях"
                aria-label="stage-name"
                :isRequired="true"
                :error="this.stageName.error"
                :success="this.stageName.success"
                :value="this.stageName.value"
                @input-value="(v) => (this.stageName.value = v)"
              />
            </div>
            <div class="row d-flex">
              <div class="col-sm-5 col-5">
                <div class="form-group">
                  <label>Дата</label>
                  <select
                    class="form-control"
                    name="month"
                    id="stage-month"
                    v-model="selectedMonth"
                  >
                    <option
                      v-for="item in months"
                      :value="item.id"
                      :key="item.id"
                    >
                      {{ item.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-sm-3 col-3">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <select
                    class="form-control"
                    name="day"
                    id="stage-day"
                    v-model="selectedDay"
                  >
                    <option v-for="item in days" :value="item" :key="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-sm-4 col-4">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <select
                    class="form-control"
                    name="year"
                    id="stage-year"
                    v-model="selectedYear"
                  >
                    <option v-for="item in years" :value="item" :key="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <vsud-textarea
                id="project-block-description"
                placeholder="Основная информаия"
                :value="this.stageDescription"
                @textarea-value="(v) => (this.stageDescription = v)"
                >Описание</vsud-textarea
              >
            </div>
            <div class="form-group">
              <label class="form-label"
                >Значки (в сумме макс. 40 символов)</label
              >
              <input
                class="form-control"
                id="choices-skills"
                type="text"
                placeholder="Enter something"
              />
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
            Сохранить
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
import VsudTextarea from "../VsudTextarea.vue";
import Choices from "choices.js";
//import VueSelect from 'vue-next-select';
//import 'vue-next-select/dist/index.min.css'
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "AddProjectBlocklModal",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  emits: ["projectReload"],
  props: {
    blockId: {
      type: Number,
      default: null,
    },
    blockDate: {
      type: String,
      default: "",
    },
    blockName: {
      type: String,
      default: "",
    },
    blockText: {
      type: String,
      default: "",
    },
    blockType: {
      type: Number,
      default: null,
    },
    blockButtons: {
      type: String,
      default: "",
    },
    addModal: {
      type: Object,
      default: () => {},
    },
    action: {
      type: String,
      default: "add",
    },
    projectId: {
      type: Number,
      default: null,
    },
    openModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      choices: null,
      blockTypes: globalBlockTypes,
      days: [],
      months: [
        { id: 1, title: "Январь" },
        { id: 2, title: "Февраль" },
        { id: 3, title: "Март" },
        { id: 4, title: "Апрель" },
        { id: 5, title: "Май" },
        { id: 6, title: "Июнь" },
        { id: 7, title: "Июль" },
        { id: 8, title: "Август" },
        { id: 9, title: "Сентябрь" },
        { id: 10, title: "Октябрь" },
        { id: 11, title: "Ноябрь" },
        { id: 12, title: "Декабрь" },
      ],
      nowDate: {
        type: Object,
        default: {
          day: null,
          month: null,
          year: null,
        },
      },
      stageName: {
        value: this.blockName,
        error: false,
        success: false,
      },
      selectedButtons: {
        value: "Пример",
        error: false,
        success: false,
      },
      selectedDay: null,
      selectedMonth: null,
      selectedYear: null,
      stageDescription: "",
      stageDate: null,
      registerError: "",
      selectedType: {
        value: null,
        error: false,
        success: false,
      },
    };
  },
  components: {
    VsudInput,
    VsudButton,
    VsudTextarea,
    Choices,
    /*VueSelect*/
  },
  validations() {
    return {
      selectedType: {
        value: { required },
      },
      stageName: {
        value: { required, minLength: minLength(3) },
      },
      selectedButtons: {
        value: { maxLength: maxLength(45) },
      },
    };
  },
  methods: {
    getSelectClasses: (success, error) => {
      let isValidValue;

      if (error) {
        isValidValue = "is-invalid";
      } else if (success) {
        isValidValue = "is-valid";
      } else {
        isValidValue = "";
      }

      return `${isValidValue}`;
    },
    sendData(v) {
      //console.log("---"+this.accountId)
      if (this.checkFields(v)) {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          let tmp = this.action === "edit" ? `/${this.blockId}` : "";
          let uri = `/api/${this.action}-block` + tmp;
          axios
            .post(uri, {
              projectId: this.projectId,
              name: this.stageName.value,
              stage: this.selectedType.value,
              description: this.stageDescription,
              date: this.getSendDate,
              buttons: document.getElementById("choices-skills").value,
            })
            .then((r) => {
              this.closeModal();
              this.$emit("projectReload");
            })
            .catch((err) => {
              console.log(err.response);
              this.registerError =
                "Ошибка добавления или изменения блока timeline";
              alert(this.registerError);
            });
        });
      }
    },
    checkFields(v) {
      let flagStatus = true;
      if (v.stageName.value.$invalid) {
        this.stageName.error = true;
        this.stageName.success = false;
        flagStatus = false;
      } else {
        this.stageName.error = false;
        this.stageName.success = true;
      }

      if (v.selectedType.value.$invalid) {
        this.selectedType.error = true;
        this.selectedType.success = false;
        flagStatus = false;
      } else {
        this.selectedType.error = false;
        this.selectedType.success = true;
      }

      if (v.selectedButtons.value.$invalid) {
        this.selectedButtons.error = true;
        this.selectedButtons.success = false;
        flagStatus = false;
      } else {
        this.selectedButtons.error = false;
        this.selectedButtons.success = true;
      }

      return flagStatus;
    },
    closeModal() {
      this.addModal.hide();
    },
    getDateNow(strDate = null) {
      let date;
      if (strDate) {
        date = new Date(strDate);
      } else {
        date = new Date();
      }
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };
    },
    startInputButtons() {
      let skills = document.getElementById("choices-skills");
      this.choices = new Choices(skills, {
        delimiter: ",",
        editItems: true,
        maxItemCount: 5,
        removeItemButton: true,
        addItems: true,
      });
    },
    setInputButtons(value) {
      //this.choices.setValueByChoice(value);
      this.choices.clearStore();
      if (value) {
        let values = value.split(",");
        this.choices.setValue(values);
      }
    },
  },
  computed: {
    getDays() {
      const days = [];
      let max = 31;
      if (
        this.selectedMonth === 4 ||
        this.selectedMonth === 6 ||
        this.selectedMonth === 9 ||
        this.selectedMonth === 11
      ) {
        max = 30;
      } else if (this.selectedMonth === 2) {
        max = 28;
      }
      for (let i = 0; i < max; i++) {
        days[i] = i + 1;
      }
      return days;
    },
    getYears() {
      const years = [];
      let yearStart = 2017;
      let yearEnd = this.nowDate.year + 5;
      for (let i = yearStart; i <= yearEnd; i++) {
        years.push(i);
      }
      return years;
    },
    getSendDate() {
      return `${this.selectedYear}-${this.selectedMonth}-${this.selectedDay} 00:00:00`;
    },
  },
  updated() {
    if (this.openModal) {
      if (this.action === "edit") {
        this.tmpDate = this.getDateNow(this.blockDate);
        this.selectedMonth = this.tmpDate.month;
        this.selectedDay = this.tmpDate.day;
        this.selectedYear = this.tmpDate.year;
      } else {
        this.nowDate = this.getDateNow();
        this.selectedMonth = this.nowDate.month;
        this.selectedDay = this.nowDate.day;
        this.selectedYear = this.nowDate.year;
      }
      this.selectedButtons.value = this.blockButtons;
      this.setInputButtons(this.selectedButtons.value);
      this.stageName.value = this.blockName;
      this.selectedType.value = this.blockType;
      this.stageDescription = this.blockText;
      //this.openModal = false;
    }
    this.years = this.getYears;
    this.days = this.getDays;
  },
  mounted() {
    if (document.getElementById("choices-skills")) {
      document.getElementById("choices-skills").value =
        this.selectedButtons.value;
      this.startInputButtons();
    }
  },
  watch: {
    selectedMonth(newQuestion, oldQuestion) {
      this.days = this.getDays;
    },
  },
};
</script>
<style src="choices.js/public/assets/styles/choices.min.css"></style>