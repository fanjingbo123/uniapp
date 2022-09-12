<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsWicRIL7WR816Bf9LWV2weNsUuR1ib99pRDxED0B1ZbXgST5wQxLUw3zmB2X0ib2CnXGqryjJanZxWouQ/0?wx_fmt=png">
					</image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsWicRIL7WR816Bf9LWV2weNsUuR1ib99pRDxED0B1ZbXgST5wQxLUw3zmB2X0ib2CnXGqryjJanZxWouQ/0?wx_fmt=png">
					</image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://mmbiz.qpic.cn/mmbiz_png/J9oTXkdKsWicRIL7WR816Bf9LWV2weNsUuR1ib99pRDxED0B1ZbXgST5wQxLUw3zmB2X0ib2CnXGqryjJanZxWouQ/0?wx_fmt=png">
					</image>
				</view>
			</swiper-item>
		</swiper>


		<view>
			用药提醒小程序
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				swiperList: []
			};
		},
		onLoad() {
			this.getSwiperList()
		},
		methods: {
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get('/api/public/v1/home/swiperdata')

				console.log(res)

				// if (res.meta.status !== 200) {
				// 	uni.$showMsg()
				// }

				console.log(res.meta.status)
				console.log(res.message)
				this.swiperList = res.message
			}
		}
	}
</script>


<style lang="scss">
	swiper {
		height: 330rpx;

		.swiper-item,
		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
