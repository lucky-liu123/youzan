<template lang="html">
	<div>
		<el-table :data="list" style="width: 100%" :default-sort="{prop: 'list', order: 'descending'}">
			<el-table-column type="selection" width="55">
			</el-table-column>

			<el-table-column prop="name" label="商品名" width="180" align="center">
				<template slot-scope="scope">
					<div class="good_item">
						<img :src="scope.row.src">
						<div v-text="scope.row.name"></div>
					</div>
				</template>
			</el-table-column>

			<el-table-column prop="price" label="价格(元)" sortable width="100">
			</el-table-column>

			<el-table-column prop="visit_num" label="访问量" sortable width="100">
			</el-table-column>

			<el-table-column prop="inventory_num" label="库存" sortable width="100">
			</el-table-column>

			<el-table-column prop="sale_num" label="销量" sortable width="100">
			</el-table-column>
			
			<el-table-column prop="order" label="序号" sortable width="100">
			</el-table-column>
			
			<el-table-column prop="create_time" label="创建时间" sortable width="150" :formatter="timeHandle">
			</el-table-column>
			
			<el-table-column prop="status_no" label="商品状态" width="100" :formatter="goodStatus">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import moment from 'moment'
	
	export default {
		props: {
			list: {
				type: Array,
				require: true
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			timeHandle(row){
				return moment(row.create_time).format('MM-DD HH:mm:ss')
			},
			goodStatus(row){
				if(row.status_no === 1){
					return "销售中"
				}
				if(row.status_no === 2){
					return "已售罄"
				}
				if(row.status_no ===3){
					return "仓库中"
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.good_item {
		text-align: center;

		&>img {
			display: inline-block;
			width: 30px;
			height: 40px;
			cursor: pointer;
		}
	}
</style>
