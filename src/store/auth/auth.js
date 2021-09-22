import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3004/users",
  headers: {
    response: "application/json",
  },
});

const loginServer = async (user) => {
  const { data } = await client.get();
  data.forEach((i) => {
    if (i.username === user.username && i.password === user.password) return i;
  });
  return null;
};

export const auth = {
  namespaced: true,
  state: {
    user: null,
    error: null,
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const response = await loginServer(payload);
      if (!response) commit("setError", "Username or Password is incorrect");
      else commit("serUser", response);
    },
    async logout({ commit }) {
      commit("setUser", null);
    },
    async signup({ commit }, payload) {
      const { username, password, email } = payload;
      const newUser = {
        username,
        email,
        password,
      };
      const { data } = await client.post("/", newUser);
      commit("setUser", data);
    },
  },
};
