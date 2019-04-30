export const state = () => ({
  data: {},
});

export const mutations = {
  getNum(state, dat) {
    state.data = dat;
  },
};

export const actions = {
  async get({commit}) {
    const res = await this.$axios.$get(`/blog/client/blog/num`);
    commit('getNum', res.data)
  }
};
