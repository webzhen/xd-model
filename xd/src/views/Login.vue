<template>
    <div>
        <mt-header title="用户登录">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-field
        v-model="username"
        :state="usernameState"
        label="用户名"
        type="text"
        placeholder="请输入用户名"
        @blur.native.capture="unameAdd"
        ></mt-field>
        <mt-field
        label="密码"
        v-model="upwd"
        :state="upwdState"
        type="password"
        placeholder="请输入密码"
        @blur.native.capture="upwdAdd"
        ></mt-field>
        <mt-button @click="mylogin"  size="large" type="primary">快速登录</mt-button>
    </div>
</template>
<script>
import { mapActions,mapState, mapMutations } from 'vuex'

export default {
    data(){
        return {
            username:"",
            usernameState:"",
            upwd:"",
            upwdState:""
        }
    },
    methods:{
        ...mapActions(["login"]),
        ...mapMutations(["setUid","setUname"]),
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
        mylogin(){
                if(this.unameAdd() && this.upwdAdd()){
                   this.login({
                       username:this.username,
                       upwd:this.upwd
                   }).then((res)=>{
                       if(this.remember){
                            localStorage.setItem("uname",this.username);
                            localStorage.setItem("uid",res.data.result.id);
                            this.setUid(res.data.result.id);
                            this.setUname(res.data.result.username);
                        }else{
                            sessionStorage.setItem("uname",this.username);
                            sessionStorage.setItem("uid",res.data.result.id);
                            this.setUid(res.data.result.id);
                            this.setUname(res.data.result.username);
                        }
                        this.$router.push("/")
                
                   });
            }
        }
    }
}
</script>
<style scoped>

</style>