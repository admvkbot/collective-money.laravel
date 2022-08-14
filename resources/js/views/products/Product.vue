<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-100 border-radius-xl"
      :style="{
        backgroundImage: 'url(/img/curved-images/curved0.jpg)',
        backgroundPositionY: '50%',
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              :src="product.logo_url"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{ product.name }}</h5>
            <p class="mb-0 text-sm font-weight-bold">{{ product.type }}</p>
          </div>
        </div>
        <!--<div
          class="mx-auto mt-3 col-lg-6 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0">
            <ul
              class="p-1 bg-transparent nav nav-pills nav-fill"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="px-0 py-1 mb-0 nav-link active"
                  data-bs-toggle="tab"
                  href="javascript:;"
                  role="tab"
                  aria-selected="false"
                >
                  <svg
                    class="text-dark"
                    width="16px"
                    height="16px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Настройки профиля</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-2020.000000, -442.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(304.000000, 151.000000)">
                            <polygon
                              class="color-background"
                              opacity="0.596981957"
                              points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                            ></polygon>
                            <path
                              class="color-background"
                              d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                              opacity="0.596981957"
                            ></path>
                            <path
                              class="color-background"
                              d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1" @click="showSettings"
                    >Настройки профиля</span
                  >
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-0 py-1 mb-0 nav-link"
                  data-bs-toggle="tab"
                  href="javascript:;"
                  role="tab"
                  aria-selected="false"
                >
                  <svg
                    class="text-dark"
                    width="16px"
                    height="16px"
                    viewBox="0 0 40 44"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>document</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-1870.000000, -591.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(154.000000, 300.000000)">
                            <path
                              class="color-background"
                              d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                              opacity="0.603585379"
                            ></path>
                            <path
                              class="color-background"
                              d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">Сообщения</span>
                </a>
              </li>
            </ul>
          </div>
        </div>-->
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
<!--    <div class="mt-2 row">
      <div class="col-lg-6">
        <div class="card z-index-2">
          <gradient2-line-chart
            id="chart-line-WT"
            :title="'Спрос и предложение ' + product.name"
            :arrow="product.chartTg.arrow"
            :color="product.chartTg.color"
            :proc="product.chartTg.value"
            description="за последний месяц"
            :chart="product.chartTg"
            v-if="'chartTg' in product && 'datasets' in product.chartTg"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card z-index-2">
          <gradient1-line-chart
            id="chart-line-rating"
            title="Рейтинг Collective Money"
            :arrow="product.chartRating.arrow"
            :color="product.chartRating.color"
            :proc="product.chartRating.value"
            description="за последний месяц"
            :chart="product.chartRating"
            v-if="'chartRating' in product && 'datasets' in product.chartRating"
          />
        </div>
      </div>
    </div>
    <div class="mt-2 row">
      <div class="col-lg-12">
        <div class="card z-index-2">
          <gradient2-line-chart
            id="chart-line-cost"
            title="Максимальная цена спроса и минимальная цена предложения"
            :arrow="product.chartTgCost.arrow"
            :color="product.chartTgCost.color"
            :proc="product.chartTgCost.value"
            description="за последний месяц"
            :chart="product.chartTgCost"
            v-if="'chartTgCost' in product && 'datasets' in product.chartTgCost"
          />
        </div>
      </div>
    </div>-->
    <div class="mt-2 row">
      <div class="col-lg-7 mt-3 mt-lg-3">
        <!--<profile-info-card
          :info="{
            nickname: 'Олег',
            mobile: '(7) 123 1234 123',
            email: 'test@mail.com',
            invite: '5687390457',
            status: 'Активный',
            level: 'Начальный',
            balance: '0.0000 BTC',
          }"
          :social="[
            {
              link: 'https://www.facebook.com/',
              icon: faFacebook,
            },
            {
              link: 'https://twitter.com',
              icon: faTwitter,
            },
            {
              link: 'https://www.instagram.com/',
              icon: faInstagram,
            },
          ]"
          :action="{
            route: 'javascript:;',
            tooltip: 'Edit Profile',
          }"
        />-->
                                      <product-activities-table
                      v-if="product.id"
                        :productId="product.id"
                      />

        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <div class="row">
              <div class="col-md-12 d-flex align-items-center">
                <h6 class="mb-0">Информация о проекте</h6>
              </div>
              <!--<div class="col-md-4 text-end">
          <a :href="action.route">
            <i
              class="text-sm fas fa-user-edit text-secondary"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              :title="action.tooltip"
            ></i>
          </a>
        </div>-->
            </div>
          </div>
          <div class="p-3 card-body">
            <p class="text-sm">
              Для изменения перечисленных ниже параметров свяжитесь с вашим
              менедженом
            </p>
            <hr class="my-4 horizontal gray-light" />
            <ul class="list-group">
              <li
                class="pt-0 text-sm border-0 list-group-item ps-0"
                v-if="product.description"
              >
                <font-awesome-icon :icon="faHandPointRight" /> &nbsp;
                {{ product.description }}
              </li>
              <li
                class="pt-0 text-sm border-0 list-group-item ps-0"
                v-if="product.website_url"
              >
                <strong class="text-dark">Официальный сайт:</strong> &nbsp;
                <a target="_blank" :href="product.website_url">
                  {{ product.website_url }}
                </a>
              </li>
              <li class="pb-0 border-0 list-group-item ps-0">
                <strong class="text-sm text-dark">Контакты:</strong> &nbsp;
                <a
                  v-if="product.discord"
                  :href="product.discord"
                  class="py-0 mb-0 btn-simple ps-1 pe-2"
                >
                  <font-awesome-icon :icon="faDiscord" />
                </a>
                <a
                  v-if="product.twitter"
                  :href="product.twitter"
                  class="py-0 mb-0 btn-simple ps-1 pe-2"
                >
                  <font-awesome-icon :icon="faTwitter" />
                </a>
                <a
                  v-if="product.medium"
                  :href="product.medium"
                  class="py-0 mb-0 btn-simple ps-1 pe-2"
                >
                  <font-awesome-icon :icon="faMediumM" />
                </a>
                <a
                  v-if="product.youtube"
                  :href="product.youtube"
                  class="py-0 mb-0 btn-simple ps-1 pe-2"
                >
                  <font-awesome-icon :icon="faYoutube" />
                </a>
                <a
                  v-if="product.telegram"
                  :href="product.telegram"
                  class="py-0 mb-0 btn-simple ps-1 pe-2"
                >
                  <font-awesome-icon :icon="faTelegramPlane" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div class="col-lg-5 mt-3 mt-lg-3">

        <div class="card bg-gradient-dark">
          <div class="card-header bg-transparent pb-0">
            <h6 class="text-white">Стадии развития проекта</h6>
          </div>
          <div class="card-body p-3">
            <div
              class="timeline timeline-one-side"
              data-timeline-axis-style="dashed"
            >
              <div v-if="'value' in blocks && blocks.value.length">
                <div
                  class="timeline-block mb-3"
                  v-for="block in blocks.value"
                  :key="block.id"
                >
                  <span class="timeline-step bg-dark">
                    <i
                      :class="
                        getBlockIcon(block.stage) +
                        ' text-' +
                        getBlockColor(block.stage)
                      "
                    ></i>
                  </span>
                  <div class="timeline-content">
                    <h6 class="text-white text-sm font-weight-bold mb-0">
                      {{ block.name }}
                    </h6>

                    <p class="text-white text-xs mt-1 mb-0">
                      {{ getPrintDate(block.date) }}
                    </p>
                    <p class="text-secondary text-sm mt-3 mb-2">
                      {{ block.description }}
                    </p>
                    <span
                      class="badge badge-sm"
                      :class="
                        'bg-gradient-' + blockTypes[block.stage - 1].color
                      "
                      v-if="block.button1"
                      >{{ block.button1 }}</span
                    >
                    <span
                      class="badge badge-sm ml-1"
                      :class="
                        'bg-gradient-' + blockTypes[block.stage - 1].color
                      "
                      v-if="block.button2"
                      >{{ block.button2 }}</span
                    >
                    <span
                      class="badge badge-sm ml-1"
                      :class="
                        'bg-gradient-' + blockTypes[block.stage - 1].color
                      "
                      v-if="block.button3"
                      >{{ block.button3 }}</span
                    >
                    <span
                      class="badge badge-sm ml-1"
                      :class="
                        'bg-gradient-' + blockTypes[block.stage - 1].color
                      "
                      v-if="block.button4"
                      >{{ block.button4 }}</span
                    >
                    <span
                      class="badge badge-sm ml-1"
                      :class="
                        'bg-gradient-' + blockTypes[block.stage - 1].color
                      "
                      v-if="block.button5"
                      >{{ block.button5 }}</span
                    >
                  </div>
                </div>
              </div>
              <!-- far fa-baby-carriage -->
              <div v-else class="timeline-block mb-3">
                <span class="timeline-step bg-dark">
                  <i class="fas fa-question text-secondary"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-white text-sm font-weight-bold mb-0">
                    Стадии проекта не описаны
                  </h6>
                  <p
                    class="text-secondary font-weight-bold text-xs mt-1 mb-0"
                  ></p>
                  <p class="text-secondary text-sm mt-3 mb-2">
                    Отсутствует описание стадий развития проекта.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudAvatar from "@/components/VsudAvatar.vue";
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import {
  faTwitter,
  faMediumM,
  faDiscord,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import DefaultProjectCard from "@/views/components/DefaultProjectCard.vue";
import PlaceHolderCard from "@/examples/Cards/PlaceHolderCard.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import Product from "@/composables/Product";
import getProductBlocks from "@/assets/js/getProductBlocks.js";

import { ref } from "vue";
import Gradient1LineChart from "@/Charts/Gradient1LineChart.vue";
import Gradient2LineChart from "@/Charts/Gradient2LineChart.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import ProductActivitiesTable from "@/views/components/tables/ProductActivitiesTable";

const { getProductData } = Product();
//const { getDayWTChartData } = Chart();
/*const init = async (props) => {
  return getProductData(props.productNameUri);
};*/

export default {
  name: "product",
  props: {
    productNameUri: {
      Type: String,
      required: true,
    },
  },
  setup(props) {
    let product;
    const blocks = ref([]);
    const promise = new Promise(function (resolve, reject) {
      product = getProductData(props.productNameUri);
      const interval = setInterval(() => {
        if ("id" in product.value) {
          clearInterval(interval);
          resolve(product);
        }
      }, 300);
    });
    promise.then((r) => {
      blocks.value = getProductBlocks(product.value.id);
    });
    return { product, blocks };
  },
  components: {
    VsudSwitch,
    VsudAvatar,
    DefaultProjectCard,
    PlaceHolderCard,
    Product,
    Gradient1LineChart,
    Gradient2LineChart,
    getProductBlocks,
    FontAwesomeIcon,
    ProductActivitiesTable,
  },
  data() {
    return {
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
      faDiscord,
      faTwitter,
      faMediumM,
      faYoutube,
      faTelegramPlane,
      faHandPointRight,
      blockTypes: globalBlockTypes,
      social: [
        {
          link: "https://www.facebook.com/",
          icon: faMediumM,
        },
        {
          link: this.product.twitter,
          icon: faTwitter,
        },
        {
          link: "https://www.instagram.com/",
          icon: faTelegramPlane,
        },
      ],
    };
  },

  mounted() {
    //this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  methods: {
    actionApp() {
      alert("Profile.vue");
    },
    getBlockIcon(id) {
      return this.blockTypes[id - 1].icon;
    },
    getBlockColor(id) {
      return this.blockTypes[id - 1].color;
    },
    setFullDateElement(dig) {
      return dig < 10 ? `0${dig}` : dig;
    },
    getPrintDate(date) {
      let tmpDate = new Date(date);
      let day = this.setFullDateElement(tmpDate.getDate());
      let month = this.setFullDateElement(tmpDate.getMonth() + 1);
      let year = tmpDate.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
};
</script>
<style scoped>
svg {
  display: inline !important;
}
.blur {
  --tw-blur: none !important;
}
</style>
