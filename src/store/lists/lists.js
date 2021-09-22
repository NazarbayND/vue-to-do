import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3004/lists",
  headers: {
    response: "application/json",
  },
});

export const lists = {
  namespaced: true,
  state: {
    activeList: null,
    lists: null,
    error: null,
  },
  getters: {
    activeList: (state) => state.activeList,
    lists: (state) => state.lists,
    tasks: (state) => state.activeList.tasks || null,
  },
  mutations: {
    setLists(state, payload) {
      state.lists = payload;
    },
    setActiveList(state) {
      state.activeList = state.lists[0];
    },
    selectList(state, payload) {
      state.activeList = payload;
    },
    addList(state, payload) {
      if (!state.activeList) state.activeList = payload;
      state.lists.push(payload);
    },
    deleteList(state, payload) {
      state.lists = state.lists.filter((l) => l.id !== payload);
      if (state.activeList.id === payload) {
        state.activeList = state.lists[0];
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
};
