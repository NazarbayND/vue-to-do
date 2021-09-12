import axios from "axios";
import { createStore } from "vuex";

const client = axios.create({
  baseURL: "http://localhost:3004/lists",
  headers: {
    response: "application/json",
  },
});

export default createStore({
  state: {
    activeList: { id: 0, tasks: [] },
    lists: [],
  },
  getters: {
    isListsEmpty(state) {
      return state.lists.length < 1;
    },
    tasks(state) {
      return state.activeList.tasks || [];
    },
    isTasksEmpty(state) {
      return state.activeList.tasks.length < 1;
    },
    isActiveList(state) {
      return state.activeList.id !== 0;
    },
  },
  mutations: {
    setLists(state, payload) {
      state.lists = payload;
    },
    setActiveList(state) {
      state.activeList = state.lists[0] || { id: 0, tasks: [] };
    },
    selectList(state, payload) {
      state.activeList = payload;
    },
    addList(state, payload) {
      state.lists.push(payload);
      if (activeList.id === 0) state.activeList = payload;
    },
    deleteList(state, payload) {
      state.lists = state.lists.filter((l) => l.id !== payload);
      if (state.activeList.id === payload) {
        state.activeList = state.lists[0] || { id: 0, tasks: [] };
      }
    },
    addTask(state, payload) {
      const newTask = {
        id: state.activeList.tasks.length + 1,
        title: payload,
        isDone: false,
      };
      state.activeList.tasks.push(newTask);
    },
    taskDone(state, payload) {
      state.activeList.tasks = state.activeList.tasks.map((t) =>
        t.id === payload ? { ...t, isDone: !t.isDone } : t
      );
    },
    deleteTask(state, payload) {
      state.activeList.tasks = state.activeList.tasks.filter(
        (t) => t.id !== payload
      );
    },
  },
  actions: {
    async getLists({ commit }) {
      try {
        const { data } = await client.get();
        commit("setLists", data);
        commit("setActiveList");
      } catch (error) {}
    },
    async addList({ commit }, payload) {
      try {
        const newList = {
          title: payload,
          tasks: [],
        };
        const { data } = await client.post("/", newList);
        commit("addList", data);
      } catch (error) {}
    },
    async deleteList({ commit }, payload) {
      try {
        const response = await client.delete(`${payload}`);
        commit("deleteList", payload);
      } catch (error) {}
    },
    async saveActiveList({ state }) {
      try {
        const { data } = client.patch(
          `${state.activeList.id}`,
          state.activeList
        );
      } catch (error) {}
    },
    addTask({ commit, dispatch }, payload) {
      commit("addTask", payload);
      dispatch("saveActiveList");
    },
    deleteTask({ commit, dispatch }, payload) {
      commit("deleteTask", payload);
      dispatch("saveActiveList");
    },
    taskDone({ commit, dispatch }, payload) {
      commit("taskDone", payload);
      dispatch("saveActiveList");
    },
  },
  modules: {},
});
