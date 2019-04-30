import axios from 'axios'

export const state = () => ({
  list: [],
});

export const mutations = {
  getRecentList(state, list) {
    state.list = list;
  },
};

export const actions = {
  async get({commit}) {
    const res = await this.$axios.$get(`/blog/client/blog/recent`);
    commit('getRecentList', res.data)
  }
};
