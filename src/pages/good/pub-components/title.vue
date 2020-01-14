<template>
	<div class="goodPublic">
		<el-row>
			<el-col :span="12">
				<span class="editMsg">1. 编辑基本信息</span>
			</el-col>
			<el-col :span="12">
				<span class="editMsg editMsg2">2. 编辑商品详情</span>
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.goodPublic {
		.editMsg {
			display: inline-block;
			height: 44px;
			width: 95%;
			background: #3388ff;
			color: white;
			line-height: 44px;
			text-align: center;
		}
		// .editMsg:after {
		// 	content: " ";
		// 	display: block;
		// 	width: 0;
		// 	height: 0;
		// 	border-top: 22px solid transparent;
		// 	border-bottom: 22px solid transparent;
		// 	border-left: 12px solid #f8f8f8;
		// 	position: absolute;
		// 	top: 50%;
		// 	margin-top: -22px;
		// 	right: -12px;
		// }
		.editMsg2 {
			background: white;
			color: #666;
		}
	
	}
</style>
