<template>
  <div class="section">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod ratione
    excepturi velit expedita ullam hic quos id nam, doloribus libero, voluptatum
    officia, ipsa iure totam repellat vero voluptate. Dignissimos fugiat iusto
    consequuntur alias quis autem tempora minima esse modi eum vero animi ea ad
    harum voluptatibus repellendus, fuga ex! Porro tempora molestiae nemo non
    sit quo atque quod nobis praesentium rerum eaque sapiente exercitationem,
    quia dolore error sint quos voluptates tenetur beatae eveniet aut velit.
    Fugiat unde distinctio beatae dolorum nesciunt, ullam, enim fuga iure,
    numquam quaerat est nihil.
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

    const activeTab = 1;
    setIsActive(activeTab);
  },

  name: "SecondTab",
};
</script>

<style>
</style>