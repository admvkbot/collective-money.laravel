<template>
  <div
    class="modal fade"
    id="addProductActionModalMessage"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addProductActionModalMessageTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">
            Добавление активности проекта
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
              <vsud-input
                id="activity-name"
                type="text"
                placeholder="Выберите активность из списка ниже"
                aria-label="stage-name"
                :error="this.selectedType.error"
                :success="this.selectedType.success"
                :value="getActionName(selected)"
                :disabled="true"
              />
            </div>

            <div class="form-group">
              <vsud-radio-group :options="actions" v-model="selected" />
            </div>

            <div class="row d-flex">
              <div class="col-sm-5 col-5">
                <div class="form-group">
                  <label>Дата окончания активности</label>
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
                id="product-action-description"
                placeholder="Основная информаия"
                :error="this.activityDescription.error"
                :success="this.activityDescription.success"
                :value="this.activityDescription.value"
                @textarea-value="(v) => (this.activityDescription.value = v)"
                >Описание</vsud-textarea
              >
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
            Добавить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VsudInput from "../VsudInput.vue";
import VsudRadioGroup from "../VsudRadioGroup.vue";
import VsudButton from "../VsudButton.vue";
import VsudTextarea from "../VsudTextarea.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  emits: ["activityReload"],
  props: {
    actions: {
      type: Array,
      require: true,
    },
    activityId: {
      type: Number,
      default: null,
    },
    activityType: {
      type: Number,
      default: null,
    },
    addModal: {
      type: Object,
      default: () => {},
    },
    action: {
      type: String,
      default: "add",
    },
    productId: {
      type: Number,
      required: true,
    },
    openModal: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: null,
      days: [],
      months: globalMonths,
      nowDate: {
        type: Object,
        default: {
          day: null,
          month: null,
          year: null,
        },
      },
      selectedDay: null,
      selectedMonth: null,
      selectedYear: null,
      activityDate: null,
      registerError: "",
      selectedType: {
        value: null,
        error: false,
        success: false,
      },
      activityDescription: {
        value: this.description,
        error: false,
        success: false,
      },
    };
  },
  components: {
    VsudInput,
    VsudButton,
    VsudTextarea,
    VsudRadioGroup,
  },
  validations() {
    return {
      selectedType: {
        value: { required },
      },
      activityDescription: {
        value: { required, minLength: minLength(10)},
      }
    };
  },
  methods: {
    getActionName(selected) {
      if (!this.actions.length) {
        return null;
      }
      const obj = this.actions.find((data) => data.id == selected);
      this.selectedType.value = selected;
      return obj ? obj.name : null;
    },
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
      if (this.checkFields(v)) {
        let tmp = this.action === "edit" ? `/${this.activityId}` : "";
        let uri = `/api/${this.action}-product-activity` + tmp;
        axios
          .post(uri, {
            product_id: this.productId,
            activity_id: this.selectedType.value,
            description: this.activityDescription.value,
            date: this.getSendDate,
          })
          .then((r) => {
            this.closeModal();
            this.$emit("activityReload");
          })
          .catch((err) => {
            console.log(err.response);
            this.registerError = "Ошибка добавления или изменения активности";
            alert(this.registerError);
          });
      }
    },
    checkFields(v) {
      let flagStatus = true;

      if (v.selectedType.value.$invalid) {
        this.selectedType.error = true;
        this.selectedType.success = false;
        flagStatus = false;
      } else {
        this.selectedType.error = false;
        this.selectedType.success = true;
      }
      if (v.activityDescription.value.$invalid) {
        this.activityDescription.error = true;
        this.activityDescription.success = false;
        flagStatus = false;
      } else {
        this.activityDescription.error = false;
        this.activityDescription.success = true;
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
      return `${this.selectedYear}-${this.selectedMonth}-${this.selectedDay} 23:59:00`;
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
        console.log(this.nowDate);
        this.selectedMonth = this.nowDate.month;
        this.selectedDay = this.nowDate.day;
        this.selectedYear = this.nowDate.year;
      }
      //this.openModal = false;
    }
    this.years = this.getYears;
    this.days = this.getDays;
  },
  watch: {
    selectedMonth(newQuestion, oldQuestion) {
      this.days = this.getDays;
    },
  },
};
</script>
