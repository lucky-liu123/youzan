<template>
	<div class="goods">
		<Searchlist @filter="changeHandle" v-model="formParams"></Searchlist>
		<div>
			<Goodmain v-model='tabIdx'></Goodmain>
		</div>
		
		<div>
			<Goodtable :list="list"></Goodtable>
		</div>

		<div class="pages">
			<el-pagination 
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange" 
			:current-page="currentPage4"
			:page-sizes="[5, 10, 15, 20]" 
			:page-size="5" 
			layout="total, sizes, prev, pager, next, jumper" 
			:total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import { fetchGoodList } from  '@/utils/api.js'
	// import { mapState } from 'vuex'
	import Searchlist from './components/search.vue'
	import Goodmain from './components/Goodmain.vue'
	import Goodtable from './components/Goodtable.vue'
	export default {
		components: {
			Searchlist,
			Goodmain,
			Goodtable
		},
		data: function() {
			return {
				tabIdx: '-1',
				currentPage4: 1,
				currentSize: 5,
				list:[],
				total:0,
				formParams:{
					name:'',
					group_no: 0,
					type_no:0,
					sale_max:0,
					sale_min:0,
					price_max:0,
					price_min:0,
					deduction_no: '0'
				}
			}
		},
		mounted(){
			this.changeList()
		},
		watch:{
			tabIdx(){
				this.changeList()
			}
		},
		
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.currentSize = val
				this.changeList()
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.currentPage4 = val
				this.changeList()
			},
			changeList(){
				const params = {
					status_no : this.tabIdx,
					size:this.currentSize,
					page:this.currentPage4,
					name:this.formParams.name,
					group_no:this.formParams.group_no,
					type_no:this.formParams.type_no,
					sale_max:this.formParams.sale_max,
					sale_min:this.formParams.sale_min,
					price_max:this.formParams.price_max,
					price_min:this.formParams.price_min,
					deduction_no:this.formParams.deduction_no,
				}
				if (params.sale_max === 0) delete params.sale_max
				if (params.price_max === 0) delete params.price_max
				fetchGoodList(params).then(res=>{
					console.log('res',res)
					this.list = res.list
					this.total = res.total
				})
			},
			changeHandle(){
				this.changeList()
			}
			
			
		},
	}
</script>

<style lang="scss">
	
	.goods {
		padding-top: 30px;
	}
	.pages{
		text-align: right;
		margin: 20px 0;
		color: #ddd;
	}
</style>
