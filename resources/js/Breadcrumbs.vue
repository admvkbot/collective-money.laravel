<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="this.$store.state.isRTL ? '' : ' me-sm-6'"
    >
      <li class="text-sm breadcrumb-item" :class="textWhite">
        <router-link :class="textWhite" class="opacity-8" :to="{name: 'Dashboard'}">Dashboard</router-link>
      </li>
      <li
        v-for="item in getPages"
        :key="item"
        class="text-sm breadcrumb-item active"
        :class="textWhite ? 'text-white' : 'text-dark'"
        aria-current="page"
      >
        {{ item }}
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "breadcrumbs",
  props: {
    currentPage: {
      required: true,
    },
    textWhite: {
      type: String,
    },
  },
  computed: {
    getPages() {
      return Array.isArray(this.currentPage) ? this.currentPage : [this.currentPage];
    },
  },
};
</script>
