import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    tasks: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post('/api/login', { username, password });
        commit('setUser', response.data.user);
        return response.data.user;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async signup(_, { username, password }) {
      try {
        const response = await axios.post('/api/signup', { username, password });
        return response.data.user;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get('/api/tasks');
        commit('setTasks', response.data);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async addTask(_, { title, description }) {
      try {
        const response = await axios.post('/api/tasks', { title, description });
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  }
});
