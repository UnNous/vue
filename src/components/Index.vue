<template>
<div class="index">
	<div ref="box" class="box" @mousemove="mouseMove($event,$el)">
		<div ref="moveBox" class="moveBox"  @dblclick="toLogin"></div>
		
	</div>
	<LoginCard :modal="modal" @modalChange="modalChanged"  ></LoginCard>
</div>
</template>

<script>
// import xx from ''
import LoginCard from '@/components/subcom/login-card.vue'
export default {
	name: 'index',
	components:{
		LoginCard:LoginCard
	},
	mounted() {
		this.$refs.box.style.width = this.width + 'px';
		this.$refs.box.style.height = this.height + 'px';
	},
	data() {
		return {
			moveBox:{
				width:0,
				height:0
			},
			modal:false
		}
	},
	methods: {
		mouseMove(event,el){
			this.$refs.moveBox.style.left = event.clientX - 25+ 'px';
			this.$refs.moveBox.style.top = event.clientY - 25+ 'px';
		},
		toLogin(){
			this.modal = true
			// this.$router.push({path: '/login'});
		},
		modalChanged(value){
			this.modal  = value;
		}


		
	}
}
</script>

<style scoped>
.box{
	/*background-color: red*/
	background-image: url('../assets/2.jpg');
	background-repeat:no-repeat; 
	background-size:100% 100%;
}
.moveBox{
	width: 50px;
	height: 50px;
	background-color: green;
	position: relative;
}
</style>