<template>
	<view class="medicine-search-container" @click="searchBox">
		<view class="search-box">
			<uni-icons type='search' size='17'></uni-icons>
			<text class="placeholder">搜索</text>
		</view>
	</view>
</template>

<script>
	// import uniIcons from ""
	export default {
		name: "medicine-search",
		data() {
			return {

			};
		},
		
		methods: {
			searchBox(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.medicine-search-container {
		height: 50px;
		background-color: #e6e6e6;
		display: flex;
		align-items: center;
		padding: 0 10px;

		.search-box {
			height: 36px;
			background-color: #FFFFFF;
			border-radius: 18px;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.placeholder {
				font-size: 15px;
				margin-left: 5px;
			}
		}
	}
</style>
