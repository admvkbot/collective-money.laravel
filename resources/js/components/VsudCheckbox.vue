<template>
  <div class="form-check">
    <input
      :id="id"
      class="form-check-input"
      type="checkbox"
      :name="name"
      :checked="checked"
      :value="id"
      @change="sendID"
    />
    <label :for="id" class="custom-control-label" :class="$attrs.class">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "VsudCheckbox",
  props: {
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    sendID(w) {
      this.$emit("update:modelValue", w.target.value);
    },
  },
  emits: ['update:modelValue']

};
</script>
