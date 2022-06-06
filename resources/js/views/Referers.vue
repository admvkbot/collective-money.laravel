<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <referers-table 
            :rmenu="false"
            class="pb-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReferersTable from "./components/ReferersTable";

export default {
  name: "referers",
  components: {
    ReferersTable,
  },
};
</script>
