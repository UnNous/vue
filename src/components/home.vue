<template>
<div class="home">
	<Row>
		<Col :xs="{ span: 24, offset: 0 }"  :lg="{ span: 8, offset: 12 }">
			
		</Col>
	</Row>
	<bar></bar>
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