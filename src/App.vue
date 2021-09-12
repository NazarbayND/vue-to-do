<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
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
