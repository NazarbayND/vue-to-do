<template>
  <div class="card" style="width: 30rem">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          v-model="username"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          id="exampleInputPassword1"
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
    password: "",
  }),
  methods: {
    async onSubmit() {
      await this.$store.dispatch("auth/login", {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/home");
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
