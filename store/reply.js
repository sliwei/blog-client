export const state = () => ({
  reply: {}
})

export const mutations = {
  change(state, user) {
    state.reply = user
  }
}
