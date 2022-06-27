<template>
  <div class="container-fluid my-3 py-3">
    <div class="row">
      <div class="col-lg-12 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-header">
            <h5>Настройки парсинга проекта</h5>
          </div>
          <div class="card-body pt-0">
            <div class="row">
              <div class="col-6">
                <div class="row">
                  <div class="col-12">
                    <label class="form-label">Название</label>
                    <vsud-input
                      id="product-name"
                      type="text"
                      placeholder="Crypto Whitelist Pro"
                      aria-label="Name"
                      :isRequired="true"
                      :active="true"
                      value=""
                      :disabled="false"
                      @input-value="(v) => this.product.name = v"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <vsud-textarea
                      id="product-keys"
                      @textarea-value="(v) => this.product.keys = v"
                      placeholder="key1
key2"
                      >Ключевые фразы</vsud-textarea
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <vsud-textarea
                      id="product-description"
                      placeholder="Любой текст"
                      @input-value="(v) => this.product.description = v"
                      rows="7"
                      >Комментарий к проекту</vsud-textarea
                    >
                  </div>
                </div>
                <div class="row mt-auto position-sticky top-100 pb-2">
                  <div class="col-12 d-flex">
                    <vsud-button
                      class="my-4 mb-2 mr-2"
                      variant="outline"
                      color="active"
                      full-width
                      @click="$router.go(-1)"
                      >Назад
                    </vsud-button>
                    <vsud-button
                      class="my-4 mb-2 ml-2"
                      variant="gradient"
                      color="success"
                      full-width
                      @click.prevent="sendData"
                      >Сохранить
                    </vsud-button>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12 pb-3">
                    <label class="form-label">Тип проекта</label>
                    <select
                      class="form-control"
                      name="choices-type-button"
                      id="choices-type"
                      placeholder="Выберите тип проекта"
                      v-model="product.type"                  
                    >
                      <option
                        v-for="item in types.value"
                        :value="item.id"
                        :key="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label">Официальный вебсайт</label>
                    <vsud-input
                      id="product-site-url"
                      type="text"
                      placeholder="https://product.website/"
                      aria-label="product-site-url"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => this.product.url = v"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex"
                      ><twitter-icon class="mt-1 mr-1" />Twitter</label
                    >
                    <vsud-input
                      id="product-twitter"
                      type="text"
                      placeholder="https://twitter.com/xxxx"
                      aria-label="product-twitter"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => this.product.twitter = v"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex"
                      ><discord-icon class="mt-1 mr-1" />Discord</label
                    >
                    <vsud-input
                      id="product-discord"
                      type="text"
                      placeholder="https://discord.com/user/xxxx"
                      aria-label="product-discord"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => this.product.discord = v"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex"
                      ><youtube-icon class="mt-1 mr-1" />YouTube</label
                    >
                    <vsud-input
                      id="product-youtube"
                      type="text"
                      placeholder="https://youtube.com/channel/xxxx"
                      aria-label="product-youtube"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => this.product.youtube = v"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex"
                      ><telegram-icon class="mt-1 mr-1" />Telegram</label
                    >
                    <vsud-input
                      id="product-telegram"
                      type="text"
                      placeholder="https://t.me/xxxx"
                      aria-label="product-telegram"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => this.product.telegram = v"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex"
                      ><medium-icon class="mt-1 mr-1" />Medium</label
                    >
                    <vsud-input
                      id="product-medium"
                      type="text"
                      placeholder="https://medium.com/@xxxx"
                      aria-label="product-medium"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => this.product.medium = v"
                      :disabled="false"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pt-3">
        <moderate-messages-table />
      </div>
    </div>
  </div>
</template>

<script>
import ModerateProductsTable from "@/views/components/tables/ProductsTableModerator";
import ModerateMessagesTable from "@/views/components/tables/MessagesTableModerator";
import VsudInput from "@/components/VsudInput.vue";
import VsudTextarea from "@/components/VsudTextarea.vue";
import VsudButton from "@/components/VsudButton.vue";
import getProductTypes from "@/assets/js/getProductTypes.js";
import TwitterIcon from "@/components/Icon/Twitter";
import TelegramIcon from "@/components/Icon/Telegram";
import DiscordIcon from "@/components/Icon/Discord";
import MediumIcon from "@/components/Icon/Medium";
import YoutubeIcon from "@/components/Icon/Youtube";

import { ref } from "vue";

export default {
  name: "add-product",
  components: {
    ModerateProductsTable,
    ModerateMessagesTable,
    VsudInput,
    VsudButton,
    VsudTextarea,
    getProductTypes,
    TwitterIcon,
    TelegramIcon,
    DiscordIcon,
    MediumIcon,
    YoutubeIcon,
  },
  data() {
    return {
      product: {
         name: "",
         type: 1,
         keys: "",
         url: "",
         twitter: "",
         discord: "",
         youtube: "",
         telegram: "",
         medium: "",
         description: ""
      }
    };
  },
  setup() {
    const types = ref([]);
    types.value = getProductTypes();
    return { types };
  },
  methods: {
     sendData() {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios
            .post("/api/add-product", {
              name: this.product.name,
              type: this.product.type,
              keys: this.product.keys,
              url: this.product.url,
              twitter: this.product.twitter,
              discord: this.product.discord,
              youtube: this.product.youtube,
              telegram: this.product.telegram,
              medium: this.product.medium,
              description: this.description,
            })
            .then((r) => {
              this.$router.push({name: 'ProductsModerator'});
              //this.$router.go()
              //this.$emit("socialsReload");
            })
            .catch((err) => {
              console.log(err.response);
              this.registerError = "Ошибка сохранений проекта";
              alert(this.registerError);
            });
        });
     }
  }
};
</script>
