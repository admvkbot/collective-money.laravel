<template>
  <div class="progress">
    <div
      class="progress-bar"
      :class="getClasses(getColor(percentage), variant)"
      :style="{ width: percentage + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "VsudProgressPlus",
  props: {
    variant: {
      type: String,
      default: "fill",
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      color: "",
    };
  },
  methods: {
    getColor: (percentage) => {
      let color;
      if (percentage < 25) {
        color = "danger";
      } else if (percentage < 50) {
        color = "warning";
      } else if (percentage < 75) {
        color = "success";
      } else {
        color = "info";
      }
      return `${color}`;
    },
    getClasses: (color, variant) => {
      let colorValue;

      if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
      } else {
        colorValue = `bg-${color}`;
      }

      return `${colorValue}`;
    },
  },
};
</script>
