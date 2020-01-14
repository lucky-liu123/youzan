import {fetchLogin} from '@/utils/api'
const userStore = {
	namespaced: true,
	state:{
		userinfo:{
			username:'1234'
		}
	},
	mutations:{
		updateUserinfo(state,payload){
			state.userinfo = payload
		}
	},
	actions:{
		userLogin(data){
			return fetchLogin(data)
		}
	}
}

export default userStore