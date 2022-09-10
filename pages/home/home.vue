<template>
	<view>
		首页
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
			getSwiperList() {
				uni.$http.get('')
			}
		}
	}
</script>


<style lang="scss">

</style>
