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
              <div class="col-8">
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
                      @input-value="(v) => (this.product.name = v)"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <vsud-textarea
                      id="product-keys"
                      @textarea-value="(v) => (this.product.keys = v)"
                      placeholder="key1
key2"
                    >Ключевые фразы</vsud-textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label>Дополнительная информация</label>
                      <editor
                        api-key="no-api-key"
                        :key="init"
                        :init="{
                           plugins: 'preview searchreplace autolink directionality code visualblocks visualchars image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                           editimage_cors_hosts: ['picsum.photos'],
                           menubar: 'edit view insert format tools table help',
                           toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | preview  | image media template link anchor codesample',
                           image_advtab: true,
                           height: 600,
                           image_caption: true,
                           quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                           noneditable_class: 'mceNonEditable',
                           toolbar_mode: 'sliding',
                           contextmenu: 'link image table',
                           skin: useDarkMode ? 'oxide-dark' : 'oxide',
                           content_css: useDarkMode ? 'dark' : 'default',
                           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                           }"
                        v-model="description"
                      />
                    </div>
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
              <div class="col-4">
                <div class="row">
                  <div class="col-12 pb-3">
                    <label class="form-label">Типы, относящиеся к проекту</label>
                    <div class="form-group pt-3">
                      <vsud-select-group
                        :options="types.value"
                        v-model="selected"
                      />
                    </div>
                    <!--<select
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
                    </select>-->
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
                      @input-value="(v) => (this.product.url = v)"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex">
                      <twitter-icon class="mt-1 mr-1" />Twitter
                    </label>
                    <vsud-input
                      id="product-twitter"
                      type="text"
                      placeholder="https://twitter.com/xxxx"
                      aria-label="product-twitter"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => (this.product.twitter = v)"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex">
                      <discord-icon class="mt-1 mr-1" />Discord
                    </label>
                    <vsud-input
                      id="product-discord"
                      type="text"
                      placeholder="https://discord.com/user/xxxx"
                      aria-label="product-discord"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => (this.product.discord = v)"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex">
                      <youtube-icon class="mt-1 mr-1" />YouTube
                    </label>
                    <vsud-input
                      id="product-youtube"
                      type="text"
                      placeholder="https://youtube.com/channel/xxxx"
                      aria-label="product-youtube"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => (this.product.youtube = v)"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex">
                      <telegram-icon class="mt-1 mr-1" />Telegram
                    </label>
                    <vsud-input
                      id="product-telegram"
                      type="text"
                      placeholder="https://t.me/xxxx"
                      aria-label="product-telegram"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => (this.product.telegram = v)"
                      :disabled="false"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label class="form-label d-flex">
                      <medium-icon class="mt-1 mr-1" />Medium
                    </label>
                    <vsud-input
                      id="product-medium"
                      type="text"
                      placeholder="https://medium.com/@xxxx"
                      aria-label="product-medium"
                      :isRequired="false"
                      :active="true"
                      value=""
                      @input-value="(v) => (this.product.medium = v)"
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
import VsudSelectGroup from "@/components/VsudSelectGroup.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudTextarea from "@/components/VsudTextarea.vue";
import VsudButton from "@/components/VsudButton.vue";

import getProductTypes from "@/assets/js/getProductTypes.js";

import TwitterIcon from "@/components/Icon/Twitter";
import TelegramIcon from "@/components/Icon/Telegram";
import DiscordIcon from "@/components/Icon/Discord";
import MediumIcon from "@/components/Icon/Medium";
import YoutubeIcon from "@/components/Icon/Youtube";
import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";

import Editor from "@tinymce/tinymce-vue";

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
    PlaceHolderHorisontalCard,
    VsudSelectGroup,
    editor: Editor,
  },
  data() {
    return {
      selected: [],
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
        description: "",
        init: 0,
      },
    };
  },
  setup() {
    const types = ref([]);
    types.value = getProductTypes();
    return { types };
  },
  mounted() {
    this.init++;
  },
  methods: {
    getTypeName(selected) {
      if (!this.types.value.length) {
        return null;
      }
      const obj = this.types.value.find((data) => data.id == selected);
      //this.product.type = selected;
      return obj ? obj.name : null;
    },

    sendData() {
      axios
        .post("/api/add-product", {
          name: this.product.name,
          /*type: this.product.type,*/
          type: this.selected,
          index: this.product.keys,
          url: this.product.url,
          twitter: this.product.twitter,
          discord: this.product.discord,
          youtube: this.product.youtube,
          telegram: this.product.telegram,
          medium: this.product.medium,
          description: this.description,
        })
        .then((r) => {
          this.$router.push({ name: "ProductsModerator" });
        })
        .catch((err) => {
          console.log(err.response);
          this.registerError = "Ошибка сохранения проекта";
          alert(this.registerError);
          return;
        });
    },
  },
};
</script>
