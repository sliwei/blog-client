export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {

  // 全局服务初始化
  nuxtServerInit(store, {req, params, route}) {
    store.dispatch('user/get');
    store.dispatch('recent/get');
    store.dispatch('links/get');
  }
}
