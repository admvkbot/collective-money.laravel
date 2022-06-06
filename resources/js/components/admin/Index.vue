<template>
  <div class="tabs is-boxed">
    <ul>
      <li :class="{ 'is-active': isActive[0] }">
        <router-link :to="{ name: 'admin.users' }">
          <span class="icon is-small"
            ><i class="fas fa-image" aria-hidden="true"></i
          ></span>
          <span>Users</span>
        </router-link>
      </li>
      <li :class="{ 'is-active': isActive[1] }">
        <router-link :to="{ name: 'admin.settings' }">
          <span class="icon is-small"
            ><i class="fas fa-music" aria-hidden="true"></i
          ></span>
          <span>Settings</span>
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
      isActive: [true, false],
    };
  },
  methods: {
    doNowActive(value) {
      if (value == 0) {
        this.isActive[0] = true;
        this.isActive[1] = false;
      } else if (value == 1) {
        this.isActive[0] = false;
        this.isActive[1] = true;
      }
    },
  },
};
</script>

<style>
</style>