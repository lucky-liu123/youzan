<template lang="html">
<div>
	<h1>vuex</h1>
	<hr>
	<h3 v-text='$store.state.count'></h3>
	<button type="button" @click='addClick'>加</button>
	<button type="button" @click='subClick'>减</button>
	<br>
	<div v-for="(song,idx) in list" :key='idx' v-text="song.name">
		
	</div>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
	export default{
		computed:{
			...mapState(['list'])
		},
		mounted(){
			this.getMusic()
		},
		methods:{
			...mapActions(['getMusic']),
			...mapMutations(['changeList']),
			addClick(){
				this.$store.commit('add',100)
			},
			subClick(){
				this.$store.commit('sub',50)
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
