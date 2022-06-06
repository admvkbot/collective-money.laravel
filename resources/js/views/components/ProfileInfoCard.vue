<template>
  <div class="card h-100">
    <div class="p-3 pb-0 card-header">
      <div class="row">
        <div class="col-md-12 d-flex align-items-center">
          <h6 class="mb-0">{{ title }}</h6>
        </div>
        <!--<div class="col-md-4 text-end">
          <a :href="action.route">
            <i
              class="text-sm fas fa-user-edit text-secondary"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              :title="action.tooltip"
            ></i>
          </a>
        </div>-->
      </div>
    </div>
    <div class="p-3 card-body">
      <p class="text-sm">
        {{ description }}
      </p>
      <hr class="my-4 horizontal gray-light" />
      <ul class="list-group">
        <li class="pt-0 text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Баланс:</strong> &nbsp;
          {{ info.balance }}
        </li>
        <li class="pt-0 text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Статус:</strong> &nbsp;
          {{ info.status }}
        </li>
        <li class="pt-0 text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Уровень:</strong> &nbsp;
          {{ info.level }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Никнейм:</strong> &nbsp;
          {{ info.nickname }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Email:</strong> &nbsp; {{ info.email }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Инвайт для рефов:</strong> &nbsp; {{ info.invite }}
        </li>
        <li class="pb-0 border-0 list-group-item ps-0">
          <strong class="text-sm text-dark">Контакты:</strong> &nbsp;
          <a
            v-for="({ icon, link }, index) of social"
            :key="index"
            class="py-0 mb-0 btn-simple ps-1 pe-2"
            :href="link"
          >
            <font-awesome-icon :icon="icon" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "ProfileInfoCard",
  components: {
    FontAwesomeIcon,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    info: {
      type: Object,
      nickname: String,
      email: String,
      invite: String,
      status: String,
      level: String,
      default: () => {},
    },
    social: {
      type: Array,
      link: String,
      icon: String,
      default: () => [],
    },
    action: {
      type: Object,
      route: String,
      tooltip: String,
      default: () => ({
        route: "javascript:;",
      }),
    },
  },
};
</script>
