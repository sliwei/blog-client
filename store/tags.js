export const state = () => {
  return {
    list: []
  }
}

export const mutations = {
  upTagsList(state, action) {
    state.list = action.data
  }
}

export const actions = {
  async list({ commit }) {
    const res = await this.$axios.$get(`/blog/client/blog/tags`)
    commit('upTagsList', res)
  }
}
