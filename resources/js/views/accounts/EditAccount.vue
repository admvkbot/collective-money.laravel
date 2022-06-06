<template>
  <div class="container-fluid pt-3">
    <div class="card mb-4">
      <div class="card-header">
        <div class="row align-items-center">
          <div class="col-8">
            <h6 class="mb-0">Настройка рабочего акаунта</h6>
          </div>
          <div class="col-4 text-end">
            <vsud-button
              variant="gradient"
              size="sm"
              color="white"
              class="mr-5"
              @click="$router.back()"
              >Назад</vsud-button
            >
            <vsud-button variant="gradient" size="sm" color="primary"
              >Изменить</vsud-button
            >
          </div>
        </div>
      </div>
      <div class="card-body">
        <form>
          <h6 class="heading-small text-muted mb-4">
            Информация о виртуальном пользователе
          </h6>
          <div>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-username"
                    >Имя</label
                  >
                  <input
                    type="text"
                    id="input-username"
                    class="form-control"
                    placeholder="Иван Иванов"
                    :value="account.name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-email"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="input-email"
                    class="form-control"
                    placeholder="ivan@example.com"
                    :value="account.email"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr class="horizontal dark my-4" />
          <h6 class="heading-small text-muted mb-4">Социальные сети</h6>
          <div>
            <div class="row">
              <div class="col-12">
                <socials-table
                  :socials="socials"
                  :accountId="accountId"
                  v-if="socials"
                  @socialsReload="socialsReload"
                />
              </div>
            </div>
          </div>

          <hr class="horizontal dark my-4" />

          <h6 class="heading-small text-muted mb-4">Contact information</h6>
          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="form-control-label" for="input-address"
                    >Address</label
                  >
                  <input
                    id="input-address"
                    class="form-control"
                    placeholder="Home Address"
                    value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-city"
                    >City</label
                  >
                  <input
                    type="text"
                    id="input-city"
                    class="form-control"
                    placeholder="City"
                    value="New York"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-country"
                    >Country</label
                  >
                  <input
                    type="text"
                    id="input-country"
                    class="form-control"
                    placeholder="Country"
                    value="United States"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-country"
                    >Postal code</label
                  >
                  <input
                    type="number"
                    id="input-postal-code"
                    class="form-control"
                    placeholder="Postal code"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr class="horizontal dark my-4" />

          <h6 class="heading-small text-muted mb-4">
            Об аккаунте {{ account.name }}
          </h6>
          <div>
            <div class="form-group">
              <label class="form-control-label">Описание</label>
              <textarea
                rows="4"
                class="form-control"
                placeholder="Информация об особенностях аккаунта ..."
                v-model="account.description"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import getAccountData from "@/assets/js/getAccountData";
import getAllSocials from "@/assets/js/getSocials";
import getAccountSocialNetworks from "@/assets/js/getAccountSocialNetworks";
import SocialsTable from "@/views/components/SocialsTable";
import VsudButton from "@/components/VsudButton.vue";
import { computed } from 'vue'

export default {
  name: "edit-account",
  props: {
    accountId: { required: true },
  },
  data() {
    return {
      account: { name: "" },
      /*socials: [{id: 1, name: "Twitter", url: "https://twitter.com/"}],*/
      socialNetworksData: [],
      socials: [],
    };
  },
  provide() {
     return{
      socialNetworksData: computed(() => this.socialNetworksData),
     }
  },
  created() {
    this.getAccountData(this.accountId);
    this.getSocialNetworks();
    this.getSocials();
  },
  updated() {
    //this.getSocialNetworks();    
  },
  components: {
    VsudButton,
    getAccountSocialNetworks,
    SocialsTable,
  },
  methods: {
    getSocialNetworks() {
      //this.socialNetworksData = [{id: 1, name: "Twitter"}, {id: 2, name: "Two"}]
      this.socialNetworksData = getAccountSocialNetworks(this.accountId);
      //this.socialNetworksData = []
      //if (typeof this.socialNetworksData[0] == 'undefined') {
      /*if (!this.socialNetworksData.length) {
        this.socialNetworksData = [
          { id: 0, name: "", description: "", status: 0, type: 0 },
        ];
      }*/
    },

    getAccountData(accountId) {
      //this.accounts = [{id: 1, name: 'qqq', email: 'dfdf@dfdd.gg'}, {id: 2, name: 'eee', email: 'eee@dfdd.gg'}];
      this.account = getAccountData(accountId);
      if (!this.account.name) {
        this.account.name = "...";
      }
      //this.accounts = [];
      //this.accounts = [{id: 1, name: 'qqq', email: 'dfdf@dfdd.gg'}, {id: 2, name: 'eee', email: 'eee@dfdd.gg'}];
      //console.log(this.account);
    },
    getSocials() {
      //this.socials = [{id: 1, name: 'Twitter', socialid: 'qqq', url: 'https://dfdf@dfdd.gg', social_network_id: 1}];
      this.socials = getAllSocials();
    },
    socialsReload(row) {
      this.getSocialNetworks();
      //console.log(this.accounts)
      this.getSocials();
      //this.accounts = getAllAccounts();
      //console.log(this.accounts)
      //setTimeout(()=>{console.log(this.accounts)}, 3000)
      //         this.key++
    },
  },
};
</script>
