<template>
  <div>
    <vue-good-table :columns="columnsData" :rows="rows" />
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";

export default {
  name: "GoodTable",
  components: {
    VueGoodTable,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      columnsData: [],
    };
  },
  created() {
    rows = createColumns(this.data);
  },
  methods: {
    createRows(columnData) {
      //const dataLength = this.columns.length;
      let columns = [];
      i = 0;
      columnData.forEach((itemColumn) => {
        const column = {};
        j = 0;
        for (const [key, value] of Object.entries(this.data[0])) {
          if (i === j) {
            console.log(`${key}: ${value}`);          
            column
          }
          j += 1;
        }
        i += 1
      });

      return columns;
    },
  },
};
</script>
