<template>
  <div class="card" style="width: 30rem">
    <div class="card-header">Lists</div>
    <p class="text" v-if="isListsEmpty">There is no any list</p>
    <ul class="list-group list-group-flush" v-if="!isListsEmpty">
      <li
        class="list-group-item list-group-item-action"
        :class="{
          active: list.id === activeList.id,
        }"
        v-for="(list, index) in lists"
        :key="index"
        @click="selectList(list)"
      >
        <List :list="list" @delete-list="handleListDelete" />
      </li>
    </ul>
    <Form
      placeholder="type to add new list"
      btn="Add List"
      @on-submit="handleSubmit"
    />
  </div>
</template>

<script>
import Form from "./Form.vue";
import List from "./List.vue";
export default {
  name: "Lists",
  components: {
    Form,
    List,
  },
  methods: {
    handleSubmit(text) {
      this.$store.dispatch("addList", text);
    },
    handleListDelete(id) {
      this.$store.dispatch("deleteList", id);
    },
    selectList(list) {
      this.$store.commit("selectList", list);
    },
  },
  computed: {
    activeList() {
      return this.$store.state.activeList;
    },
    isListsEmpty() {
      return this.$store.getters.isListsEmpty;
    },
    lists() {
      return this.$store.state.lists;
    },
  },
  created() {
    this.$store.dispatch("getLists");
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
