export const state = () => {
	return {
		contMax: false, // 内容勿扰模式 暂存change revert
	}
};

export const mutations = {
	changeContMax(state) {
		state.contMax = !state.contMax
	},
};
