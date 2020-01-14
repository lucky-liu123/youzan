<template>
	<div>
		<div class="loginList">
			<el-form :label-position="labelPosition" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="userinfo.username"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="password"></el-input>
				</el-form-item>
				<el-button type="primary" class="loginButton" @click="loginConfirm">确认登录</el-button>
			</el-form>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions, mapMutations} from 'vuex'
	
	export default {
		computed:{
			...mapState('User',['userinfo']),
		},
		data() {
			return {
				labelPosition: 'top',
				username:'',
				password:'',
			};
		},
		methods:{
			...mapActions('User',['userLogin']),
			...mapMutations('User',['updateUserinfo']),
			loginConfirm(){
				const data = {
					username:this.username,
					password:this.password
				}
				this.userLogin(data).then(res=>{
					this.updateUserinfo(res)
					localStorage.setItem('token',res.token)
					localStorage.setItem('isLogin', 1)
					this.$router.replace('/survey')
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.loginList {
		margin: 0 auto;
		width: 250px;
		margin-top: 100px;
		
	}
</style>
