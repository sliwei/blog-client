export const state = () => ({
  random: ''
})

export const mutations = {
  random(state, type) {
    state.random = type;
  }
}
