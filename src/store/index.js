import { createStore } from "vuex";
import { lists } from "./lists/lists";
import { auth } from "./auth/auth";
export default createStore({
  modules: { lists, auth },
});
