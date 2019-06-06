import Vue from 'vue'
import Router from 'vue-router'
import manage from '../components/manage'
import home from '../components/home'

Vue.use(Router);

// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
// const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');

const routes = [
	// {
	// 	path: '/',
	// 	component: login
	// },
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		// },{
		// 	path: '/addShop',
		// 	component: addShop,
		// 	meta: ['添加数据', '添加商铺'],
		// },{
		// 	path: '/explain',
		// 	component: explain,
		// 	meta: ['说明', '说明'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
