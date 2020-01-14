<template>
	<div class="content">
			<div class="aside">
				<div class="logo">
					<i class="fa fa-thumbs-up"></i>
				</div>
				<div v-for="(item,idx) in navs" :key='idx'>
					<router-link tag="span" :to="item.path" active-class="nav_on">
						<div class="nav">
							<i class="fa" :class="item.icon"></i>
							<span v-text="item.text"></span>
						</div>
					</router-link>
				</div>
			</div>
		
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				navs: [{
						id:'0',
						path: '/survey',
						text: '概况',
						icon: 'fa-book'
					},
					{
						id:'1',
						path: '/shop',
						text: '店铺',
						icon: 'fa-camera-retro'
					},
					{
						id:'2',
						path: '/good',
						text: '商品',
						icon: 'fa-home'
					},
					{
						id:'3',
						path: '/order',
						text: '订单',
						icon: 'fa-book'
					},
					{
						id:'4',
						path: '/user',
						text: '客户',
						icon: 'fa-user'
					},
					{
						id:'5',
						path: '/number',
						text: '数据',
						icon: 'fa-signal'
					},
					{
						id:'6',
						path: '/money',
						text: '资产',
						icon: 'fa-heart'
					},
				]
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100%;
	}
	
	.aside {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 10px;
		color: rgb(200,203,204);
		background: rgb(68, 68, 68);
		.logo {
			width: 32px;
			background: white;
			height: 32px;
			border-radius: 50%;
			color: red;
			text-align: center;
			line-height: 32px;
			margin: 0 auto;
		}
		.nav {
			padding-top: 10px;
			line-height: 50px;
			text-align: center;
			font-size: 14px;
			cursor: pointer;
			>span{
				padding-left: 15px;
			}
		}
		.nav:hover{
			background: rgba(102, 102, 102, 1);
			color: white;
		}
		.nav_on .nav {
			background: white;
			color: black;
		}
	}
	
</style>
