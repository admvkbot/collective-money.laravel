<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <moderate-projects-table />
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12">
        <messages-table />
      </div>
    </div>
  </div>
</template>

<script>
import ModerateProjectsTable from "@/views/components/tables/ProjectsTableModerator";
import MessagesTable from "@/views/components/tables/MessagesTable";

export default {
  name: "products-moderator",
  components: {
    ModerateProjectsTable,
    MessagesTable
  },
};
</script>
