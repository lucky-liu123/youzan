<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="店铺主页" name="first">
				<Shopmain></Shopmain>
			</el-tab-pane>
			<el-tab-pane label="店铺导航" name="second">
				<Shopnav></Shopnav>
			</el-tab-pane>
			<el-tab-pane label="个人中心" name="third">
				<Personal></Personal>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	const Shopmain =()=>import('./components/shopmain.vue')
	const Shopnav =()=>import('./components/shopnav.vue')
	const Personal =()=>import('./components/personal.vue')
	
	export default {
		data() {
			return {
				activeName: 'first'
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		components:{
			Shopmain,
			Shopnav,
			Personal
		}
	}
</script>

<style>
</style>
