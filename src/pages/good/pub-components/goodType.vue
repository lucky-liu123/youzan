<template>
	<div class="clear">
		<p class="typetitle">商品类型</p>
		<div v-for="(item,idx) in list" :key='idx'>
			<div class="goodType" @click="blue(item.id)" :class="{'on': value==item.id}">
				<div v-text="item.type"></div>
				<div v-text="item.saletype"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
				require: false,
				default: '0'
			}
		},
		data: function() {
			return {
				list: [{
						type: '实物商品',
						saletype: '（物流发货）',
						id: '0',
					},
					{
						type: '虚拟商品',
						saletype: '（无需物流）',
						id: '1',
					},
					{
						type: '电子卡券',
						saletype: '（无需物流）',
						id: '2',
					},
					{
						type: '酒店商品',
						saletype: '（无需物流）',
						id: '3',
					},
					{
						type: '蛋糕烘焙',
						saletype: '（同城送或自提）',
						id: '4',
					},
				]
			}
		},
		methods: {
			blue(idx) {
				this.$emit('input', idx)
			}
		}

	}
</script>

<style lang="scss" scoped>
	.clear{
		overflow: hidden;
		margin-bottom: 30px;
	}
	.typetitle{
		margin: 20px auto;
	}
	.goodType {
		float: left;
		width: 120px;
		height: 50px;
		border: 1px solid #ddd;
		text-align: center;
		font-size: 12px;
		color: #999;
		box-sizing: border-box;
		margin: 0 5px;
		padding-top: 5px;
		cursor: pointer;
	}
	.on {
		border: 1px solid #38f;
		color: #38f;
	}

	
</style>
