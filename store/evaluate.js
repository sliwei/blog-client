export const state = () => {
  return {
    list: [],
    code: '',
  }
};

export const mutations = {
  upEvaluateList(state, action) {
    try {
      let evaluateList = [];
      evaluateList = action.data || [];
      evaluateList.map(item => {
        if (item.f_id) {
          evaluateList.map(list => {
            if (list.id === item.f_id) {
              !list.children && (list.children = []);
              list.children.push(item)
            }
          })
        }
      });
      let list = [];
      evaluateList.map(item => {
        if (!item.f_id) {
          list.push(item)
        }
      });
      state.list = list;
    } catch (e) {
      
    }
  },
  updateCode(state, code) {
    state.code = code;
  },
};

export const actions = {
  async list({commit}, code) {
    const res = await this.$axios.$get(`/blog/manage/comment/evaluate_list?code=${code || ''}`);
    commit('upEvaluateList', res)
  }
};
