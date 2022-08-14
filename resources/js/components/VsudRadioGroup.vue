<template>
  <div>
    <VsudRadio
      v-for="option in options"
      :key="option.id"
      :id="option.id"
      :checked="checkSelected(option)"
      @input="sendID"
    >
      {{ option.name }}
    </VsudRadio>
  </div>
</template>

<script>
import VsudRadio from "./VsudRadio.vue";

export default {
  components: {
    VsudRadio,
  },
  props: {
    options: {
      required: true,
      type: Object,
    },
    selectedItem: {
      type: Number,
      default: null,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    sendID(r) {
      this.$emit("update:modelValue", r.target.value);
    },
    checkSelected(option) {
      //console.log(option, this.selectedItem);
      if (this.selectedItem) {
        if (this.selectedItem === option.id) {
          return true;
        }
      } else {
        return false;
      }
    },
  },
};
</script>