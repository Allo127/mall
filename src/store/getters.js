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
	},
  // 订单界面当前的订单
  orderList(state) {
  	if (state.orderViewKey === 0) {
  		state.userOderListNow = state.userOderList
  	}
    if (state.orderViewKey === 1) {
  		state.userOderListNow = state.userOderList.filter(x => x.pay_status === 1)
  	}
  	if (state.orderViewKey === 2) {
  		state.userOderListNow = state.userOderList.filter(x => x.pay_status === 2)
  	}
    if (state.orderViewKey === 3) {
    	state.userOderListNow = state.userOderList.filter(x => x.pay_status === 3)
    }
    if (state.orderViewKey === 4) {
    	state.userOderListNow = state.userOderList.filter(x => x.pay_status === 4)
    }
    if (state.orderViewKey === 5) {
    	state.userOderListNow = state.userOderList.filter(x => x.pay_status === 5)
    }
  	return state.userOderListNow
  }
}
