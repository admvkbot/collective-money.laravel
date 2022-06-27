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
              src="@/assets/img/bruce-mars.jpg"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">Alec Thompson</h5>
            <p class="mb-0 text-sm font-weight-bold">CEO / Co-Founder</p>
          </div>
        </div>
        <div
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
                  <span class="ms-1" @click="showSettings">Настройки профиля</span>
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
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-2 row">
      <div class="col-12 col-md-6 col-xl-6">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Настройки</h6>
          </div>
          <div class="p-3 card-body">
            <h6 class="text-xs text-uppercase text-body font-weight-bolder">
              Оповещения
            </h6>
            <ul class="list-group">
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault"
                  name="email"
                  class="ps-0 ms-auto"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  checked
                  >Email</vsud-switch
                >
              </li>
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault1"
                  name="telegram"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  class="ps-0 ms-auto"
                  >Telegram</vsud-switch
                >
              </li>

              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault2"
                  name="push"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  class="ps-0 ms-auto"
                  checked
                  >Пуш уведомления</vsud-switch
                >
              </li>
            </ul>
            <h6
              class="mt-4 text-xs text-uppercase text-body font-weight-bolder"
            >
              Взаимодействие с пользователями
            </h6>
            <ul class="list-group">
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault3"
                  name="Incoming Actions"
                  class="ps-0 ms-auto"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  >Разрешать взаимоподписки</vsud-switch
                >
              </li>
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault4"
                  name="Group Tasks"
                  class="ps-0 ms-auto"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  checked
                  >Участвовать в групповых заданиях</vsud-switch
                >
              </li>
              <li class="px-0 pb-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault5"
                  name="Newsletter"
                  class="ps-0 ms-auto"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  >Скрывать личные данные</vsud-switch
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 col-12 col-md-6 col-xl-6 mt-md-0">
        <profile-info-card
          title="Информация о пользователе"
          description="Для изменения перечисленных ниже параметров свяжитесь с вашим менедженом"
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
        />
      </div>
      <div class="mt-4 col-12 col-xl-4 mt-xl-0">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Conversations</h6>
          </div>
          <div class="p-3 card-body">
            <ul class="list-group">
              <li
                class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="sophie"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Sophie B.</h6>
                  <p class="mb-0 text-xs">Hi! I need more information..</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Reply</a
                >
              </li>
              <li
                class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="marie"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Anne Marie</h6>
                  <p class="mb-0 text-xs">Awesome work, can you..</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Reply</a
                >
              </li>
              <li
                class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="ivana"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Ivanna</h6>
                  <p class="mb-0 text-xs">About files I can..</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Reply</a
                >
              </li>
              <li
                class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="peterson"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Peterson</h6>
                  <p class="mb-0 text-xs">Have a great afternoon..</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Reply</a
                >
              </li>
              <li
                class="px-0 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="nick"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Nick Daniel</h6>
                  <p class="mb-0 text-xs">Hi! I need more information..</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Reply</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <div class="mb-4 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Последние задания, ожидающие проверки</h6>
          </div>
          <div class="p-3 card-body">
            <div class="row">
              <default-project-card
                title="YouTube"
                :image="img1"
                label="Задание №1"
                description="Подписаться, опубликовать комметарий из 10-15 слов и поставить лайк"
                :authors="[
                  {
                    image: team1,
                    name: 'Elena Morison',
                  },
                  {
                    image: team2,
                    name: 'Ryan Milly',
                  },
                  {
                    image: team3,
                    name: 'Nick Daniel',
                  },
                  {
                    image: team4,
                    name: 'Peterson',
                  },
                ]"
                :action="{
                  color: 'success',
                  label: 'View Product',
                }"
              />

              <default-project-card
                title="Telegram"
                :image="img2"
                label="Задание №2"
                description="Подписаться в группе"
                :authors="[
                  {
                    image: team3,
                    name: 'Nick Daniel',
                  },
                  {
                    image: team4,
                    name: 'Peterson',
                  },
                  {
                    image: team1,
                    name: 'Elena Morison',
                  },
                  {
                    image: team2,
                    name: 'Ryan Milly',
                  },
                ]"
                :action="{
                  color: 'success',
                  label: 'View Product',
                }"
              />

              <default-project-card
                title="UltaSystem"
                :image="img3"
                label="Задание 3"
                description="Зарегистрироваться и прислать скриншот"
                :authors="[
                  {
                    image: team4,
                    name: 'Peterson',
                  },
                  {
                    image: team3,
                    name: 'Nick Daniel',
                  },
                  {
                    image: team1,
                    name: 'Elena Morison',
                  },
                  {
                    image: team2,
                    name: 'Ryan Milly',
                  },
                ]"
                :action="{
                  color: 'success',
                  label: 'View Product',
                }"
              />

              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <place-holder-card
                  :title="{ text: 'Новое задание', variant: 'h5' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductData } from "@/composables/Product";
import VsudSwitch from "@/components/VsudSwitch.vue";
import ProfileInfoCard from "@/views/components/ProfileInfoCard.vue";
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
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import DefaultProjectCard from "@/views/components/DefaultProjectCard.vue";
import PlaceHolderCard from "@/examples/Cards/PlaceHolderCard.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "product",
  setup() {
   return {}
  },
  components: {
    VsudSwitch,
    ProfileInfoCard,
    VsudAvatar,
    DefaultProjectCard,
    PlaceHolderCard,
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
      faFacebook,
      faTwitter,
      faInstagram,
    };
  },

  mounted() {
    //this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  //beforeUnmount() {
  //  this.$store.state.isAbsolute = false;
  //},
  methods: {
     actionApp() {
        alert('Profile.vue');
     }
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
