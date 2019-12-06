export const state = () => {
	return {
		contMax: false, // 内容勿扰模式
	}
};

export const mutations = {
	changeContMax(state) {
		state.contMax = !state.contMax
	},
};
