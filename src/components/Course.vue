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
        :heigth="100"
        >
        <CarouselItem v-for="item in imgList">
            <div class="demo-carousel">
            	<img class="imgStyle carousel" :src="item.src">
            </div>
        </CarouselItem>
       <CarouselItem>
             <div class="demo-carousel">
            	<img class="imgStyle" src="../assets/2.jpg">
            </div>
        </CarouselItem>
         <!-- <CarouselItem>
             <div class="demo-carousel">
            	<img class="imgStyle" src="../assets/2.jpg">
            </div>
        </CarouselItem>
        <CarouselItem>
             <div class="demo-carousel">
            	<img class="imgStyle" src="../assets/4.png">
            </div>
        </CarouselItem> -->
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