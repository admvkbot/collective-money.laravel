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
                      id="project-name"
                      type="text"
                      placeholder="Crypto Whitelist Pro"
                      aria-label="Name"
                      :isRequired="true"
                      :active="true"
                      :value="projectIn.value.name"
                      :disabled="false"
                      @input-value="(v) => (projectIn.value.name = v)"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <vsud-textarea
                      id="project-keys"
                      :value="index.value"
                      @textarea-value="(v) => (index.value = v)"
                      placeholder="key1
key2"
                      >Ключевые фразы</vsud-textarea
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <vsud-textarea
                      id="project-description"
                      placeholder="Любой текст"
                      :value="projectIn.value.description"
                      @textarea-value="(v) => (projectIn.value.description = v)"
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
                      v-model="projectIn.value.project_type_id"
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
                      id="project-site-url"
                      type="text"
                      placeholder="https://project.website/"
                      aria-label="project-site-url"
                      :isRequired="false"
                      :active="true"
                      :value="projectIn.value.website_url"
                      @input-value="(v) => (projectIn.value.website_url = v)"
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
                      id="project-twitter"
                      type="text"
                      placeholder="https://twitter.com/xxxx"
                      aria-label="project-twitter"
                      :isRequired="false"
                      :active="true"
                      :value="projectIn.value.twitter"
                      @input-value="(v) => (projectIn.value.twitter = v)"
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
                      id="project-discord"
                      type="text"
                      placeholder="https://discord.com/user/xxxx"
                      aria-label="project-discord"
                      :isRequired="false"
                      :active="true"
                      :value="projectIn.value.discord"
                      @input-value="(v) => (projectIn.value.discord = v)"
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
                      id="project-youtube"
                      type="text"
                      placeholder="https://youtube.com/channel/xxxx"
                      aria-label="project-youtube"
                      :isRequired="false"
                      :active="true"
                      :value="projectIn.value.youtube"
                      @input-value="(v) => (projectIn.value.youtube = v)"
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
                      id="project-telegram"
                      type="text"
                      placeholder="https://t.me/xxxx"
                      aria-label="project-telegram"
                      :isRequired="false"
                      :active="true"
                      :value="projectIn.value.telegram"
                      @input-value="(v) => (projectIn.value.telegram = v)"
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
                      id="project-medium"
                      type="text"
                      placeholder="https://medium.com/@xxxx"
                      aria-label="project-medium"
                      :isRequired="false"
                      :active="true"
                      :value="projectIn.value.medium"
                      @input-value="(v) => (projectIn.value.medium = v)"
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
                                :id="'project-dropdown' + block.id"
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
      <add-project-block-modal
        :project-id="projectId"
        :blockId="blockData.id"
        :blockType="blockData.type"
        :blockName="blockData.name"
        :blockDate="blockData.date"
        :blockText="blockData.text"
        :blockButtons="blockData.buttons"
        :action="blockData.do"
        :add-modal="addModal"
        :openModal="openModalStatus"
        @project-reload="projectReload"
      />
    </div>
  </div>
</template>

<script>
import ModerateProjectsTable from "./components/ModerateProjectsTable";
import VsudInput from "@/components/VsudInput.vue";
import VsudTextarea from "@/components/VsudTextarea.vue";
import VsudButton from "@/components/VsudButton.vue";
import VsudTimelineBlock from "@/components/VsudTimelineBlock.vue";
import getProjectTypes from "@/assets/js/getProjectTypes.js";
import getProjectData from "@/assets/js/getProjectData.js";
import getIndexesByProjectId from "@/assets/js/getIndexes.js";
import getProjectBlocks from "@/assets/js/getProjectBlocks.js";
import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";
import AddProjectBlockModal from "@/components/modal/AddProjectBlockModal.vue";

import TwitterIcon from "@/components/Icon/Twitter";
import TelegramIcon from "@/components/Icon/Telegram";
import DiscordIcon from "@/components/Icon/Discord";
import MediumIcon from "@/components/Icon/Medium";
import YoutubeIcon from "@/components/Icon/Youtube";

import confirmModal from "@/components/modal/confirmModal.js";
import { Modal } from "bootstrap";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "edit-product",
  components: {
    ModerateProjectsTable,
    VsudInput,
    VsudButton,
    VsudTextarea,
    VsudTimelineBlock,
    getProjectTypes,
    getProjectData,
    getIndexesByProjectId,
    getProjectBlocks,
    TwitterIcon,
    TelegramIcon,
    DiscordIcon,
    MediumIcon,
    YoutubeIcon,
    confirmModal,
    PlaceHolderHorisontalCard,
    AddProjectBlockModal,
  },
  mounted() {
    this.addModal = new Modal(
      document.getElementById("addProjectBlockModalMessage")
    );
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
    };
  },

  setup() {
    const route = useRoute();
    const projectId = route.params.productId;
    const types = ref([]);
    types.value = getProjectTypes();
    const projectIn = ref([]);
    projectIn.value = getProjectData(projectId);
    const index = ref([]);
    index.value = getIndexesByProjectId(projectId);
    const blocks = ref([]);
    blocks.value = getProjectBlocks(projectId);
    return { projectId, types, projectIn, index, blocks };
  },
  methods: {
    sendData() {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/edit-project/"+this.projectId, {
            name: this.projectIn.value.name,
            type: this.projectIn.value.project_type_id,
            url: this.projectIn.value.website_url,
            twitter: this.projectIn.value.twitter,
            discord: this.projectIn.value.discord,
            youtube: this.projectIn.value.youtube,
            telegram: this.projectIn.value.telegram,
            medium: this.projectIn.value.medium,
            description: this.projectIn.value.description,
          })
          .then((r) => {
            this.$router.push({ name: "Products" });
            //this.$router.go()
            //this.$emit("socialsReload");
          })
          .catch((err) => {
            console.log(err.response);
            this.registerError = "Ошибка сохранения проекта";
            alert(this.registerError);
          });
      });
    },
    showBlockModal() {
      console.log(this.openModalStatus);
      this.openModalStatus = true;
      this.addModal.show();
      setTimeout(() => {
        this.openModalStatus = false;
      }, 500);
    },
    projectReload() {
      this.blocks.value = getProjectBlocks(this.projectId);
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
      this.blockData.buttons = 'Пример';
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
            this.projectReload();
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
     projectType(value) {
        this.project.type = value ? value : this.projectIn.value.project_type_id
        console.log(1)
        console.log(this.project.type)
        return this.project.type
     }
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