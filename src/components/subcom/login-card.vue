<template>
<div class="" style="text-align:center">
	<Form ref="loginForm" :model="loginForm" :rules="ruleInline" >
		<Modal v-model="modalFlag" class-name="cardStyle" :width="width">
			
			<div slot="header" class="HFStyle" style='text-align:center;' :style="'height:'+height">
				<FormItem>
					<Avatar icon="person" size="large" :src="avatar"/>
				</FormItem>
			</div>
			<div>
				<div style='text-align:center'>
					<FormItem prop="username">
						<Input type="text" v-model="loginForm.username" @on-blur="getAvator" placeholder="Username">
							<Icon type="ios-person-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem prop="psw">
						<Input type="password" v-model="loginForm.psw" @keyup.enter="handleSubmit('loginForm')" placeholder="Password">
							<Icon type="ios-locked-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
				</div>
			</div>
			<div slot="footer" class="HFStyle" style='' :style="'height:'+height">
				<FormItem>
					<Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
				</FormItem>
			</div>
				
			
		</Modal>
	</Form>
</div>
</template>

<script>
// import xx from ''
export default {
	name: '',
	props: {
		modal:{
			type:Boolean,
			default:false
		},
		width:{
			type:String,
			default:'280px'
		},
		height:{
			type:String,
			default:'40px'
		}
	},
	created(){
		if(this.$store.state.user.userid != '' && this.$store.state.user.password != ''){
			this.loginForm.username = this.$store.state.user.userid;
			this.loginForm.psw = this.$store.state.user.password;
		}
	},
	computed: {
		modalFlag:{
			get(){
				return this.modal;
			},
			set(value){
				this.$emit('modalChange',value);
			}
			
		},
		passWidth(){
			return (this.width == '' || this.width == null) ? 0:this.width;
		},
		passHeight(){
			return (this.height == '' || this.height == null) ? 0:this.height;
		}
	
	},
	data() {
		return {
			loginForm: {username: '',psw: ''},
			ruleInline: {
				psw: [
					{required: true, message: '请填写密码', trigger: 'blur'},
					{type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
				]
			},
			result: {
				success:false,
				user:{}
			},
			avatar: '', //require('../../assets/1.jpg')
			
		}
	},
	methods: {
		handleSubmit(form) {
			let _this = this;
			this.$refs[form].validate((valid) => {
				if (valid) {
					let user = this.getUser();
				} else {
					this.$Message.error('请联系管理员!')
				}
			})
		},
		getAvator() {
			if(this.loginForm.username !== ''){
				let this_ = this;
				this_.$http.get('../../static/loginUser.json').then((res) => {
					this_.solveData(res.data,false);
					if(this_.result.success){
						this_.avatar = require('../../../static/2.jpg');
					}
				}).catch((err) => {
					console.log(err);
				})
			}
			
		},
		getUser() {		
			let this_ = this;
			this_.$http.get('../../static/loginUser.json').then((res) => {
				let json = res.data;
				this_.solveData(json,true);
				if(this_.result.success){
					this_.$Message.success({
						content: '欢迎宝宝!',
						onClose: () => {
							this_.$router.push('/main');
						}
					})
				}
			}).catch((err) => {
				console.log(err);
			})	
			
		},
		solveData(json,checkPwd){
			let i = 0;
			while(json.length > i) {
				if (this.loginForm.username == json[i].userid ) {
					if(checkPwd){
						if(this.loginForm.psw == json[i].userpassword){
							this.result.success = true;
							this.result.user = {username:json[i].userid,psw:json[i].userpassword}
							this.$store.state.user = 
							{ 
						    	userid: json[i].userid, 
						    	password: json[i].userpassword 
							}
						}
					}else{
						this.result.success = true;
						this.result.user = {username:json[i].userid}
					}
					break;
				}
				i++;	
			}
			if(!this.result.success){
				this.$Message.warning('用户不存在!')
			}
		}
	}
}
</script>

<style scoped>
.cardStyle{
	 max-width:300px;
	 text-align:center;
}
.HFStyle{
	text-align:center;
}
</style>