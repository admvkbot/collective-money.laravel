<template>
  <div class="section">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut aperiam
    repellat ex quod facilis vel, magnam rerum nulla nam accusamus. Nihil omnis
    fuga totam nulla reprehenderit sequi impedit ea magni minima provident dolor
    ut aut, consequatur delectus vero aperiam at doloribus, repudiandae,
    asperiores nisi. Pariatur explicabo hic natus consectetur mollitia, sit,
    labore libero voluptas exercitationem dolores, illum dignissimos alias.
  </div>
</template>

<script>
export default {
  props: [],
  emits: ["activeTab"],
  setup(props, { emit }) {
    const setIsActive = (activeTab) => {
      emit("activeTab", activeTab);
    };

    const activeTab = 0;
    setIsActive(activeTab);
  },

  name: "FirstTab",
};
</script>

<style>
</style>