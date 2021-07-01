import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

export const storeConfigs = {
  state: {
    user: {
      repos: [],
    },
  },
  mutations: {
    getUser: async (state, name) => {
      try {
        const user = await (await api.get(`users/${name}`)).data;
        const repos = await (await api.get(`users/${name}/repos`)).data;

        state.user = {
          ...user,
          repos,
        };
      } catch {
        state.user = {
          repos: [],
        };
        alert("User not found");
      }
    },
  },
};

const store = new Vuex.Store(storeConfigs);

export default store;
