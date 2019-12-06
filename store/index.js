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
  // 进入网站时需要先拿到的一些数据
  // 公共部分（顶部/底部/侧边）的数据需要在这里先获取，存到store里面，然后全局都能使用
  nuxtServerInit(store, {req, params, route}) {

    console.log(req.url);

    // 获取 最新文章/标签/友链/数量/归档/分类
    const storeList = [
      store.dispatch('recent/list'),
      store.dispatch('links/list'),
      store.dispatch('user/list'),
      store.dispatch('tags/list'),
      store.dispatch('archives/list'),
      store.dispatch('categories/list'),
    ];
    // 评论和留言是多个页面的引用，所以也在初始化时加载数据
    // 获取关于页面的留言
    if (req._parsedUrl.pathname === '/about') {
      storeList.push(
        store.dispatch('evaluate/list')
      )
    }
    // 获取博客的评论
    if (req._parsedUrl.pathname.indexOf('/detail') >= 0) {
      storeList.push(
        store.dispatch('evaluate/list', req._parsedUrl.pathname.split('/')[2])
      )
    }

    return Promise.all(storeList)
  }
}
