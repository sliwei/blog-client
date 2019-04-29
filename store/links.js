export const state = () => ({
  list: [],
});

export const mutations = {
  change(state, list) {
    state.list = list;
  },
};
