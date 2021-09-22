<template>
  <div id="nav">
    <div class="nav-item" v-if="!user">
      <router-link to="/">LogIn</router-link>
    </div>
    <div class="nav-item" v-if="!user">
      <router-link to="/signup">Signup</router-link>
    </div>
    <div class="nav-item" v-if="user">
      <router-link to="/user">{{ user.username }}</router-link>
    </div>
    <div class="nav-item" v-if="user">
      <router-link to="/home">Home</router-link>
    </div>
    <div class="nav-item" v-if="user">
      <router-link to="/about">About</router-link>
    </div>
    <div class="nav-item" v-if="user">
      <router-link>Logout</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>
<style lang="scss">
.nav-item {
  display: inline-block;
  padding: 1rem;
}
</style>
