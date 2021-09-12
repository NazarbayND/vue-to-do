<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group mb-3">
      <input
        class="form-control"
        name="title"
        v-model="text"
        :placeholder="placeholder"
        :disabled="isDisabled"
      />
      <button class="btn btn-primary" :disabled="isDisabled">{{ btn }}</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    placeholder: String,
    btn: String,
    isDisabled: Boolean,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit() {
      if (!this.text) {
        alert("provide some text");
        return;
      }
      this.$emit("on-submit", this.text);
      this.text = "";
    },
  },
};
</script>

<style scoped></style>
