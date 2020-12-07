import modules from './modules'

Vue.use(Router)

//初始化
const router = new Router({
  routes: [...modules] //路由表
});

export default router