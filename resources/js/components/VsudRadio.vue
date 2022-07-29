<template>
  <div class="form-check">
    <input
      :id="id"
      class="form-check-input"
      type="radio"
      name="radio-input"
      :checked="checked"
      :value="id"
      @change="sendID"
    />
    <label class="custom-control-label" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "VsudRadio",
  props: {
    id: {
      type: Number,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
   return {
      modelValue: null,
   }
  },
  methods: {
    sendID(w) {
      this.$emit("update:modelValue", w.target.value);
    },
  },
  emits: ['update:modelValue']
};
</script>
<style scoped>
label {
  cursor: pointer;
}
</style>

