<template>
<div class="test">
	<div style="text-align:center;width:100px;height:100px;background-color:red;display:flex; ">
		<div style="width:50px;height:50px;background-color:green;;margin:auto">
			aaa
		</div>
	</div>

	<div style="width:50px;height:50px;background-color:green;"></div><div style="width:50px;height:50px;background-color:green;"></div>
</div>
</template>

<script>
import LoginCard from '@/components/subcom/login-card.vue'
export default {
	name: 'test',
	created(){
	},
	components:{
		LoginCard:LoginCard
	},
	data() {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style scoped>
.test{
	/*width: 100px;
	height: 100px;*/
}
</style>