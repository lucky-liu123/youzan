<template>
	<div class="app">
		<router-view name="login" v-if="this.$route.path === '/login'"></router-view>
		
		<el-container class="app-container" v-else>
			<el-aside width="135px">
				<Aside></Aside>
			</el-aside>

			<el-container>
				<el-header height='55px' class='app-header'>
					<Header></Header>
				</el-header>

				<el-main class='app-main'>
					<Main></Main>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import Aside from '@/components/layout/Aside.vue'
	import Header from '@/components/layout/Header.vue'
	import Main from '@/components/layout/Main.vue'
	export default {
		name: 'app',
		components: {
			Aside,
			Header,
			Main
		}
	}
</script>

<style lang="scss">
	html,
	body {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
		background: rgba(247, 248, 250, 1);
	}
	.app {
		height: 100%;

		.app-container {
			height: 100%;
		}

		.app-header {
			padding-left: 0;
			padding-right: 0;
		}

		.app-main {
			padding-bottom: 0;
			padding-right: 0;
		}
	}
</style>
