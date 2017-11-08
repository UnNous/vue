<template>
<div class="carousel">
	<Carousel
        v-model="selectedCourse"
        :autoplay="autoplay"
        :autoplay-speed="autoplaySpeed"
        :dots="dots"
        :radius-dot="radiusDot"
        :trigger="trigger"
        :arrow="arrow"
        >
        <CarouselItem v-for="(item,index) in imgList" :key="index">
            <div class="demo-carousel">
            	<img class="imgStyle carousel" :src="item.src">
            </div>
        </CarouselItem>
    </Carousel>
</div>
</template>

<script>
// 引入文件位置
// import xx from ''
export default {
	name: 'carousel',
	props:['autoplay', 'autoplaySpeed','imgList'],
	created() {
		//
	},
	data() {
		return {
			selectedCourse:0,
			dots: 'inside',
	        radiusDot: false,
	        trigger: 'click',
	        arrow: 'hover',
	        loop: true
		}
	},
	computed: {
	
	},
	methods: {
		
	}
	
}
</script>

<style scoped>
.demo-carousel{

}
.imgStyle{
	/*height: 300px;
	width: 300px;*/
}
</style>