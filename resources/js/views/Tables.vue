<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
  </div>
</template>

<script>
import AccountsTable from "./components/AccountsTable";
import ProjectsTable from "./components/ProjectsTable";

export default {
  name: "tables",
  components: {
    AccountsTable,
    ProjectsTable,
  },
};
</script>
