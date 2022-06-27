<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <products-table :is_liveSearch="false" top="5"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <products-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <messages-table />
      </div>
    </div>
  </div>
</template>

<script>
import MessagesTable from "@/views/components/tables/MessagesTable";
import ProductsTable from "@/views/components/tables/ProductsTable";

export default {
  name: "tgparser",
  components: {
    MessagesTable,
    ProductsTable,
  },
};
</script>
