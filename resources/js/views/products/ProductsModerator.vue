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
import ModerateProjectsTable from "@/views/components/tables/ProjectsTableModerator";
import ModerateMessagesTable from "@/views/components/tables/MessagesTableModerator";

export default {
  name: "products-moderator",
  components: {
    ModerateProjectsTable,
    ModerateMessagesTable,
  },
};
</script>
