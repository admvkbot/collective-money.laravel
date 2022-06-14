<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table :is_liveSearch="false" top="5"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table />
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
import ProjectsTable from "@/views/components/tables/ProjectsTable";

export default {
  name: "tgparser",
  components: {
    MessagesTable,
    ProjectsTable,
  },
};
</script>
