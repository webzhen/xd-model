<template>
    <div class="details">
        <!-- 头部开始 -->
        <div>
            <mt-header title="详情页" fixed>
            <!-- 跳转到主页 -->
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            </mt-header>
        </div>
        <!-- 头部结束 -->
        <!-- 服务信息图片开始 (个别详情页没有该栏) -->
        <div class="img1" v-if="this.details.img1!=null"> 
            <!-- 按数据库img返回值判断是否需要修改-->
            <img :src="this.details.img1">
            <p>{{this.details.title}}</p>
            <p class="price">{{this.details.price}}{{this.details.unit}}</p> 
         </div>
        <!-- 服务信息图片结束 -->
        <!-- 简介图片信息开始 -->
        <div class="img2" v-if="this.details.img2!=null">   
            <img :src="this.details.img2">
        </div>
        <!-- 简介图片信息结束 -->
        <!--注意事项图片开始 (个别详情页没有该栏) -->
        <div class="img3" v-if="this.details.img3!=null">
            <img :src="this.details.img3">
            <!-- <img src="..\assets\images\index\details\3f002_d3.png"> -->
        </div>
        <!--注意事项图片结束  -->
        <!-- 服务预订须知图片开始(因每个详情页都有，可以考虑写死) -->
        <div class="img4" v-if="this.details.img4!=null">
            <img :src="this.details.img4">
        </div>
        <!-- 备用img5 -->
        <div class="img5" v-if="this.details.img5!=null">
            <img :src="this.details.img5">
        </div>
        <!-- 服务预订须知图片结束 -->
        <!-- 底部“立即预订”按钮模块开始 -->
        <div class="button"> 
            <router-link :to="'/place/'+details.pid ">
                <mt-button type="primary" size="large" >
                    立即预约
                </mt-button>
            </router-link>
        </div>
        <!-- 底部“立即预订”按钮模块结束 -->
    </div>
</template>

<style scoped>
a{
    text-decoration: none;
}
.img1{
    text-align: center;
}
.img4{
    margin-bottom: 40px;
}
.img2,.img3{
    margin-bottom: 20px;
}
.details{
    background-color:rgb(227, 227, 227);
}
.details img{
    width: 100%;
}
.button {
    position: fixed;
    bottom: 0px;
    width: 100%;
}
.price{
    color:blue;
    font-size: 14px;
}
</style>


<script>
export default {
    data(){
        return{
            // 保存由pid查询返回的数据
            details:[],
            data:''
        }
    },
    beforeRouteEnter(to,from,next){
        console.log("进入详情页")
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log("离开详情页")
        if(to.name=="place"){
            from.meta.keepAlive=true
        }else{
            from.meta.keepAlive=false
        }
        next();
    },
    mounted() {
        console.log('详情页重新加载了');
        let pid= this.$route.params.pid;
        // 详情页加载根据pid发送ajax请求
        this.axios.get('http://127.0.0.1:4000/details?pid='+pid).then(res=>{
        this.details = res.data.result;
        this.details.img1 = require('../assets/images/index/details/' + this.details.img1)
        this.details.img2 = require('../assets/images/index/details/' + this.details.img2)
        this.details.img3 = require('../assets/images/index/details/' + this.details.img3)
        this.details.img4 = require('../assets/images/index/details/' + this.details.img4)
        if(this.details.img5!=null){
            this.details.img5 = require('../assets/images/index/details/' + this.details.img5)
        }
        
        
        console.log(res.data.result)
        // console.log(this.details)
        
        
        })
    },
}
</script>
