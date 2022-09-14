<template>
	<view>
		<view>


			<view class="medicine-msg" @click="gotoDetail">
				<!-- 左侧 -->
				<view class="medicine-msg-left">
					<image
						src="https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png"
						class="medicine-pic"></image>
				</view>
				<!-- 右侧 -->
				<view class="medicine-msg-right">
					<!-- 药品名称 -->
					<view class="medicine-name">药品名称：降压药</view>
					<!-- 药品简介 -->
					<view class="medicine-info-box">
						<view class="medicine-info">药品简介：这是xxxxxxx</view>
					</view>
				</view>
			</view>
			<view class="medicine-msg" @click="gotoDetail">
				<!-- 左侧 -->
				<view class="medicine-msg-left">
					<image
						src="https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsW80C2VQs0icYG0rK9nd8kqslA3mZIvystzqcic8L4LRtyb4bkNJLWFZnqaR4VlGibjHFyR38k9nmjqaA/0?wx_fmt=png"
						class="medicine-pic"></image>
				</view>
				<!-- 右侧 -->
				<view class="medicine-msg-right">
					<!-- 药品名称 -->
					<view class="medicine-name">药品名称：降压药</view>
					<!-- 药品简介 -->
					<view class="medicine-info-box">
						<view class="medicine-info">药品简介：这是xxxxxxx</view>
					</view>
				</view>
			</view>
		</view>
		<button @click="gotoKnowledge" type="default">点击添加</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			gotoDetail() {
				uni.navigateTo({
					url: '/subpkg/detail/detail'
				})
			},
			gotoKnowledge() {
				uni.switchTab({
					url: '/pages/knowledge/knowledge'
				})
			}
		}
	}
</script>

<style lang="scss">
	.medicine-msg {
		display: flex;
		padding: 10px 5px;
		border-bottom: 1px solid #f0f0f0;

		.medicine-msg-left {
			margin-right: 5px;

			.medicine-pic {
				width: 300rpx;
				height: 300rpx;
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
	}
</style>
