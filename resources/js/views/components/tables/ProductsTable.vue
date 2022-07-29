<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>{{ top ? "Топ " + top : "Список" }} криптопроектов</h6>
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
                Акивности
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
              <!--<th></th>-->
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table.list" :key="item">
              <td>
                <div class="px-2">
                  <div class="my-auto d-flex align-items-center">
                    <router-link
                      class="d-flex align-items-center"
                      :to="{
                        name: 'Product',
                        params: { productNameUri: getUriFromString(item.name) },
                      }"
                    >
                      <img
                        :src="item.logo_url"
                        class="avatar avatar-sm rounded-circle me-2"
                        :alt="item.name"
                        v-if="item.logo_url"
                      />
                      <h6 class="mb-0 text-sm">
                        {{ item.name }}
                      </h6>
                    </router-link>
                    <a
                      :href="item.website_url"
                      traget="_blank"
                      :title="item.website_name"
                      ><i class="fas fa-link ml-2" v-if="item.website_url"></i
                    ></a>
                  </div>
                </div>
              </td>
              <td class="align-middle text-center">
                <div class="inline-flex">
                  <div
                    v-for="badge in item.badges"
                    :key="badge.id"
                    class="pr-1"
                  >
                    <vsud-badge
                      :color="badge.color"
                      variant="gradient"
                      size="sm"
                    >
                      {{ badge.badge_name }}
                    </vsud-badge>
                  </div>
                </div>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <div v-if="item.rating">
                    <span class="me-2 text-xs font-weight-bold"
                      >{{ item.rating }}%</span
                    >
                    <vsud-progress-plus
                      variant="gradient"
                      :percentage="item.rating"
                    />
                  </div>
                  <div v-else class="me-2 text-xs font-weight-bold">
                    Недостаточно данных
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
              <!--<td class="align-middle">
                <button
                  class="btn btn-link text-secondary mb-0"
                  v-if="is_liveSearch"
                >
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>-->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VsudProgressPlus from "@/components/VsudProgressPlus";
import VsudBadge from "@/components/VsudBadge";
import TwitterIcon from "@/components/Icon/Twitter";
import TelegramIcon from "@/components/Icon/Telegram";
import DiscordIcon from "@/components/Icon/Discord";
import MediumIcon from "@/components/Icon/Medium";
import YoutubeIcon from "@/components/Icon/Youtube";
import { reactive, ref, computed, watch } from "vue";
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useLoading } from "vue-loading-overlay";
//import string from "@/composables/string";
import { getUriFromString } from "@/services/functions";

//const { getUriFromString } = string();

export default {
  name: "product-table",
  components: {
    VsudProgressPlus,
    VsudBadge,
    TwitterIcon,
    TelegramIcon,
    DiscordIcon,
    MediumIcon,
    YoutubeIcon,
    /*FontAwesomeIcon,*/
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
    const $loading = useLoading();
    let loader;
    const submit = () => {
      if (!loader) {
        loader = $loading.show({});
      }
    };
    /**
     * Get server data request
     */
    const myRequest = (keyword) => {
      submit();
      axios
        .post("/api/get-products/" + props.top, {
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
        })
        .finally(() => {
          loader.hide();
          loader = null;
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
    let timeout = null;
    if (props.is_liveSearch) {
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
    }
    // Get data on first rendering
    myRequest("");
    //console.log(table);
    return {
      searchTerm,
      table,
      getUriFromString,
    };
  },
};
</script>
