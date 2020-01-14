import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import Good from './modules/good.js'
import User from './modules/user.js'

Vue.use(Vuex)


const store = new Vuex.Store({
	modules:{
		Good,
		User
	}
})

export default store