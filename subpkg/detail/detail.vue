<template>
	<view>
		<view class="medicine-info-box">
			<!-- 药物名称 -->
			<!-- 药物详细信息 -->
			<!--  -->
			<view>
				<view>
					<image src="https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png"></image>
				</view>
				<view>
					药物名称:降压药
				</view>
			</view>

			<!-- 药品详情底部导航 -->
			<view class="medicine_nav">
				<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
					@buttonClick="buttonClick" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				medicine_info: {},
				options: [{
					icon: 'settings-filled',
					text: '药物管理'
				}],
				buttonGroup: [{
					icon: 'plus-filled',
					text: '加入我的药物',
					backgroundColor: '#d3d4d9',
					color: '#000000'
				}]
			};
			Î
		},
		onLoad(options) {
			const medicine_id = options.medicine_id
			// this.getMedicineDetail(medicine_id)
		},
		methods: {
			// 请求药品详细数据
			// async getMedicineDetail(medicine_id) {
			// 	const { data: res } = await uni.$http.get('', {medicine_id})
			// 	if(res.meta.status !== 200){
			// 		return uni.$showMsg()
			// 	}

			// 	this.medicine_info = res.message
			// }
			onClick(e) {
				if(e.content.text === '药物管理'){
					uni.navigateTo({
						url: '/pages/medicineManage/medicineManage'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.medicine_nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>
