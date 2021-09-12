<template>
  <div class="card" style="width: 30rem">
    <div class="card-header">Tasks</div>
    <p class="text" v-if="isTasksEmpty && isActiveList">There is no tasks</p>
    <p class="text" v-if="!isActiveList">
      Please select a list to add tasks
    </p>

    <ul class="list-group list-group-flush" v-if="!isTasksEmpty">
      <li
        class="list-group-item list-group-item-action"
        :key="task.id"
        v-for="task in tasks"
        @click="taskDone(task.id)"
      >
        <Task :task="task" @delete-task="deleteTask(task.id)" />
      </li>
    </ul>
    <Form
      btn="Add Task"
      placeholder="type what to do"
      @on-submit="onAddTask"
      :isDisabled="!isActiveList"
    />
  </div>
</template>

<script>
import Form from "./Form.vue";
import Task from "./Task.vue";

export default {
  name: "Tasks",
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
    isTasksEmpty() {
      return this.$store.getters.isTasksEmpty;
    },
    isActiveList() {
      return this.$store.getters.isActiveList;
    },
  },
  methods: {
    onAddTask(text) {
      this.$store.dispatch("addTask", text);
    },
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
    taskDone(id) {
      this.$store.dispatch("taskDone", id);
    },
  },

  components: {
    Form,
    Task,
  },
};
</script>

<style scoped>
.text {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>
