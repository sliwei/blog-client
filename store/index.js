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

    console.log(req.url);

    const storeList = [
      store.dispatch('recent/list'),
      store.dispatch('links/list'),
      store.dispatch('user/list'),
      store.dispatch('tags/list')
    ];
    if (req._parsedUrl.pathname === '/about') {
      storeList.push(
        store.dispatch('evaluate/list')
      )
    }
    if (req._parsedUrl.pathname.indexOf('/detail') >= 0) {
      storeList.push(
        store.dispatch('evaluate/list', req._parsedUrl.pathname.split('/')[2])
      )
    }

    return Promise.all(storeList)
  }
}
