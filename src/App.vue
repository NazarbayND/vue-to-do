<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav,
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
.app {
  height: 100vh;
}
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  margin: 0 0.5rem;
}
p {
  margin: 0;
}
form {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.nav-item {
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
