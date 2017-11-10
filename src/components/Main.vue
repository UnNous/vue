<template>
	<div class="hello">
		<Row type="flex" justify="center"  align="middle" style="height:100%">
			<Col :span="24" style="text-align:center;">
				<Course :autoplay="true" :autoplay-speed="3000" :imgList="imgList" ></Course>
			</Col>
			
		</Row>
		<Row type="flex" justify="center" style="height:280px;text-align:center;">
			<Col v-for="(item,index) in imgList" :key="index" :span="Math.floor(20/imgList.length)">
				<Card  :bordered="false">
	                <p slot="title">{{item.name}}</p>
	                <div>
	                	<img :src="item.src" style="height:100%;width:100%;">
	                </div>
	            </Card>
			</Col>
		</Row>
	</div>


</template>

<script>
import Course from '@/components/subcom/Course.vue'

export default {
	name: 'hello',
	components: {
		Course:Course
	},
	data() {
		return {
			imgList:[
				{name:'鼬神很认真',src: require('../assets/1.jpg')},// 在js中使用require来引用资源避免使用字符串
				{name:'鼬神很帅',src: require('../assets/2.jpg')},
				{name:'鼬神很帅',src: require('../assets/2.jpg')},
				{name:'vue-logo',src: require('../assets/4.png')}
			],
		}
	},
	methods: {

	}
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	margin-top: 60px;
	width:100%;
	height: 100%
}
.formStyle{
	width: 280px;height: 100%;
	padding: 20px 0 0;
	margin: auto ;
	display:block;
	background-color: #80808024;
}
</style>