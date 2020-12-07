import initState from './initState.js'

const actions = {
  login({
    commit
  }, info) {
    const userInfo = {
      account: info.account,
      role: info.role,
      id: info.id,
      type: info.type
    }

  },
  logout({
    commit,
    state
  }) {
    //退出登录
    const userInfo = {
      account: state.userInfo.account,
      type: state.userInfo.type
    }

    Object.assign(state, initState())
    uni.clearStorageSync()
    commit('SET_USER_INFO', userInfo)
  }
}

export default actions
