<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Список аккаунтов</h6>
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
                Имя
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
                Состояние
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Баланс
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in accounts" :key="account.id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img1"
                      size="sm"
                      border-radius="lg"
                      class="me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ account.name }}</h6>
                    <p class="text-xs text-secondary mb-0">
                      {{ account.email }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Manager</p>
                <p class="text-xs text-secondary mb-0">Organization</p>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="success" variant="gradient" size="sm"
                  >Online</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td class="align-middle">
                <router-link
                  :to="{
                    name: 'Edit Account',
                    params: { accountId: account.id },
                  }"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Настроить</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VsudAvatar from "../../components/VsudAvatar.vue";
import VsudBadge from "../../components/VsudBadge.vue";
import img1 from "../../assets/img/portrait-symbol.jpg";
import img2 from "../../assets/img/team-3.jpg";
import img3 from "../../assets/img/team-4.jpg";
import img4 from "../../assets/img/team-3.jpg";
import img5 from "../../assets/img/team-2.jpg";
import img6 from "../../assets/img/team-4.jpg";
import { integer } from "@vuelidate/validators";

export default {
  name: "accounts-table",
  props: {
    accounts: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    };
  },
  components: {
    VsudAvatar,
    VsudBadge,
  },
};
</script>
