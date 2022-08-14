<template>
  <div class="card mb-5">
    <div class="card-header bg-transparent pb-0">

      <div class="row">
        <h6>Активности проекта</h6>
      </div>
    </div>
    <div class="card-body p-3">
      <div class="col-12">
        <div class="table-responsive p-0" v-if="table.list.length">
          <table class="table align-items-center justify-content-center mb-0">
            <thead>
              <tr>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                  "
                >
                  Тип
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                    text-center
                  "
                >
                  Дата окончания
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in table.list" :key="item">
                <td>
                  <div class="d-flex px-2">
                    <div class="my-auto d-flex">
                      <h6 class="mb-0 text-sm" title="test">
                        {{ item.name }}
                      </h6>
                    </div>
                  </div>
                </td>
                <td class="align-middle text-center">
                  <div class="d-flex align-items-center justify-content-center">
                    <div class="me-2 text-xs font-weight-bold">
                      {{ dateToText(item.close_at) }}
                    </div>
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <add-product-action-modal
         :activityId="activityId"
        :addModal="theActivityModal"
        :selectedType="
          table.list.length
            ? selectedType
            : { value: null, error: false, success: false }
        "
        :sourceUrl="
          table.list.length
            ? sourceUrl
            : { value: null, error: false, success: false }
        "
        :activityDate="
          activityDate.day
            ? activityDate
            : { day: null, month: null, year: null }
        "
        :activityDescription="
          table.list.length
            ? activityDescription
            : { value: null, error: false, success: false }
        "
        :activities="
          productActivityTypes.value.length ? productActivityTypes.value : []
        "
        :openModal="openModalStatusActivity"
        :productId="productId"
        description=""
        @activity-reload="activityReload"
        :key="keyEditAction"
        :action="action"
      />
    </div>
  </div>
</template>

<script>
import confirmModal from "@/components/modal/confirmModal.js";
import { dateToText } from "@/services/functions";
import { computed, onUpdated, reactive, ref } from "vue";
import { useLoading } from "vue-loading-overlay";
import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";
import Product from "@/composables/Product.js";
const { getProductActivityTypes, getProductActivities } = Product();
import AddProductActionModal from "@/components/modal/AddProductActionModal.vue";
import { Modal } from "bootstrap";

export default {
  components: {
    confirmModal,
    AddProductActionModal,
    PlaceHolderHorisontalCard,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    //    const table0 = ref(""); // Search text

    const data = reactive({ rows: [] });
    const table = reactive({
      list: computed(() => {
        return data.rows;
      }),
    });

    const request = () => {
      data.rows = getProductActivities(props.productId, true, 10);
    };
    request();
    onUpdated(() => {
      request();
    });
    const productActivityTypes = ref([]);
    productActivityTypes.value = getProductActivityTypes();
    return {
      table,
      request,
      productActivityTypes,
    };
  },
  data() {
    return {
      openModalStatusActivity: true,
      theActivityModal: null,
      confirmDelete: false,
      confirmActivityDelete: false,
      keyEditAction: 0,
      sourceUrl: {
        value: null,
        error: false,
        success: false,
      },
      selectedType: {
        value: null,
        error: false,
        success: false,
      },
      activityDate: {
        day: null,
        month: null,
        year: null,
      },
      activityDescription: {
        value: null,
        error: false,
        success: false,
      },
      activityId: null,
      action: null,
    };
  },
  mounted() {
    this.theActivityModal = new Modal(
      document.getElementById("addProductActionModalMessage")
    );
  },
  methods: {
    dateToText(date) {
      return dateToText(date);
    },
    confirm(id, title, text) {
      this.confirmDelete = confirmModal(id, title, text);
    },
    confirmActivity(id, title, text) {
      this.confirmActivityDelete = confirmModal(id, title, text);
    },
    deleteActivity(id) {
        axios
          .get("/api/delete-product-activity/" + id)
          .then((r) => {
            //this.$router.push({ name: "Products" });
            //this.$router.go()
            this.activityReload();
          })
          .catch((err) => {
            console.log(err.response);
            let registerError = "Ошибка сохранения удаления проекта";
            alert(registerError);
          });
    },
    addActivity() {
      this.sourceUrl.value = null;
      this.selectedType.value = null;
      this.showActivityModal();
    },
    showActivityModal(action = null, data = null) {
      this.action = action === "edit" ? action : "add";
      if (data) {
         this.activityId = data.id;
        this.sourceUrl.value = data.url;
        this.selectedType.value = data.type_id;
        const date = new Date(data.close_at);
        this.activityDate = {
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
        };
        this.activityDescription.value = data.description;
      }
      //this.sourceUrl = null;
      //this.sourceUrlUrl = data.url;
      this.openModalStatusActivity = true;
      this.theActivityModal.show();
      setTimeout(() => {
        this.openModalStatusActivity = false;
      }, 500);
    },
    activityReload() {
      this.request();
      this.keyEditAction++;
    },
  },
  watch: {
    confirmActivityDelete(newQuestion, oldQuestion) {
      if (newQuestion) {
        this.deleteActivity(newQuestion);
      }
    },
  },
};
</script>
