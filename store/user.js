export const state = () => {
  return {
    num: {}
  }
};

export const mutations = {
  upUserNum(state, action) {
    state.num = action.data
  },
};

export const actions = {
  async list({commit}) {
    const res = await this.$axios.$get(`/blog/client/blog/num`);
    commit('upUserNum', res)
  }
};
