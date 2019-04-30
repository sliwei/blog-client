export const state = () => ({
  list: [],
});

export const mutations = {
  getLinksList(state, list) {
    state.list = list;
  },
};

export const actions = {
  async get({commit}) {
    const res = await this.$axios.$get(`/blog/client/blog/friend_list`);
    commit('getLinksList', res.data)
  }
};
