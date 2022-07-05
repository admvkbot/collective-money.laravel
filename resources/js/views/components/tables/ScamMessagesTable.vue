<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h5>{{ title }}</h5>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="row">
        <div class="col-6">
          <label class="form-label pl-3">Поиск по сообщениям</label>
          <div class="input-group pl-3">
            <input
              id="liveSearchReferers"
              name="liveSearchReferers"
              class="form-control"
              type="text"
              placeholder="Вводите ключевое слово"
              v-model="searchTerm"
            />
          </div>
        </div>
        <div class="col-6">
          <label class="form-label pl-3">Действия</label>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <select
                  class="form-control"
                  name="choices-button"
                  id="choices-button"
                  placeholder="Выберите соцсеть"
                  v-model="selectedAction"
                >
                  <option
                    v-for="item in actions"
                    :value="item.id"
                    :key="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-4 mt-3 mt-sm-0">
              <div class="form-group">
                <button
                  type="button"
                  class="btn bg-gradient-primary"
                  @click.prevent="sendAction"
                  v-if="selected"
                >
                  Применить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="table-responsive px-3 pt-3"
        @mouseup="(v) => handleEvent(v)"
        ref="formContainer"
        v-if="table.filteredList.length"
      >
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th>
                <div class="d-flex align-items-center justify-content-center">
                  <input
                    type="checkbox"
                    v-model="allSelected"
                    @change="selectAll"
                  />
                </div>
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
                style="width: 50%"
              >
                Текст сообщения
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                  ps-2
                "
              >
                Дата
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                  ps-2
                "
              >
                Автор сообщения
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                  ps-2
                "
              >
                OTC канал
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table.filteredList" :key="item" class="my-0">
              <td>
                <div class="d-flex align-items-center justify-content-center">
                  <input
                    type="checkbox"
                    v-model="selected"
                    :value="item.id"
                    number
                  />
                </div>
              </td>
              <td>
                <div class="text-sm" :id="item.id">
                  {{ item.message }}
                </div>
              </td>
              <td>
                <div class="text-sm">
                  {{ convertDate(item.date).date }}<br />{{
                    convertDate(item.date).time
                  }}
                </div>
              </td>
              <td>
                <a
                  :href="'https://t.me/' + item.username"
                  class="text-sm font-weight-bold mb-0"
                  target="_blank"
                  v-if="item.username"
                >
                  @{{ item.username }} </a
                ><br />
                <span v-if="item.first_name">{{ item.first_name }}</span>
                <span v-if="item.last_name">{{ item.last_name }}</span>
              </td>
              <td>
                <a
                  :href="'https://t.me/' + item.channel_username"
                  class="text-sm font-weight-bold mb-0"
                  target="_blank"
                  v-if="item.channel_username"
                >
                  {{ item.channel_username }}
                </a>
                <span v-else>-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row" v-else>
        <div class="col-12">
          <div class="form-label p-3">Нет новых сообщений</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="row">
    <div class="col-md-4">
      <add-scam-modal
        :modal="theModal"
        :rawString="rawString"
        :tgUserData="tgUserData"
        :product="product"
        :messageId="messageId"
        @mesages-reload="mesagesReload"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed, watch, inject } from "vue";
import { convertMessageTableDate } from "@/assets/js/convertDate.js";
import AddScamModal from "@/components/modal/AddScamModal.vue";
import searchTgUsername from "@/assets/js/searchTgUsername.js";
import searchProduct from "@/assets/js/searchProduct.js";
import { useLoading } from "vue-loading-overlay";

import { Modal } from "bootstrap";

//import "vue-good-table/dist/vue-good-table.css";
//const VueGoodTable = require("vue-good-table");
//import { VueGoodTable } from "vue-good-table";

export default {
  name: "scam-messages-table",
  components: {
    AddScamModal,
    searchTgUsername,
    searchProduct,
  },
  props: {
    title: {
      type: String,
      default: "Сообщения Telegram",
    },
  },
  setup(props) {
    const searchTerm = ref(""); // Search text
    // Fake data
    const data = reactive({
      rows: [],
    });
    const $loading = useLoading();
    let loader;
    const submit = () => {
      loader = $loading.show({
        // Optional parameters
        /*container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,*/
      });
      // simulate AJAX
      /*setTimeout(() => {
        loader.hide();
      }, 5000);*/
    };

    /**
     * Get server data request
     */
    const myRequest = (keyword) => {
      submit();
      axios
        .post("/api/scam-messages", {
          filter: keyword,
        })
        .then((r) => {
          //console.log(r.data);
          data.rows = r.data;
          loader.hide();
          //this.$emit("accountsReload");
        })
        .catch((err) => {
          loader.hide();
          console.log("Fetch error", err.response);
          const registerError =
            "Неизвестная ошибка работы live filter scam messages";
          alert(registerError);
        });
    };

    const table = reactive({
      filteredList: computed(() => {
        return data.rows;
      }),
      totalRecordCount: computed(() => {
        return data.rows.length;
      }),
    });

    let timeout = null;
    watch(
      () => searchTerm.value,
      (val) => {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          myRequest(val);
        }, 500);
      }
    );

    watch(table, (val) => {
      console.log(val);
    });
    // Get data on first rendering
    myRequest("");

    return {
      searchTerm,
      table,
    };
  },
  data() {
    return {
      messageId: null,
      selected: [],
      allSelected: false,
      actions: [
        { id: 0, name: "Игнорировать" },
        { id: 1, name: "Применить к пользователю" },
        { id: 2, name: "Применить к проекту" },
      ],
      rawString: "",
      theModal: null,
      tgUserData: {
        id: null,
        username: "",
      },
      product: {
        id: null,
        name: "",
      },
      fullPage: false,
    };
  },
  mounted() {
    this.theModal = new Modal(document.getElementById("addScamMessage"));
    //this.submit();
  },

  methods: {
    checkString(string) {
      string = string.trim();
      const regexp = /^@[\w_]+$/gi;
      const regexp2 = /^[\w_]+$/gi;
      const regexp3 = /^[\w_.'\s-]+$/gi;
      if (string.match(regexp)) {
        const username = string.slice(1);
        this.tgUserData = searchTgUsername(username, true);
        this.product = {
          id: null,
          name: "",
        };
      } else if (string.match(regexp2)) {
        this.tgUserData = searchTgUsername(string, false);
        this.product = searchProduct(string);
      } else if (string.match(regexp3)) {
        this.tgUserData = {
          id: null,
          username: "",
        };
        this.product = searchProduct(string);
      } else {
        this.tgUserData = {
          id: null,
          username: "",
        };
        this.product = {
          id: null,
          name: "",
        };
        return false;
      }
      return true;
    },

    handleEvent(v) {
      const handleEventData = {
        messageId: v.path[0].id,
        string: "",
      };
      let txt = "";
      if (window.getSelection) {
        txt = window.getSelection();
      } else if (window.document.getSelection) {
        txt = window.document.getSelection();
      } else if (window.document.selection) {
        txt = window.document.selection.createRange().text;
      }
      handleEventData.string = txt;
      this.messageId = handleEventData.messageId;
      this.rawString = handleEventData.string + "";
      if (this.rawString && this.checkString(this.rawString)) {
        this.showModal();
      }
    },
    async selectAll() {
      if (this.allSelected) {
        const selected = this.table.filteredList.map((u) => u.id);
        this.selected = selected;
      } else {
        this.selected = [];
      }
    },
    convertDate(date) {
      return convertMessageTableDate(date);
    },
    showModal() {
      this.theModal.show();
    },
    mesagesReload() {
      alert("Reload");
    },
    /*createRows() {
      const rows = [];
      let i = 0;
      this.table.filteredList.forEach((item) => {
        const username = item.username
          ? `<a href="https://t.me/${item.username}" class="text-sm font-weight-bold mb-0" target="_blank">@${item.username}</a><br />`
          : "";
        const firstName = item.first_name
          ? `<span>${item.first_name}</span>`
          : "";
        const lastName = item.last_name ? `<span>${item.last_name}</span>` : "";
        const channelUsername = item.channel_username
          ? `<a href="https://t.me/${item.channel_username}" class="text-sm font-weight-bold mb-0" target="_blank">${item.channel_username}</a>`
          : "-";
        const row = {
          id: i,
          message: `<div class="text-sm">${item.message}</div>`,
          date:
            '<div class="text-sm">' +
            this.convertDate(item.date).date +
            "<br />" +
            this.convertDate(item.date).time +
            "</div>",
          username: `${username}${firstName}${lastName}`,
          channelUsername: channelUsername,
        };
        rows.push(row);
        i += 1;
      });
      return rows;
    },*/
  },
};
</script>
<style scoped>
.table td {
  white-space: normal !important;
  padding: 3px 5px 3px 5px !important;
}
</style>
