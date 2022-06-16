<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <moderate-projects-table />
      </div>
    </div>
  </div>
</template>

<script>
import ModerateProjectsTable from "@/views/components/tables/ProjectsTableModerator";

export default {
  name: "products-moderator",
  components: {
    ModerateProjectsTable,
  },
};
</script>
