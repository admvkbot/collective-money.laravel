<template>
  <div class="container-fluid my-3 py-3">
    <div class="row">
      <div class="col-lg-12 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-header">
            <h5>Настройки ключей парсинга проекта {{ projectIn.value.name }}</h5>
          </div>
          <div class="card-body pt-0">
            <div class="row">
              <div class="col-12">
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
                <div class="row mt-auto position-sticky top-100 pb-2">
                  <div class="col-9"></div>
                  <div class="col-3 d-flex">
                    <vsud-button
                      class="my-4 mb-2 ml-2"
                      variant="gradient"
                      color="success"
                      full-width
                      @click.prevent="sendData"
                      >Обновить
                    </vsud-button>
                  </div>
                </div>
              </div>
              <!-- -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 pt-3">
        <moderate-messages-table :project-id="projectId" :key="indexes" />
      </div>
    </div>
  </div>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import VsudTextarea from "@/components/VsudTextarea.vue";
import VsudButton from "@/components/VsudButton.vue";
import getProjectData from "@/assets/js/getProjectData.js";
import getIndexesByProjectId from "@/assets/js/getIndexes.js";
import ModerateMessagesTable from "@/views/components/tables/MessagesTableModerator";
//import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";

//import confirmModal from "@/components/modal/confirmModal.js";
//import { Modal } from "bootstrap";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "edit-product-key",
  components: {
    VsudInput,
    VsudButton,
    VsudTextarea,
    getProjectData,
    getIndexesByProjectId,
    ModerateMessagesTable,
    /*confirmModal,
    PlaceHolderHorisontalCard,*/
  },
  data() {
    return {
      indexes: [],
    };
  },

  setup() {
    const route = useRoute();
    const projectId = route.params.productId;
    const projectIn = ref([]);
    projectIn.value = getProjectData(projectId);
    const index = ref([]);
    index.value = getIndexesByProjectId(projectId);
    return { projectId, projectIn, index };
  },
  methods: {
    sendData() {
      axios
        .post("/api/edit-project-key", {
          project_id: this.projectId,
          index: this.index.value,
        })
        .then((r) => {
          this.indexes = this.getIndexesFromStr(this.index.value);
          //this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          console.log(err.response);
          this.registerError = "Ошибка сохранения Indexes";
          alert(this.registerError);
        });
    },
    getIndexesFromStr(str) {
      return str.split("\n").filter((element) => element);
    },
    showBlockModal() {
      this.openModalStatus = true;
      this.addModal.show();
      setTimeout(() => {
        this.openModalStatus = false;
      }, 500);
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