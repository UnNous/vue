<template>
<div class="home">
	<bar></bar>
	<!-- <router-view/> -->
</div>

</template>

<script>
import bar from '@/components/subcom/bar';
export default {
	name: 'hello',
	components: {
		bar: bar
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
.home{
	width: 100%;
	text-align: center;
	margin: 0 auto;
}
	
</style>