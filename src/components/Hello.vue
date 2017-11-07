<template>
    <div class="hello" style="">
        <Row style="height:400px">
          <Col :span="16" style="text-align:center;">
              <Course :autoplay="false" :autoplay-speed="3000" :imgList="imgList" ></Course>
          </Col>
          <Col :span="8" style="height:100%;display:flex;text-align: center; ">
              <Form ref="loginForm" :model="loginForm" :rules="ruleInline" class="formStyle" style="width:200px;margin: auto ;display:block">
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
          </Col>
        </Row>
    </div>
</template>

<script>
import Course from '@/components/Course.vue'
export default {
    name: 'hello',
    components: {
        Course:Course
    },
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
            imgList:[
                {name:'itach',src:'../assets/1.jpg'},
                {name:'itach',src:'../assets/2.jpg'},
                {name:'itach',src:'../assets/2.jpg'},
                {name:'itach',src:'../assets/4.png'}
            ]
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
    .hello{
        margin-top: 60px;
        width:100%;
        height: 100%
    }
    .formStyle{

    }
</style>
