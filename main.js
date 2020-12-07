import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'
import request from 'common/request.js'
//把vuex定义为全局组件
Vue.prototype.$store = store
Vue.prototype.$request = request

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
