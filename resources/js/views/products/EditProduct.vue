<template>
  <div class="container-fluid my-3 py-3">
    <div class="row">
      <div class="col-lg-12 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-header">
            <h5>Настройки данных проекта</h5>
          </div>
          <div class="card-body pt-0">
            <div class="row">
              <div class="col-6">
                <div class="row">
                  <div class="col-3">
                    <img :src="product.value.logo_url" class="m-2" />
                  </div>
                  <div class="col-9">
                    <form
                      action="/file-upload"
                      class="form-control dropzone"
                      id="dropzone"
                    >
                      <div class="fallback">
                        <input name="file" type="file" multiple />
                      </div>
                    </form>
                  </div>
                </div>

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
                      :value="product.value.name"
                      :disabled="false"
                      @input-value="(v) => (product.value.name = v)"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <vsud-textarea
                      id="product-description"
                      placeholder="Любой текст"
                      :value="product.value.description"
                      @textarea-value="(v) => (product.value.description = v)"
                      rows="7"
                      >Комментарий к проекту</vsud-textarea
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 pb-3">
                    <label class="form-label">Тип проекта</label>
                    <select
                      class="form-control"
                      name="choices-type-button"
                      id="choices-type"
                      placeholder="Выберите тип проекта"
                      v-model="product.value.product_type_id"
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
                      :value="product.value.website_url"
                      @input-value="(v) => (product.value.website_url = v)"
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
                      :value="product.value.twitter"
                      @input-value="(v) => (product.value.twitter = v)"
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
                      :value="product.value.discord"
                      @input-value="(v) => (product.value.discord = v)"
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
                      :value="product.value.youtube"
                      @input-value="(v) => (product.value.youtube = v)"
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
                      :value="product.value.telegram"
                      @input-value="(v) => (product.value.telegram = v)"
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
                      :value="product.value.medium"
                      @input-value="(v) => (product.value.medium = v)"
                      :disabled="false"
                    />
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
              <!-- -->
              <div class="col-lg-6 mt-4 mt-lg-0">
                <div class="card bg-gradient-dark">
                  <div class="card-header bg-transparent pb-0">
                    <div class="mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4">
                      <a href="javascript:;" @click="showAddBlockModal">
                        <place-holder-horisontal-card
                          :title="{
                            text: 'Добавить блок описания',
                            variant: 'h6',
                          }"
                        />
                      </a>
                    </div>

                    <h6 class="text-white">
                      Настройка стадий развития проекта
                    </h6>
                  </div>
                  <div class="card-body p-3">
                    <div
                      class="timeline timeline-one-side"
                      data-timeline-axis-style="dashed"
                    >
                      <div v-if="blocks.value.length">
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
                            <h6
                              class="text-white text-sm font-weight-bold mb-0"
                            >
                              {{ block.name }}
                            </h6>
                            <div class="float-right">
                              <button
                                class="btn btn-link text-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="true"
                                :id="'product-dropdown' + block.id"
                              >
                                <i
                                  class="fa fa-ellipsis-v text-xs"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <ul
                                class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                                :aria-labelledby="
                                  'timeline-block-dropdown' + block.id
                                "
                              >
                                <li>
                                  <a
                                    class="dropdown-item border-radius-md"
                                    href="javascript:;"
                                    @click="
                                      showEditBlockModal(
                                        block.id,
                                        block.stage,
                                        block.name,
                                        block.date,
                                        block.description,
                                        block.buttons
                                      )
                                    "
                                    >Изменить</a
                                  >
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item border-radius-md"
                                    href="javascript:;"
                                    @click="
                                      confirm(
                                        block.id,
                                        'Удалить блок timeline?',
                                        'Удаление этапа развития проекта'
                                      )
                                    "
                                    >Удалить</a
                                  >
                                </li>
                              </ul>
                            </div>

                            <p class="text-white text-xs mt-1 mb-0">
                              {{ getPrintDate(block.date) }}
                            </p>
                            <p class="text-secondary text-sm mt-3 mb-2">
                              {{ block.description }}
                            </p>
                            <span
                              class="badge badge-sm"
                              :class="
                                'bg-gradient-' +
                                blockTypes[block.stage - 1].color
                              "
                              v-if="block.button1"
                              >{{ block.button1 }}</span
                            >
                            <span
                              class="badge badge-sm ml-1"
                              :class="
                                'bg-gradient-' +
                                blockTypes[block.stage - 1].color
                              "
                              v-if="block.button2"
                              >{{ block.button2 }}</span
                            >
                            <span
                              class="badge badge-sm ml-1"
                              :class="
                                'bg-gradient-' +
                                blockTypes[block.stage - 1].color
                              "
                              v-if="block.button3"
                              >{{ block.button3 }}</span
                            >
                            <span
                              class="badge badge-sm ml-1"
                              :class="
                                'bg-gradient-' +
                                blockTypes[block.stage - 1].color
                              "
                              v-if="block.button4"
                              >{{ block.button4 }}</span
                            >
                            <span
                              class="badge badge-sm ml-1"
                              :class="
                                'bg-gradient-' +
                                blockTypes[block.stage - 1].color
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
                            class="
                              text-secondary
                              font-weight-bold
                              text-xs
                              mt-1
                              mb-0
                            "
                          ></p>
                          <p class="text-secondary text-sm mt-3 mb-2">
                            Отсутствует описание стадий развития проекта.
                          </p>
                          <button
                            class="badge badge-sm bg-gradient-secondary"
                            @click="showAddBlockModal"
                          >
                            Настроить timeline проекта
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="row">
    <div class="col-md-4">
      <add-product-block-modal
        :product-id="productId"
        :blockId="blockData.id"
        :blockType="blockData.type"
        :blockName="blockData.name"
        :blockDate="blockData.date"
        :blockText="blockData.text"
        :blockButtons="blockData.buttons"
        :action="blockData.do"
        :add-modal="addModal"
        :openModal="openModalStatus"
        @product-reload="productReload"
      />
    </div>
  </div>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import VsudTextarea from "@/components/VsudTextarea.vue";
import VsudButton from "@/components/VsudButton.vue";
import VsudTimelineBlock from "@/components/VsudTimelineBlock.vue";
import getProductTypes from "@/assets/js/getProductTypes.js";
import getProductData from "@/assets/js/getProductData.js";
import getProductBlocks from "@/assets/js/getProductBlocks.js";
import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";
import AddProductBlockModal from "@/components/modal/AddProductBlockModal.vue";

import TwitterIcon from "@/components/Icon/Twitter";
import TelegramIcon from "@/components/Icon/Telegram";
import DiscordIcon from "@/components/Icon/Discord";
import MediumIcon from "@/components/Icon/Medium";
import YoutubeIcon from "@/components/Icon/Youtube";

import { Dropzone } from "dropzone";

import confirmModal from "@/components/modal/confirmModal.js";
import { Modal } from "bootstrap";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "edit-product",
  components: {
    VsudInput,
    VsudButton,
    VsudTextarea,
    VsudTimelineBlock,
    getProductTypes,
    getProductData,
    getProductBlocks,
    TwitterIcon,
    TelegramIcon,
    DiscordIcon,
    MediumIcon,
    YoutubeIcon,
    confirmModal,
    PlaceHolderHorisontalCard,
    AddProductBlockModal,
  },
  mounted() {
    this.addModal = new Modal(
      document.getElementById("addProductBlockModalMessage")
    );
    //window.token = localStorage.getItem("x_xsrf_token");
    this.pathLogo = this.product.value.logo_url;
    const token = this.getCookie("XSRF-TOKEN");
    /*if (typeof Dropzone !== "undefined") {
      Dropzone.forElement("dropzone").removeAllFiles(true);
    }*/
    Dropzone.autoDiscover = false;
    try {
      Dropzone.forElement("dropzone").removeAllFiles(true);
    } catch {}

    let drop = document.getElementById("dropzone");
    let myDropzone = new Dropzone(drop, {
      url: "/api/upload-product-logo/" + this.productId,
      addRemoveLinks: true,
      uploadMultiple: false,
      maxFilesize: 2,
      dictDefaultMessage: "Перетащите сюда файл изображения. Макс. 2 МБ.",
      dictFileTooBig: "Файл слишком большой!",
      dictInvalidFileType: "Поддерживатся только .jpg и .png",
      dictCancelUpload: "Отменить загрузку",
      dictUploadCanceled: "Загрузка отменена",
      dictRemoveFile: "Удалить файл",
      maxFiles: 1,
      acceptedFiles: `.jpg,.png`,
      resizeHeight: 128,
      withCredentials: true,
      dictResponseError: "Ошибка загрузки изображения",
      headers: {
        "X-XSRF-TOKEN": decodeURIComponent(token),
      },
      sending() {
        const setCookie = (name, value, days) => {
          var expires = "";
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "") + expires + "; path=/";
        };
        setCookie("XSRF-TOKEN", token, 1);
      },
      success: (file, response) => {
        this.product.value.logo_url = response;
      },
    });
    //this.token = localStorage.getItem("x_xsrf_token");
  },

  data() {
    return {
      openModalStatus: false,
      addModal: null,
      blockTypes: globalBlockTypes,
      confirmBlockDelete: false,
      blockData: {
        id: null,
        type: null,
        name: "",
        date: "",
        text: "",
        do: "add",
        buttons: "",
      },
      token: null,
    };
  },

  setup() {
    const route = useRoute();
    const productId = route.params.productId;
    const types = ref([]);
    types.value = getProductTypes();
    const product = ref([]);
    product.value = getProductData(productId);
    const blocks = ref([]);
    blocks.value = getProductBlocks(productId);
    return { productId, types, product, blocks };
  },
  methods: {
    setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    eraseCookie(name) {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    sendData() {
      axios
        .post("/api/edit-product/" + this.productId, {
          name: this.product.value.name,
          type: this.product.value.product_type_id,
          url: this.product.value.website_url,
          twitter: this.product.value.twitter,
          discord: this.product.value.discord,
          youtube: this.product.value.youtube,
          telegram: this.product.value.telegram,
          medium: this.product.value.medium,
          description: this.product.value.description,
        })
        .then((r) => {
          this.$router.push({ name: "ProductsModerator" });
          //this.$router.go()
          //this.$emit("socialsReload");
        })
        .catch((err) => {
          console.log(err.response);
          this.registerError = "Ошибка сохранения проекта";
          alert(this.registerError);
        });
    },
    showBlockModal() {
      this.openModalStatus = true;
      this.addModal.show();
      setTimeout(() => {
        this.openModalStatus = false;
      }, 500);
    },
    productReload() {
      this.blocks.value = getProductBlocks(this.productId);
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
    confirm(id, title, text) {
      this.confirmBlockDelete = confirmModal(id, title, text);
    },
    showAddBlockModal(id, type, name, date, text, buttons) {
      this.blockData.id = null;
      this.blockData.type = null;
      this.blockData.name = null;
      this.blockData.date = null;
      this.blockData.text = null;
      this.blockData.buttons = "Пример";
      this.blockData.do = "add";
      this.showBlockModal();
    },
    showEditBlockModal(id, type, name, date, text, buttons) {
      this.blockData.id = id;
      this.blockData.type = type;
      this.blockData.name = name;
      this.blockData.date = date;
      this.blockData.text = text;
      this.blockData.buttons = buttons;
      this.blockData.do = "edit";
      this.showBlockModal();
    },
    deleteBlock(id) {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .get("/api/delete-block/" + id)
          .then((r) => {
            //this.$router.push({ name: "Products" });
            //this.$router.go()
            this.productReload();
          })
          .catch((err) => {
            console.log(err.response);
            this.registerError = "Ошибка сохранения удаления блока timeline";
            alert(this.registerError);
          });
      });
    },
  },
  computed: {
    tokenC() {
      this.setCookie("XSRF-TOKEN", "888888", 1);
      return this.token;
    },
    /*productType(value) {
      this.product.type = value ? value : this.product.value.product_type_id;
      console.log(1);
      console.log(this.product.type);
      return this.product.type;
    },*/
  },
  watch: {
    confirmBlockDelete(newQuestion, oldQuestion) {
      if (newQuestion) {
        this.deleteBlock(newQuestion);
      }
    },
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