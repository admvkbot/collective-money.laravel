<template>
  <div class="mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4">
    <router-link :to="{ name: 'Add Product' }">
      <place-holder-horisontal-card
        :title="{ text: 'Добавить проект', variant: 'h6' }"
      />
    </router-link>
  </div>

  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Криптопроекты</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="row" v-if="is_liveSearch">
        <div class="col-6">
          <label class="form-label pl-3">Поиск проекта</label>
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
                Проект
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
                Рейтинг
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
                Пользовательский интерес
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
                Соцсети
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table.list" :key="item">
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img
                      :src="item.logo_url"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                      v-if="item.logo_url"
                    />
                  </div>
                  <div class="my-auto d-flex">
                    <h6 class="mb-0 text-sm">
                      {{ item.name }}
                      <a
                        :href="item.website_url"
                        traget="_blank"
                        :title="item.website_name"
                        ><i class="fas fa-link ml-2" v-if="item.website_url"></i
                      ></a>
                    </h6>
                  </div>
                </div>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold"
                    >{{ item.rating }}%</span
                  >
                  <div>
                    <vsud-progress-plus
                      variant="gradient"
                      :percentage="item.rating"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle text-center">
                <p class="text-sm font-weight-bold mb-0">
                  {{ item.num_tg_users }}
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="inline-flex">
                  <a
                    class="text-xs font-weight-bold"
                    target="_blank"
                    :href="item.twitter"
                    v-if="item.twitter"
                  >
                    <twitter-icon size="18px"></twitter-icon>
                  </a>
                  <a
                    class="text-xs font-weight-bold"
                    target="_blank"
                    :href="item.discord"
                    v-if="item.discord"
                  >
                    <discord-icon size="18px" class="ml-2"></discord-icon>
                  </a>
                  <a
                    class="text-xs font-weight-bold"
                    target="_blank"
                    :href="item.youtube"
                    v-if="item.youtube"
                  >
                    <youtube-icon size="18px" class="ml-2"></youtube-icon>
                  </a>
                  <a
                    class="text-xs font-weight-bold"
                    target="_blank"
                    :href="item.telegram"
                    v-if="item.telegram"
                  >
                    <telegram-icon size="18px" class="ml-2"></telegram-icon>
                  </a>
                  <a
                    class="text-xs font-weight-bold"
                    target="_blank"
                    :href="item.medium"
                    v-if="item.medium"
                  >
                    <medium-icon size="18px" class="ml-2"></medium-icon>
                  </a>
                </div>
              </td>
              <td class="align-middle">
                <button
                  class="btn btn-link text-secondary mb-0"
                  v-if="is_liveSearch"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                  :id="'project-dropdown' + item.id"
                >
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
                <ul
                  class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                  :aria-labelledby="'project-dropdown' + item.id"
                  style=""
                >
                  <li>
                    <router-link
                      class="dropdown-item border-radius-md"
                      :to="{
                        name: 'Edit Product',
                        params: { productId: item.id },
                      }"
                      >Настроить</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item border-radius-md"
                      :to="{
                        name: 'Edit Product Key',
                        params: { productId: item.id },
                      }"
                      >Изменить ключи</router-link
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item border-radius-md"
                      href="javascript:;"
                      >Удалить</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VsudProgressPlus from "@/components/VsudProgressPlus";
import TwitterIcon from "@/components/Icon/Twitter";
import TelegramIcon from "@/components/Icon/Telegram";
import DiscordIcon from "@/components/Icon/Discord";
import MediumIcon from "@/components/Icon/Medium";
import YoutubeIcon from "@/components/Icon/Youtube";
import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";

import { reactive, ref, computed, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "moderate-projects-table",
  components: {
    VsudProgressPlus,
    TwitterIcon,
    TelegramIcon,
    DiscordIcon,
    MediumIcon,
    YoutubeIcon,
    FontAwesomeIcon,
    PlaceHolderHorisontalCard,
  },
  props: {
    is_liveSearch: {
      type: Boolean,
      default: true,
    },
    top: {
      type: Number,
      default: 0,
    },
  },
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
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/get-projects/" + props.top, {
            filter: keyword,
          })
          .then((r) => {
            console.log(r.data);
            data.rows = r.data;
            //this.$emit("accountsReload");
          })
          .catch((err) => {
            console.log("Fetch error", err.response);
            const registerError =
              "Неизвестная ошибка при полученнии списка проектов";
            alert(registerError);
          });
      });
    };

    const table = reactive({
      list: computed(() => {
        return data.rows;
      }),
      totalRecordCount: computed(() => {
        return data.rows.length;
      }),
    });
    if (props.is_liveSearch) {
      watch(
        () => searchTerm.value,
        (val) => {
          myRequest(val);
        }
      );
    }
    // Get data on first rendering
    myRequest("");
    console.log(table);
    return {
      searchTerm,
      table,
    };
  },
};
</script>
<style scoped>
.dropdown-menu,
.dropend .dropdown-menu {
  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),
    0 8px 9px -5px rgb(20 20 20 / 6%);
  cursor: pointer;
}
</style>
