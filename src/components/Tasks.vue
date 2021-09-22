<template>
  <div class="card" style="width: 30rem" v-if="activeList">
    <div class="card-header">Tasks</div>
    <p class="text" v-if="!tasks">There is no tasks</p>
    <ul class="list-group list-group-flush" v-if="tasks">
      <li
        class="list-group-item list-group-item-action"
        :key="task.id"
        v-for="task in tasks"
        @click="taskDone(task.id)"
      >
        <Task :task="task" @delete-task="deleteTask(task.id)" />
      </li>
    </ul>
    <Form btn="Add Task" placeholder="type what to do" @on-submit="onAddTask" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Form from "./Form.vue";
import Task from "./Task.vue";

export default {
  name: "Tasks",
  computed: {
    ...mapGetters({
      tasks: "lists/tasks",
      activeList: "lists/activeList",
    }),
  },

  methods: {
    onAddTask(text) {
      this.$store.dispatch("lists/addTask", text);
    },
    deleteTask(id) {
      this.$store.dispatch("lists/deleteTask", id);
    },
    taskDone(id) {
      this.$store.dispatch("lists/taskDone", id);
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
