<template>
  <div>
    <VsudCheckbox
      v-for="option in options"
      :key="option.id"
      :id="option.id"
      :checked="checkSelected(option)"
      @input="sendID"
    >
      {{ option.name }}
    </VsudCheckbox>
  </div>
</template>

<script>
import { computed } from 'vue-demi';
import VsudCheckbox from "./VsudCheckbox.vue";

export default {
  components: {
    VsudCheckbox,
  },
  props: {
    options: {
      required: true,
      type: Object,
    },
    selectedItems: {
      type: Array,
      default: [],
    }

  },
  emits: ['update:modelValue'],
  methods: {
   sendID(r) {
      this.$emit('update:modelValue', r.target.value);
   },
   checkSelected(item) {
      if (this.selectedItems.length > 0) {
         if (this.selectedItems.find((data) => data === item.id)) {
            return true
         }
      }
      return false
   }
  }
};
</script>