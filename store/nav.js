export const state = () => ({
  menu: {
    tocArray: [],
    tocHtml: '',
  },
});

export const mutations = {
  setMenu(state, menu) {
    state.menu = menu;
  },
};
