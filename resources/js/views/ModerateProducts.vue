<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <moderate-projects-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <moderate-messages-table />
      </div>
    </div>
  </div>
</template>

<script>
import ModerateProjectsTable from "./components/ModerateProjectsTable";
import ModerateMessagesTable from "./components/ModerateMessagesTable";

export default {
  name: "moderate-products",
  components: {
    ModerateProjectsTable,
    ModerateMessagesTable,
  },
};
</script>
