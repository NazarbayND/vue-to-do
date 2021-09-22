<template>
  <div class="card" style="width: 30rem">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    onSubmit() {
      const { username, password, email } = this;
      this.$store.dispatch("auth/signup", {
        username,
        email,
        password,
      });
    },
  },
};
</script>
<style lang="scss">
.card {
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
}
</style>
