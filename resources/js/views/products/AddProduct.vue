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
                      value=""
                      :disabled="false"
                      @input-value="(v) => this.project.name = v"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <vsud-textarea
                      id="project-keys"
                      @textarea-value="(v) => this.project.keys = v"
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
                      @input-value="(v) => this.project.description = v"
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
                      v-model="project.type"                  
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
                      value=""
                      @input-value="(v) => this.project.url = v"
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
                      value=""
                      @input-value="(v) => this.project.twitter = v"
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
                      value=""
                      @input-value="(v) => this.project.discord = v"
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
                      value=""
                      @input-value="(v) => this.project.youtube = v"
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
                      value=""
                      @input-value="(v) => this.project.telegram = v"
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
                      value=""
                      @input-value="(v) => this.project.medium = v"
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
import ModerateProjectsTable from "@/views/components/tables/ProjectsTableModerator";
import ModerateMessagesTable from "@/views/components/tables/MessagesTableModerator";
import VsudInput from "@/components/VsudInput.vue";
import VsudTextarea from "@/components/VsudTextarea.vue";
import VsudButton from "@/components/VsudButton.vue";
import getProjectTypes from "@/assets/js/getProjectTypes.js";
import TwitterIcon from "@/components/Icon/Twitter";
import TelegramIcon from "@/components/Icon/Telegram";
import DiscordIcon from "@/components/Icon/Discord";
import MediumIcon from "@/components/Icon/Medium";
import YoutubeIcon from "@/components/Icon/Youtube";

import { ref } from "vue";

export default {
  name: "add-product",
  components: {
    ModerateProjectsTable,
    ModerateMessagesTable,
    VsudInput,
    VsudButton,
    VsudTextarea,
    getProjectTypes,
    TwitterIcon,
    TelegramIcon,
    DiscordIcon,
    MediumIcon,
    YoutubeIcon,
  },
  data() {
    return {
      project: {
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
    types.value = getProjectTypes();
    return { types };
  },
  methods: {
     sendData() {
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios
            .post("/api/add-project", {
              name: this.project.name,
              type: this.project.type,
              keys: this.project.keys,
              url: this.project.url,
              twitter: this.project.twitter,
              discord: this.project.discord,
              youtube: this.project.youtube,
              telegram: this.project.telegram,
              medium: this.project.medium,
              description: this.description,
            })
            .then((r) => {
              this.$router.push({name: 'Products'});
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
