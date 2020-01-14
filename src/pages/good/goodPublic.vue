<template>
	<div class="goodPublic">
		<!-- 商品title -->
		<goodTitle></goodTitle>
		
		<!-- 商品类型 -->
		<div>
			<goodType v-model='typeIdx'></goodType>
		</div>
		
		<!-- 商品基本信息组件 -->
		<div>
			<basicMsg></basicMsg>
		</div>
		
		<!-- 商品价格库存组件 -->
		<div>
			<goodPrice></goodPrice>
		</div>
	</div>
</template>

<script>
	import goodTitle from '@/pages/good/pub-components/title.vue'
	import goodType from '@/pages/good/pub-components/goodType.vue'
	import basicMsg from '@/pages/good/pub-components/basicMsg.vue'
	import goodPrice from '@/pages/good/pub-components/goodprice.vue'
	export default {
		data:function(){
			return{
				typeIdx:'0'
			}
		},
		components:{
			goodTitle,
			goodType,
			basicMsg,
			goodPrice
		}
	}
	
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	.goodPublic{
		padding: 15px;
	}
	.tirps {
		font-size: 14px;
		color: #aaa;
	}
</style>
