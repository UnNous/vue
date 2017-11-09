<template>
<div class="test">
	<div id="TT" style="position:absolute">
    第1行</br>
    第2行</br>
    第3行</br>
    第4行</br>
    第5行</br>
    </div>
</div>
</template>

<script>
// import xx from ''
export default {
	name: 'test',
	created(){
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
	width: 100px;
	height: 100px;
}
</style>

	

 <script type="text/javascript">
// 	setInterval(function FFF(){
// 		var offTop=document.getElementById("TT").offsetTop;
// 		var styTop=document.getElementById("TT").style;
// 		styTop.position="absolute";
// 		styTop.top=offTop-1+"px";
// 		if(offTop<=0){styTop.top=200+"px"}
// 		console.log("offsetTop:"+offTop);
// 		console.log("styleTop:"+styTop.top);
// 	},5);

 </script>