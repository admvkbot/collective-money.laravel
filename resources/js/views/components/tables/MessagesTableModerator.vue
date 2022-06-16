<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h5>Cообщения из Telegram каналов, не содержащие ключи</h5>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table.filteredList" :key="item" class="my-0">
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
                <span v-if="item.first_name">{{ item.first_name }}</span>
                <span v-if="item.last_name">{{ item.last_name }}</span
                ><br />
                <a
                  :href="'https://t.me/' + item.username"
                  class="text-sm font-weight-bold mb-0"
                  target="_blank"
                  v-if="item.username"
                >
                  @{{ item.username }}
                </a>
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
              <td class="align-middle">
                <button class="btn btn-link text-secondary mb-0">
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
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

export default {
  name: "moderate-messages-table",
  components: {},
  props: { projectId: { type: Number, default: null } },
  setup(props) {
    const searchTerm = ref(""); // Search text
    // Fake data
    const data = reactive({
      rows: [],
    });

    /**
     * Get server data request
     */
    const myRequest = (keyword) => {
      axios
        .post("/api/get-messages-moderate/" + props.projectId, {
          filter: keyword,
        })
        .then((r) => {
          //console.log(r.data);
          data.rows = r.data;
          //this.$emit("accountsReload");
        })
        .catch((err) => {
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
    let count;
    watch(
      () => searchTerm.value,
      (val) => {
        myRequest(val);
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
.table td {
  white-space: normal !important;
  padding: 3px 5px 3px 5px !important;
}
</style>
