<template>
  <div class="hello" >
    <div style="width: 100%;text-align: center;">
      <Form ref="loginForm" :model="loginForm" :rules="ruleInline" style="width:300px;margin: 0 auto ">
        <FormItem prop="username">
          <Input type="text" v-model="loginForm.username" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="psw">
          <Input type="password" v-model="loginForm.psw" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      loginForm: {
        username: '',
        psw: ''
      },
      ruleInline: {
        psw: [
          {required: true, message: '请填写密码', trigger: 'blur'},
          {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
        ]
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleSubmit(form) {
      let _this = this;console.log(this.loginForm.username);
      this.$refs[form].validate((valid) => {
        if (valid) {
          let user = this.getUser();
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    getUser() {
      var this_ = this;
      this.$http.get('../../static/loginUser.json',).then((res) => {
        let json = res.data
        let i = 0;let falg = true;
        while(json.length > i) {
          if (this_.loginForm.username == json[i].userid && this_.loginForm.psw == json[i].userpassword) {
            falg = false;
            this_.$Message.success({
              content: '欢迎宝宝!',
              onClose: () => {
                this_.$router.push('/home');
              }
            })
          }
          i++;
        }
        if(flag){
          this_.$Message.success('用户不存在!')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    padding: 0;
  }

  li {
  }

  a {
    color: #42b983;
  }
</style>
