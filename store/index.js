import Vue from 'vue'
import Vuex from 'vuex'

import initState from './initState.js'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: initState,
	mutations,
	actions
})

export default store