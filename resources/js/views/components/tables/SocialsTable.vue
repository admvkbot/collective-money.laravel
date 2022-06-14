<template>
  <div
    class="mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4"
    v-if="socialNetworksData.value.length"
  >
    <place-holder-horisontal-card
      :title="{ text: 'Добавить соцсеть', variant: 'h6' }"
      @click.prevent="showAddModal()"
    />
  </div>

  <div class="card mb-4" v-if="socials.length">
    <div class="card-header pb-0">
      <h6>Список социальных сетей</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Сеть
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                  ps-2
                "
              >
                Статус
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Взаимоподписки
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Дата добавления
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="social in socials" :key="social.id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <social-logo
                      :socialName="social.name"
                      size="sm"
                      border-radius="0"
                      class="me-3"
                      :alt="social.name"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ social.name }}</h6>
                    <p class="text-xs text-secondary mb-0">
                      {{ social.url }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <vsud-badge
                  :color="social.status ? 'success' : 'secondary'"
                  variant="gradient"
                  size="sm"
                >
                  {{ social.status ? "Активный" : "Неактивный" }}
                </vsud-badge>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-switch-base
                  v-if="social.status"
                  :id="'wsubscription' + social.id"
                  name="rememberMe"
                  checked
                >
                </vsud-switch-base>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  @click.prevent="showEditModal(social)"
                  class="text-secondary font-weight-bold text-xs"
                  >Изменить</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="row">
    <div class="col-md-4">
      <add-social-modal
        :addModal="addModal"
        :accountId="accountId"
        @socials-reload="reload"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <edit-social-modal
        :editModal="editModal"
        :accountId="accountId"
        :social="social"
        @socials-reload="reload"
      />
    </div>
  </div>
</template>

<script>
import { integer } from "@vuelidate/validators";
import SocialLogo from "@/components/socials/SocialLogo";
import VsudBadge from "@/components/VsudBadge.vue";
import VsudSwitchBase from "@/components/VsudSwitchBase.vue";
//import AddSocialModal from "@/components/modal/AddSocialModal.vue";
import { Modal } from "bootstrap";
import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";
import AddSocialModal from "@/components/modal/AddSocialModal.vue";
import EditSocialModal from "@/components/modal/EditSocialModal.vue";

export default {
  name: "socials-table",
  inject: ["socialNetworksData"],
  props: {
    socials: {
      type: Array,
      default: [],
    },
    accountId: {
      type: Number,
      default: 0,
    },
    /*socialNetworksData: {
      type: Array,
      default: [],
    },*/
  },
  emits: ["socialsReload"],
  mounted() {
    this.addModal = new Modal(document.getElementById("addSocialModalMessage"));
    this.editModal = new Modal(
      document.getElementById("editSocialModalMessage")
    );
  },
  data() {
    return {
      addModal: null,
      editModal: null,
      social: {}
    };
  },
  components: {
    PlaceHolderHorisontalCard,
    AddSocialModal,
    EditSocialModal,
    SocialLogo,
    VsudBadge,
    VsudSwitchBase,
    /*AddSocialModal*/
  },
  methods: {
    reload() {
      this.$emit("socialsReload");
    },
    showAddModal() {
      this.addModal.show();
    },
    showEditModal(social) {
      this.social = social
      this.editModal.show()
    },
  },
};
</script>
