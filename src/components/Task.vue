<template>
  <div class="list-item">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" :checked="task.isDone" />
      <label> {{ task.title }}</label>
    </div>
    <div class="btns">
      <button class="btn btn-danger" @click.stop="$emit('delete-task')">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>

<style scoped></style>
