import App from './App'

//导入网络请求的包
import {
	$http
} from '@escook/request-miniprogram'

uni.$http = $http

//请求的根路径
$http.baseUrl = 'https://api-ugo-web.itheima.net'


$http.beforeRequest = function() {
	uni.showLoading({
		title: '数据加载中...'
	})
}


$http.afterRequest = function() {
	uni.hideLoading()
}

uni.$showMsg = function(title = '请稍后再试', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none'
	})
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
