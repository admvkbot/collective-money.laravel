<template>
  <div class="form-check form-switch">
    <input
      :id="id"
      class="form-check-input"
      :class="$attrs.class"
      type="checkbox"
      :name="name"
      :checked="checked"
    />
  </div>
</template>

<script>
export default {
  name: "VsudSwitchBase",
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.form-check-input {
   float: none !important
}
</style>