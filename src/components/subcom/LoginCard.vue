<template>
<div class="">
	<Card>
	<Form ref="loginForm" :model="loginForm" :rules="ruleInline">
		<FormItem>
			<Avatar icon="person" size="large" :src="avatar"/>
		</FormItem>
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
		<FormItem>
			<Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
		</FormItem>
	</Form>
	</Card>
</div>
</template>

<script>
// import xx from ''
export default {
	name: '',
	props: [''],
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
			}
			// ,avatar:require('../assets/2.jpg')
			
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
				this.getUserList(false);
				if(this.result.success){
					this.avatar = require('../../../static/2.jpg');
				}
			}
			
		},
		getUser() {		
			let result = this.getUserList(true);	
			if(this.result.success){
				this.$Message.success({
					content: '欢迎宝宝!',
					onClose: () => {
						this.$router.push('/home');
					}
				})
			}
		},
		getUserList(checkPwd){
			let this_ = this;
			this.$http.get('../../static/loginUser.json').then((res) => {
				let json = res.data;
				let i = 0;
				while(json.length > i) {
					if (this_.loginForm.username == json[i].userid ) {
						if(checkPwd){
							if(this_.loginForm.psw == json[i].userpassword){
								this_.result.success = true;
								this_.result.user = {username:json[i].userid,psw:json[i].userpassword}
							}
						}else{
							this_.result.success = true;
							this_.result.user = {username:json[i].userid}
						}
						break;
					}
					i++;	
				}
				if(!this_.result.success){
					this_.$Message.warning('用户不存在!')
				}
			}).catch((err) => {
				console.log(err);
			})
		}
	}
}
</script>

<style scoped>

</style>