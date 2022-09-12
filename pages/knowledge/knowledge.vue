<template>
	<view>
		<view class="scroll-view-container">
			<!-- 左侧滑动区 -->
			<scroll-view class="left-scroll-view" scroll-y="true" :style="{height: wh + 'px'}">
				<block v-for="(item, i) in cateList" :key="i">
					<view :class="['left-scroll-view-item', i === active ? 'active' : '']" @click="activeChange(i)">
						{{item.cate}}
					</view>
				</block>
				<!-- <view class="left-scroll-view-item">降压药</view> -->
			</scroll-view>
			<!-- 右侧滑动区 -->
			<scroll-view scroll-y="true" :style="{height: wh + 'px'}">
				<view v-for="(item, j) in medicineList" :key="j" @click="gotoDetail(item)">
					<view class="medicine-msg">
						<!-- 左侧 -->
						<view class="medicine-msg-left">
							<image :src="item.medicine_url" class="medicine-pic"></image>
						</view>
						<!-- 右侧 -->
						<view class="medicine-msg-right">
							<!-- 药品名称 -->
							<view class="medicine-name">药品名称：{{item.medicine_name}}</view>
							<!-- 药品简介 -->
							<view class="medicine-info-box">
								<view class="medicine-info">药品简介：{{item.medicine_msg}}</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				page: 1,
				pageSize: 10,
				total: 0,
				wh: 0,
				medicineList: [],
				cateList: [{
						cate: '降压药',
						List: [{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						},{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降压药'
						}]
					},
					{
						cate: '降糖药',
						List: [{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降糖药'
						}, {
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降糖药'
						}, {
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降糖药'
						}]
					},
					{
						cate: '降脂药',
						List: [{
							medicine_url: 'https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png',
							medicine_name: '',
							medicine_msg: '降脂药'
						}]
					},
					{
						cate: '麻醉药'
					},
					{
						cate: '抗生素'
					},
					{
						cate: '消炎药'
					},
					{
						cate: '保健品'
					},
					{
						cate: '中药'
					},
					{
						cate: '其他药物'
					},
				],
				active: 0
			};
		},
		onLoad() {
			const sysInfo = uni.getSystemInfoSync()
			// console.log(sysInfo)
			this.wh = sysInfo.windowHeight
		},
		methods: {
			activeChange(i) {
				this.active = i
				//切换分类
				this.medicineList = this.cateList[i].List
			},
				
			gotoDetail(item) {
				uni.navigateTo({
					url:'/subpkg/detail/detail?item=' +item
				})
			}
		}
	}
</script>

<style lang="scss">
	.scroll-view-container {
		display: flex;
	}

	.left-scroll-view {
		width: 120px;

		.left-scroll-view-item {
			background-color: #F7F7F7;
			line-height: 60px;
			text-align: center;
			font-size: 36rpx;

			&.active {
				background-color: #FFFFFF;
				position: relative;

				&::before {
					content: ' ';
					display: block;
					width: 3px;
					height: 30px;
					background-color: #c17113;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}
		}
	}

	.medicine-msg {
		display: flex;
		padding: 10px 5px;
		border-bottom: 1px solid #f0f0f0;
		
		.medicine-msg-left {
			margin-right: 5px;
			.medicine-pic {
				width: 200rpx;
				height: 200rpx;
				display: block;
			}
		}
		.medicine-msg-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			.medicine-name {
				font-size: 16px;
				line-height: 50%;
			}
			
			.medicine-info-box {
				.medicine-info {
					font-size: 13px;
				}
			}
		}
		// display: flex;
		// height: 50rpx;
		
		// .medicine_img {
		// 	width: 25rpx;
		// 	height: 80%;
		// }
	}
</style>
