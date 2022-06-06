<template>
  <div class="tabs is-boxed">
    <ul>
      <li :class="{ 'is-active': isActiveFirst }">
        <router-link :to="{ name: 'user.personal.firstTab' }">
          <span class="icon is-small"
            ><i class="fas fa-image" aria-hidden="true"></i
          ></span>
          <span>Pictures</span>
        </router-link>
      </li>
      <li :class="{ 'is-active': isActiveSecond }">
        <router-link :to="{ name: 'user.personal.secondTab' }">
          <span class="icon is-small"
            ><i class="fas fa-music" aria-hidden="true"></i
          ></span>
          <span>Music</span>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="my-container">
    <router-view @activeTab="doNowActive" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveFirst: true,
      isActiveSecond: false,
    };
  },
  methods: {
    doNowActive(value) {
      if (value == 0) {
        this.isActiveFirst = true;
        this.isActiveSecond = false;
      } else if (value == 1) {
        this.isActiveFirst = false;
        this.isActiveSecond = true;
      }
    },
  },
};
</script>

<style>
</style>