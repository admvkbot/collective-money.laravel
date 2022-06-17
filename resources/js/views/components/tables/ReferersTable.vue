<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h5>Список рефереров</h5>
      <p class="text-sm">
        Вы можете приглашать рефереров с использованием ссылки на бота:
        <span class="text-info"
          >{{ tg_bot_url }}?start={{ myData.value.invite }}</span
        >
      </p>
    </div>
    <div class="card-body px-0 pt-0 pb-2" v-if="table.filteredList.length">
      <div class="row">
        <div class="col-6">
          <label class="form-label pl-3">Поиск реферера</label>
          <div class="input-group pl-3">
            <input
              id="liveSearchReferers"
              name="liveSearchReferers"
              class="form-control"
              type="text"
              placeholder="начните что-то писать..."
              v-model="searchTerm"
            />
          </div>
        </div>
      </div>
      <div class="table-responsive p-0">
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
                Аккаунт
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                  ps-2
                "
              >
                Telegram
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                  ps-2
                "
              >
                Статус
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  text-center
                  opacity-7
                  ps-2
                "
              >
                Активность
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table.filteredList" :key="item">
              <td>
                <div class="d-flex px-2">
                  <!--<div>
                    <img
                      src="../../assets/img/small-logos/logo-invision.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                    />
                  </div>-->
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ item.name }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <a
                  :href="'https://t.me/' + item.tg_username"
                  class="text-sm font-weight-bold mb-0"
                  target="_blank"
                >
                  @{{ item.tg_username }}
                </a>
              </td>
              <td>
                <vsud-badge
                  class="text-xxs"
                  color="success"
                  variant="gradient"
                  size="font-size-sm"
                  >Active</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">60%</span>
                  <div>
                    <vsud-progress
                      color="info"
                      variant="gradient"
                      :percentage="60"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle" v-if="rmenu">
                <button class="btn btn-link text-secondary mb-0">
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <!--<tr>
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img
                      src="../../assets/img/small-logos/logo-invision.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="invision"
                    />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">Invision</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">$5,000</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">done</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">100%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      variant="gradient"
                      :percentage="100"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <button
                  class="btn btn-link text-secondary mb-0"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img
                      src="../../assets/img/small-logos/logo-jira.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="jira"
                    />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">Jira</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">$3,400</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">canceled</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">30%</span>
                  <div>
                    <vsud-progress
                      color="danger"
                      variant="gradient"
                      :percentage="30"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <button
                  class="btn btn-link text-secondary mb-0"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img
                      src="../../assets/img/small-logos/logo-slack.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="slack"
                    />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">Slack</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">$1,000</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">canceled</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">0%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      variant="gradient"
                      :percentage="0"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <button
                  class="btn btn-link text-secondary mb-0"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img
                      src="../../assets/img/small-logos/logo-invision.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="webdev"
                    />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">Webdev</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">$14,000</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">working</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">80%</span>
                  <div>
                    <vsud-progress
                      color="info"
                      variant="gradient"
                      :percentage="80"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <button
                  class="btn btn-link text-secondary mb-0"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img
                      src="../../assets/img/small-logos/logo-xd.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="xd"
                    />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">Adobe XD</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">$2,300</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">done</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">100%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      variant="gradient"
                      :percentage="100"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <button
                  class="btn btn-link text-secondary mb-0"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>-->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed, watch, inject } from "vue";
import VsudProgress from "@/components/VsudProgress";
import VsudBadge from "@/components/VsudBadge.vue";
//import getMyData from "@/assets/js/getMyData.js";

export default {
  name: "referers-table",
  components: {
    VsudProgress,
    VsudBadge,
    /*getMyData,*/
  },
  setup() {
    //const myData = ref("");
    //myData.value = getMyData();
    const myData = inject('myData');
    const searchTerm = ref(""); // Search text
    // Fake data
    const data = reactive({
      rows: [],
    });

    /**
     * Get server data request
     */
    const myRequest = (keyword) => {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/get-referers", {
            filter: keyword,
          })
          .then((r) => {
            console.log(r.data);
            data.rows = r.data;
            //this.$emit("accountsReload");
          })
          .catch((err) => {
            console.log("Fetch error", err.response);
            const registerError = "Неизвестная ошибка работы live filter";
            alert(registerError);
          });
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
      myData,
    };
  },
  props: {
    rmenu: {
      type: Array,
      default: false,
    },
  },
  data() {
    return {
      tg_bot_url: "",
    };
  },
  created() {
    this.tg_bot_url = process.env.MIX_TG_BOT_URL;
  },
};
</script>
