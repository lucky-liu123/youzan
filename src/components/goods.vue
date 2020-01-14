<template>
	<div>
		<h1>vuex</h1>
		<hr>
		<h3 v-text='$store.state.count'></h3>
		<button type="button" @click='addClick'>加</button>
		<button type="button" @click='subClick'>减</button>
	</div>
</template>

<script>
	
</script>

<style>
</style>
