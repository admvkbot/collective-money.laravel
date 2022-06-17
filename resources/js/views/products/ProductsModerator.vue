<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <moderate-projects-table />
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12">
        <messages-table-moderator
          title="Coобщения Telegram с тегами WTS и WTB, не привязанные к проектам"
          :withTags="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ModerateProjectsTable from "@/views/components/tables/ProjectsTableModerator";
import MessagesTableModerator from "@/views/components/tables/MessagesTableModerator";

export default {
  name: "products-moderator",
  components: {
    ModerateProjectsTable,
    MessagesTableModerator,
  },
};
</script>
