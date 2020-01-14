<template>
	<div>
		<el-button type="primary" size="small" class="public" @click='goodPublic'>发布商品</el-button>
		
		<div class="search">
			<el-row :gutter="20" class="search_list">
				<el-col :span="3">
					<span class="detail">商品名称 : </span>
				</el-col>
				<el-col :span="5">
					<el-input placeholder="输入商品名称" v-model="value.name"></el-input>
				</el-col>
				<el-col :span="3">
					<span class="detail">商品分组 : </span>
				</el-col>
				<el-col :span="5">
					<el-select v-model="value.group_no" placeholder="请选择">
						<el-option v-for="(item,idx) in groupList" :key="idx" :label="item.label" :value="item.id">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="3">
					<span class="detail">商品类型 : </span>
				</el-col>
				<el-col :span="5">
					<el-select v-model="value.type_no" placeholder="请选择">
						<el-option v-for="(item,idx) in typeList" :key="idx" :label="item.label" :value="item.id">
						</el-option>
					</el-select>
				</el-col>
			</el-row>
			
			<el-row :gutter="20">
				<el-col :span="3">
					<span class="detail">销量 : </span>
				</el-col>
				<el-col :span="2">
					<el-input v-model.number="value.sale_min"></el-input>
				</el-col>
				<el-col :span="1" class="selNum">
					<span class='heng'>-</span>
				</el-col>
				<el-col :span="2">
					<el-input v-model.number="value.sale_max"></el-input>
				</el-col>
				
				<el-col :span="3">
					<span class="detail">价格 : </span>
				</el-col>
				<el-col :span="2">
					<el-input placeholder="0元" v-model="value.price_min"></el-input>
				</el-col>
				<el-col :span="1" class="selNum">
					<span class='heng'>-</span>
				</el-col>
				<el-col :span="2">
					<el-input placeholder="0元" v-model="value.price_max"></el-input>
				</el-col>
				
				<el-col :span="3">
					<span class="detail">库存扣减方式 : </span>
				</el-col>
				<el-col :span="5">
					<el-select placeholder="全部" v-model="value.deduction_no">
						<el-option label="全部" value="0"></el-option>
						<el-option label="付款减库存" value="1"></el-option>
						<el-option label="拍下减库存" value="2"></el-option>
					</el-select>
				</el-col>
			</el-row>
			
			<div class="searchBtn">
				<el-button type="primary" size="small" class="public" @click="handlechange">筛选</el-button>
				<el-button size="small" class="public">导出</el-button>
				<!-- <router-link tag="span" :to="options" class="see">查看已导出的列表</router-link> -->
				<!-- <router-link tag="span" :to="options" class="see">重置筛选条件</router-link> -->
				<a href="#" class="see">查看已导出的列表</a>
				<a href="#" class="see">重置筛选条件</a>
			</div>
			
		</div>
	</div>
</template>

<script>
	import { typeList , groupList} from  "@/utils/map.js"
	
	export default {
		props:{
			value:{
				type:Object,
				require:true
			}
		},
		data() {
			return {
				typeList,
				groupList,
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value1: '',
				value2: ''
			}
		},
		methods:{
			handlechange(){
				this.$emit('filter')
			},
			goodPublic(){
				// console.log('router',this.$router);
				this.$router.push('/public')
			}
			
		}
		
	}
</script>

<style lang="scss" scoped>
	.search {
		background: rgb(242, 243, 245);
		height: 200px;
		text-align: right;
		margin-right: 50px;
		margin-top: 20px;
		padding-top: 30px;
		padding-right: 30px;
		.detail {
			display: inline-block;
			line-height: 40px;
			font-size: 14px;
		}
		.search_list{
			margin-bottom: 30px;
		}
	}
	.selNum{
		text-align: center;
	}
	.heng{
		display: inline-block;
		line-height: 40px;
		font-size: 24px;
	}
	.searchBtn{
		text-align: left;
		margin-left: 130px;
		margin-top: 30px;
		.see{
			color: blue;
			cursor: pointer;
			margin: 0 10px;
			font-size: 14px;
			text-decoration: none;
		}
	}
</style>
