<template>
  <div>
    <VsudRadio
      v-for="option in options"
      :key="option.id"
      :id="option.id"
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
  },
  emits: ['update:modelValue'],
  methods: {
   sendID(r) {
      this.$emit('update:modelValue', r.target.value);
   }
  }
};
</script>