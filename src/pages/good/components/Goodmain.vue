<template>
	<div>
		<div class="good_nav">
			<span :class="{'on':value==='-1'}" @click="$emit('input', '-1')">全部</span>
			<span :class="{'on':value==='1'}" @click="$emit('input', '1')">销售中</span>
			<span :class="{'on':value==='2'}" @click="$emit('input', '2')">已售罄</span>
			<span class="last" :class="{'on':value==='3'}" @click="$emit('input', '3')">仓库中</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			value:{
				type:String,
				require:false,
				default:'1'
			},
		},
		
	}
</script>

<style lang="scss" scoped>
	
	.good_nav{
		margin-top:30px;
		&>span{
			display:inline-block;
			width:100px;
			height: 38px;
			border: 1px solid #ddd;
			border-right: none;
			text-align: center;
			line-height: 40px;
			color: #323233;
			font-size: 14px;
			cursor: pointer;
		}
		.last{
			border-right: 1px solid #ddd;
		}
		&>span.on {
			border-bottom: none;
		}
		
	}
</style>
