<template>
	<div class="header">
		<div v-if="$route.path ==='/survey'">
			<div class="title">
				<p v-text="userinfo.username"></p>
				<span>试用期</span>
				<span>SVIP</span>
				<span>有赞担保</span>
			</div>

			<div class="login">
				<i class="el-icon-s-custom" @click="loginOut"></i>
				<span v-text="userinfo.username"></span>
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		computed: {
			...mapState('User', ['userinfo'])
		},
		data: function() {
			return {

			}
		},
		methods: {
			loginOut() {
				this.$confirm('你确定要退出吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					localStorage.removeItem('token')
					localStorage.removeItem('isLogin')
					this.$router.replace('/login')
					this.$message({
						type: 'success',
						message: '退出成功!'
					})
				}).catch(() => {
						
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	.header {
		background-color: white;
		width: 100%;
		height: 100%;
		margin-left: 20px;

		.title {
			float: left;
			margin-left: 20px;
			cursor: pointer;

			&>p {
				display: inline-block;
			}

			&>span {
				border: 1px solid #ddd;
				font-size: 12px;
				margin: 0 4px;
				padding: 2px
			}

			&>span:nth-child(2) {
				color: rgb(85, 135, 222);
				border-color: rgb(85, 135, 222);
			}
		}

		.login {
			float: right;
			line-height: 50px;
			margin-right: 30px;
			cursor: pointer;
			color: #c4c4c4;

			&>i {
				margin: 0 10px;
			}
		}
	}
</style>
