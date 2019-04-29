import axios from 'axios'

export const state = () => ({
  evaluate: [],
  code: '',
})

export const mutations = {
  update(state, list) {
    state.evaluate = list;
  },
  updateCode(state, code) {
    state.code = code;
  },
}

export const actions = {
  async getEvaluate({commit}, code) {
    const response = await axios.get(`/blog/manage/comment/evaluate_list?code=${code}`);
    let evaluateList = []
    evaluateList = response.data.data || []
    evaluateList.map(item => {
      if (item.f_id) {
        evaluateList.map(list => {
          if (list.id === item.f_id) {
            !list.children && (list.children = [])
            list.children.push(item)
          }
        })
      }
    })
    let news = []
    evaluateList.map(item => {
      if (!item.f_id) {
        news.push(item)
      }
    });
    commit('update', news)
  }
}
