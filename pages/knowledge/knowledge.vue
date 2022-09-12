<template>
	<view>
		<view class="scroll-view-container">
			<!-- 左侧滑动区 -->
			<scroll-view class="left-scroll-view" scroll-y="true" :style="{height: wh + 'px'}">
				<block v-for="(item, i) in cateList" :key="i">
					<view :class="['left-scroll-view-item', i === active ? 'active' : '']" @click="activeChange(i)">{{item.name}}</view>
				</block>
				<!-- <view class="left-scroll-view-item">降压药</view> -->
			</scroll-view>
			<!-- 右侧滑动区 -->
			<scroll-view scroll-y="true" :style="{height: wh + 'px'}">
				<view>
					<view>
						<!-- <image src="https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsWicRIL7WR816Bf9LWV2weNsUuR1ib99pRDxED0B1ZbXgST5wQxLUw3zmB2X0ib2CnXGqryjJanZxWouQ/0?wx_fmt=png"></image> -->
					</view>
					<view>
						<view>xxx</view>
						<view>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</view>
					</view>
				</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
				<view>yyy</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wh: 0,
				cateList: [{
						name: '降压药'
					},
					{
						name: '降糖药'
					},
					{
						name: '降脂药'
					},
					{
						name: '麻醉药'
					},
					{
						name: '抗生素'
					},
					{
						name: '消炎药'
					},
					{
						name: '保健品'
					},
					{
						name: '中药'
					},
					{
						name: '其他药物'
					},
				],
				medicineList: [],
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
					background-color: #C00000;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}
		}
	}
</style>
