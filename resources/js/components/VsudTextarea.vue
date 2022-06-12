<template>
  <div class="form-group">
    <label :for="id">
      <slot />
    </label>
    <textarea
      :id="id"
      class="form-control"
      :rows="rows"
      :value="value"
      :placeholder="placeholder"
      v-on:blur="this.$emit('textareaValue', $event.target.value)" 
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "VsudTextarea",
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Your text here...",
    },
    rows: {
       type: Number,
       default: 5,
    }
  },
  emits: [
     'textareaValue',
  ],  
};
</script>
