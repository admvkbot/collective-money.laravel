<template>
  <div class="py-4 container-fluid">
    <div class="row pt-3">
      <div class="col-12">
        <scam-messages-table
          title="Новые сoобщения Telegram о scam"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ScamMessagesTable from "@/views/components/tables/ScamMessagesTable";

export default {
  name: "scam-moderator",
  components: {
    ScamMessagesTable,
  },
};
</script>
