<template>
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in table.list" :key="item">
          <td>
            <div class="d-flex px-2">
              <div class="my-auto d-flex">
                <h6 class="mb-0 text-sm">
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
          <td class="align-middle">
            <button
              class="btn btn-link text-secondary mb-0"
              v-if="is_liveSearch"
              data-bs-toggle="dropdown"
              aria-expanded="true"
              :id="'product-dropdown' + item.id"
            >
              <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
            </button>
            <ul
              class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
              :aria-labelledby="'product-dropdown' + item.id"
              style=""
            >
              <li>
                <router-link
                  class="dropdown-item border-radius-md"
                  :to="{
                    name: 'Edit Product',
                    params: { productId: item.id },
                  }"
                  >Изменить</router-link
                >
              </li>
              <li>
                <a
                  class="dropdown-item border-radius-md"
                  href="javascript:;"
                  @click="
                    confirm(
                      item.id,
                      `Удалить ${item.name}?`,
                      'Удаление проекта вместе с его статистикой, индексами и блоком timeline'
                    )
                  "
                  >Удалить</a
                >
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import confirmModal from "@/components/modal/confirmModal.js";
import Product from "@/composables/Product.js";
const { getProductActivities } = Product();
import { dateToText } from "@/services/functions";
import { computed, onUpdated, reactive } from "vue";
import { useLoading } from "vue-loading-overlay";

export default {
  components: {
    confirmModal,
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
    }
    request();
    onUpdated(() => {
      request();
    });
    return {
      table,
    };
  },
  data() {
    return {
      confirmDelete: false,
    };
  },
  methods: {
    dateToText(date) {
      return dateToText(date);
    },
    confirm(id, title, text) {
      this.confirmDelete = confirmModal(id, title, text);
    },
    productsReload() {
      this.myRequest(this.searchTerm, this.top);
    },
    deleteProduct(id) {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .get("/api/delete-product/" + id)
          .then((r) => {
            //this.$router.push({ name: "Products" });
            //this.$router.go()
            this.productsReload();
          })
          .catch((err) => {
            console.log(err.response);
            let registerError = "Ошибка сохранения удаления проекта";
            alert(registerError);
          });
      });
    },
  },
  watch: {
    confirmDelete(newQuestion, oldQuestion) {
      if (newQuestion) {
        this.deleteProduct(newQuestion);
      }
    },
  },
};
</script>
