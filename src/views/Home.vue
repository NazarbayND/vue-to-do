<template>
  <div class="home">
    <Lists />
    <Tasks />
  </div>
</template>

<script>
import Lists from "../components/Lists.vue";
import Tasks from "../components/Tasks.vue";

export default {
  name: "Home",

  components: {
    Lists,
    Tasks,
  },
};
</script>

<style scoped>
.home {
  padding: 3rem;
  display: flex;
  justify-content: space-evenly;
}
</style>
