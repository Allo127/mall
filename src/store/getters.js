export default {
	infoList(state) {
		if (state.viewKey === 0) {
			state.activeList = state.proList
		} else if (state.viewKey === 1) {
			state.activeList = state.proListByNum
		}
		if (state.viewKey === 2) {
			state.activeList = state.proListByPri
		}
		return state.activeList
	}
}
