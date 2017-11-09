<template>
	<div class="hello">
		<Row type="flex" justify="center"  align="middle" style="height:100%">
			<Col :span="14" style="text-align:center;">
				<Course :autoplay="true" :autoplay-speed="3000" :imgList="imgList" ></Course>
			</Col>
			<Col :span="8" style="height:100%;display:flex;text-align: center; ">
				<Card :bordered="false" class="formStyle">
					<Form ref="loginForm" :model="loginForm" :rules="ruleInline"  style="">
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
			</Col>
		</Row>
		<Row type="flex" justify="center" style="height:300px;text-align:center;">
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
	created(){
		console.log(this.$store);
		if(this.$store.state.user.userid != '' && this.$store.state.user.password != ''){
			this.loginForm.username = this.$store.state.user.userid;
			this.loginForm.psw = this.$store.state.user.password;
		}
		
	},
	components: {
		Course:Course
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
			imgList:[
				{name:'鼬神很认真',src: require('../assets/1.jpg')},// 在js中使用require来引用资源避免使用字符串
				{name:'鼬神很帅',src: require('../assets/2.jpg')},
				{name:'鼬神很帅',src: require('../assets/2.jpg')},
				{name:'vue-logo',src: require('../assets/4.png')}
			],
			result: {
				success:false,
				user:{}
			},
			avatar:require('../assets/2.jpg')
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
					this.avatar = require('../assets/2.jpg');
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
								this.$store.state.user = {userid:json[i].userid,password:json[i].userpassword}
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