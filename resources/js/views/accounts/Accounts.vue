<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4">
          <place-holder-horisontal-card
            v-if="accounts"
            :title="{ text: 'Создать рабочий аккаунт', variant: 'h6' }"
            @click.prevent="showModal()"
          />
        </div>
        <accounts-table :accounts="accounts" v-if="accounts.length" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="row">
    <div class="col-md-4">
      <add-account-modal
        :theModal="theModal"
        @accounts-reload="accountsReload"
      />
    </div>
  </div>
</template>

<script>
import AccountsTable from "@/views/components/tables/AccountsTable";
import ProjectsTable from "@/views/components/tables/ProjectsTable";
import getAllAccounts from "@/assets/js/getAccounts";
import { Modal } from "bootstrap";

import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";
import AddAccountModal from "@/components/modal/AddAccountModal.vue";

export default {
  name: "accounts",
  mounted() {
    this.theModal = new Modal(
      document.getElementById("addAccountModalMessage")
    );
  },
  data() {
    return {
      accounts: [],
      theModal: null,
      key: false,
    };
  },
  created() {
    this.getAccounts();
  },
  components: {
    AccountsTable,
    ProjectsTable,
    getAllAccounts,
    PlaceHolderHorisontalCard,
    AddAccountModal,
  },
  methods: {
    getAccounts() {
      //this.accounts = [{id: 1, name: 'qqq', email: 'dfdf@dfdd.gg'}, {id: 2, name: 'eee', email: 'eee@dfdd.gg'}];
      this.accounts = getAllAccounts();
      //this.accounts = [];
      //this.accounts = [{id: 1, name: 'qqq', email: 'dfdf@dfdd.gg'}, {id: 2, name: 'eee', email: 'eee@dfdd.gg'}];
      //console.log(1);
    },
    accountsReload(row) {
      //console.log(row)
      //console.log(this.accounts)
      this.getAccounts();
      //this.accounts = getAllAccounts();
      //console.log(this.accounts)
      //setTimeout(()=>{console.log(this.accounts)}, 3000)
      //         this.key++
    },
    showModal() {
      this.theModal.show();
    },
  },
};
</script>
