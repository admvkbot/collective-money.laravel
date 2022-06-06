<template>
  <div
    class="alert text-white font-weight-bold cm-alert-top fade"
    role="alert"
    :class="getClasses(color, dismissible)"
    v-show="alertTopVisible"
  >
    <span class="alert-icon">
      <i :class="getIcon(icon)" />
    </span>
    <span class="alert-text">
      &nbsp;
      <slot />
    </span>
    <button
      v-if="dismissible"
      type="button"
      class="btn-close d-flex justify-content-center align-items-center"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="alertTopVisible = false"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "VsudAlertTop",
  props: {
    alertTopVisible: {
      type: Boolean,
      fefault: false,
    },
    color: {
      type: String,
      default: "success",
    },
    icon: {
      type: String,
      default: "",
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getClasses: (color, dismissible) => {
      let colorValue, dismissibleValue;

      colorValue = color ? `alert-${color}` : null;

      dismissibleValue = dismissible ? "alert-dismissible fade show" : null;

      return `${colorValue} ${dismissibleValue}`;
    },
    getIcon: (icon) => (icon ? icon : null),
  },
};
</script>
<style scoped>
.cm-alert-top {
  z-index: 999999999;
  padding: 16px 40px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 40px;
  width: 80%;
  border-radius: 8px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%),
    0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
}
.hide {
  display: none;
}
</style>