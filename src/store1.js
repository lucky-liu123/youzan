import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const store = new Vuex.Store({
// 	state: {
// 		count: 0,
// 		list:[]
// 	},
// 	mutations: {
// 		add(state, payload) {
// 			console.log('store mutations add', payload)
// 			state.count += payload
// 		},
// 		sub(state,payload){
// 			state.count -= payload
// 		},
// 		changeList(state,payload){
// 			state.list = payload
// 		}
// 	},
// 	actions:{
// 		getMusic(store){
// 			var url = 'http://localhost:8080/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=61204160201852987&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
			
// 			axios.get(url).then(res=>{
// 				console.log('vuex -------周杰伦的音乐列表',res)
// 				store.commit('changeList',res.data.data.song.list)
// 			})
// 		}
// 	}
// })

// export default store