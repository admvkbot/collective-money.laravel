<template>
  <div class="form-group">
    <label :for="id">
      <slot />
    </label>
    <textarea
      :id="id"
      class="form-control"
      :class="getClasses(size, success, error)"
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
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
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
    },
    size: {
      type: Number,
      default: null
    },
  },
  emits: ["textareaValue"],
  methods: {
    getClasses: (size, success, error) => {
      let sizeValue, isValidValue;

      sizeValue = size ? `form-control-${size}` : null;

      if (error) {
        isValidValue = "is-invalid";
      } else if (success) {
        isValidValue = "is-valid";
      } else {
        isValidValue = "";
      }

      return `${sizeValue} ${isValidValue}`;
    },
  },
};
</script>
