import Vue from 'vue'
import VueRouter from 'vue-router'

//注册
Vue.use(VueRouter)

//导入
const Shop = ()=>import('@/pages/shop/Shop.vue')
const Good = ()=>import('@/pages/good/Good.vue')
const Home = ()=>import('@/pages/home/Home.vue')
const Login = ()=>import('@/pages/login/login.vue')
const goodPublic = ()=>import('@/pages/good/goodPublic.vue')


const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path:'/',
			component:Home
		},
		{
			path:'/shop',
			component:Shop
		},
		{
			path:'/good',
			component:Good
		},
		{
			path:'/survey',
			component:Home
		},
		{
			path:'/login',
			components:{
				login:Login
			}
		},
		{
			path:'/public',
			component:goodPublic
		}
	]
})

// 全局路由守卫
router.beforeEach((to, from, next)=> {
  const isLogin = localStorage.getItem('isLogin')
  // console.log('isLogin', isLogin)

  if (to.path === '/login') {
    next()
  } else {
    if (isLogin == 1) {
      next()
    } else {
      next('/login')
    }
  }
})



//抛出
export default router
