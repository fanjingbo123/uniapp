<template>
	<view>
		<view class="search-box">
			<uni-search-bar @input="input" :radius="100"></uni-search-bar>
		</view>

		<view class="sugg-list">
			<view class="sugg-item" v-for="(item, i) in searchResults" :key="i" @click="gotoDetail(item)">
				<view class="medicine-name">{{item.medicine_name}}</view>
				<uni-icons type="arrowright" size="16"></uni-icons>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer: null,
				kw: '',
				//搜索结果列表
				searchResults: []
			};
		},

		methods: {
			input(e) {
				clearTimeout(this.timer)

				this.timer = setTimeout(() => {
					this.kw = e
					console.log(this.kw)
					this.getSearchList()
				}, 700)
			},
			
			async getSearchList() {
				// if (this.kw.length === 0) {
				// 	this.searchResults = []
				// 	return
				// }
				
				// // 在这里获取搜索建议列表
				// const { data: res } = await uni.$http.get('', { query: this.kw })
				// if (res.meta.status !== 200) {
				// 	return uni.$showMsg()
				// }
				// this.searchResults = res.message
				
				this.searchResults = [{
					medicine_id: 1,
					medicine_name: 'xxxxxxxxxxxxxx'
				},{
					medicine_id: 2,
					medicine_name: 'xxxxxxxxxxxxxx'
				},{
					medicine_id: 3,
					medicine_name: 'xxxxxxxxxxxxxx'
				}]
			},
			
			gotoDetail(item) {
				uni.navigateTo({
					url: '/subpkg/detail/detail?medicine_id' + item.medicine_id
				})
			}
		},
	}
</script>

<style lang="scss">
	.search-box {
		position: sticky;
		top: 0;
		z-index: 999;
	}

	.sugg-list {
		padding: 0 5px;
		
		.sugg-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 12px;
			padding: 13px 0;
			border-bottom: 1px solid #efefef;
			
			.medicine-name {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
</style>
