<template>
  <div class="column">
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
import { computed } from "vue-demi";
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
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selected: [],
      ifFirst: true,
    };
  },
  methods: {
    arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value;
      });
    },
    sendID(event) {
      const r = parseInt(event.target.value);
      if (this.ifFirst === true) {
        this.selected = this.selectedItems;
        this.ifFirst = false;
      }
      if (!this.selected.find((data) => data === r)) this.selected.push(r);
      else this.selected = this.arrayRemove(this.selected, r);
      this.$emit("update:modelValue", this.selected);
    },
    checkSelected(item) {
      if (this.selectedItems.length > 0) {
        if (this.selectedItems.find((data) => data === item.id)) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>
<style scoped>
.column {
  -webkit-column-width: 150px;
  -moz-column-width: 150px;
  column-width: 150px;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 30px;
  -moz-column-gap: 30px;
  column-gap: 30px;
}
</style>