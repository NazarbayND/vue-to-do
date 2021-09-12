<template>
  <div class="list-item">
    <p>{{ list.title }}</p>
    <div class="btns">
      <button class="btn btn-warning">Edit</button>
      <button
        class="btn btn-danger"
        @click.stop="$emit('delete-list', list.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: Object,
  },
};
</script>

<style scoped></style>
