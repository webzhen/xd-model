<template>
    <div>
        <mt-header title="快速注册">
            <router-link slot="left" to="/">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link slot="right" to="/login">登录</router-link>
        </mt-header>
        <mt-field
        v-model="username"
        @blur.native.capture="unameAdd"
        :state="usernameState"
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        ></mt-field>
        <mt-field
        v-model="upwd"
        @blur.native.capture="upwdAdd"
        :state="upwdState"
        type="password"
        label="密码"
        placeholder="请输入密码"
        ></mt-field>
        <mt-field
        v-model="cpwd"
        @blur.native.capture="cpwdAdd"
        :state="cpwdState"
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        ></mt-field>
        <mt-button @click="register" size="large" type="primary">快速注册</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:"",
            usernameState:"",
            upwd:"",
            upwdState:"",
            cpwd:"",
            cpwdState:""
        }
    },
    methods:{
        unameAdd(){
            let unameReg=/^[a-zA-Z0-9_]{6,12}$/;
            if(unameReg.test(this.username)){
                this.usernameState="success"
                return true
            }else{
                this.usernameState="error"
                return false
            }
        },
        upwdAdd(){
            let upwdReg=/^[a-zA-Z0-9_]{6,18}/;
            if(upwdReg.test(this.upwd)){
                this.upwdState="success"
                return true
            }else{
                this.upwdState="error"
                return false
            }
        },
        cpwdAdd(){
            if(this.cpwd==this.upwd){
                this.cpwdState="success"
                return true
            }else{
                this.cpwdState="error"
                return false
            }
        },
        register(){
                if(this.unameAdd() && this.upwdAdd() && this.cpwdAdd()){
                    this.axios.post("/user/regist",`username=${this.username}&upwd=${this.upwd}`)
                .then(result=>{
                    console.log(result.data)
                    if(result.data.code==1){
                        alert("注册成功")
                        this.$router.push("/login")
                    }
                })
            }
        }
    }
}
</script>
<style  scoped>
a{
    text-decoration: none;
}
</style>