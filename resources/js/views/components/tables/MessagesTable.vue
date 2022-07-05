<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h5>Сообщения из 2 OTC Telegram каналов</h5>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="row">
        <div class="col-6">
          <label class="form-label pl-3">Поиск сообщений</label>
          <div class="input-group pl-3">
            <input
              id="liveSearchReferers"
              name="liveSearchReferers"
              class="form-control"
              type="text"
              placeholder="текст сообщения или пользователь "
              v-model="searchTerm"
            />
          </div>
        </div>
      </div>
      <div class="table-responsive px-3">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
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
            <tr v-for="item in table.filteredList" :key="item">
              <td>
                <div class="text-sm">
                  {{ item.message }}
                </div>
              </td>
              <td>
                <div class="text-sm">
                  {{ item.date }}
                </div>
              </td>
              <td>
                <a
                  :href="'https://t.me/' + item.username"
                  class="text-sm font-weight-bold mb-0"
                  target="_blank"
                  v-if="item.username"
                >
                  @{{ item.username }}
                </a><br />
                <span v-if="item.first_name">{{ item.first_name }}</span>
                <span v-if="item.last_name">{{ item.last_name }}</span
                >
              </td>
              <td>
                <a
                  :href="'https://t.me/' + item.channel_username"
                  class="text-sm font-weight-bold mb-0"
                  target="_blank"
                  v-if="item.channel_username"
                >
                  @{{ item.channel_username }}
                </a>
                <span v-else>-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed, watch, inject } from "vue";
import { useLoading } from "vue-loading-overlay";

export default {
  name: "messages-table",
  components: {},
  setup() {
    const searchTerm = ref(""); // Search text
    // Fake data
    const data = reactive({
      rows: [],
    });
    const $loading = useLoading();
    let loader;
    const submit = () => {
      loader = $loading.show({});
    };
    /**
     * Get server data request
     */
    const myRequest = (keyword) => {
      submit();
      axios
        .post("/api/get-messages", {
          filter: keyword,
        })
        .then((r) => {
          loader.hide();
          console.log(r.data);
          data.rows = r.data;
          //this.$emit("accountsReload");
        })
        .catch((err) => {
          loader.hide();
          console.log("Fetch error", err.response);
          const registerError =
            "Неизвестная ошибка работы live filter messages";
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
    // Get data on first rendering
    myRequest("");

    return {
      searchTerm,
      table,
    };
  },
};
</script>
<style scoped>
.table td,
.table th {
  white-space: normal !important;
}
</style>
