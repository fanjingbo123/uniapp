// 1. 导入 Vue 和 Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import moduleMedicineManage from '@/store/medicineManage.js'

// 2. 将 Vuex 安装为 Vue 的插件
Vue.use(Vuex)

// 3. 创建 Store 的实例对象
const store = new Vuex.Store({
	// TODO：挂载 store 模块
	modules: {
		'm_medicineManage': moduleMedicineManage
	},
})

// 4. 向外共享 Store 的实例对象
export default store
