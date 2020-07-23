<template>
  <div style="background-color:#e8e8e8">
    <!-- 顶部导航栏 -->
    <mt-header title="同城小时工">
      <div slot="right" class="header">
        <div v-if="uid==''">
          <router-link to="/register">注册</router-link>
          <router-link to="/login">登录</router-link>
        </div>
        <div @click="logout" v-else>
          <router-link to="/">退出</router-link>
        </div>
      </div>
    </mt-header>
    <!-- 第一部分 -->
    <div class="f1">
      <!-- 轮播图 -->
      <div class="carousel">
        <mt-swipe :show-indicators="false" :auto="2000">
          <mt-swipe-item v-for="(p,i) in carousel" :key="i">
            <router-link :to="p.href">
              <img :src="p.img" alt />
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <h3>热门服务</h3>
      <!-- 3f -->
      <div class="f3">
        <div class="f3a" v-for="(m,n) of topserver" :key="n">
          <router-link :to="m.href">
            <img :src="m.img" alt="">
          </router-link>
        </div>
      </div>
      <!-- 4F -->
      <h3>精选服务</h3>
      <ul class="imgBox">
        <li v-for="(s,i) of siftserver" :key="i" @click="scroll(i)">
          <img style=" background-color:#F26C4F" :src="s.img" alt />
          <p>{{s.title}}</p>
        </li>
      </ul>
    </div>
    <!-- 第二模块 -->

    <div class="product" style="background-color:#fff;" v-for="(s,i) of siftserver" :key="i">
      <p>{{s.title}}</p>
      <div class="f3-header">
        <router-link :to="`/details/${p.pid}`" v-for="(p,index) of products[i]" :key="index">
          <div class="f3-div" >
              <img class="f3-img" :src="p.img1" alt />
            <div class="textBox">
              <p style="font-size:13px">{{p.title}}</p>
              <p style="color:#9A9A9A; font-size:11px">总销量{{p.sales}}</p>
              <p style="font-size:11px">
                <span style="color:red">{{p.price}}</span>{{p.unit}}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <mt-tabbar v-model="selectedTab" fixed>
          <mt-tab-item id="home">
              <img v-if="selectedTab=='home'" src="../assets/images/home_enable.png" slot="icon" alt />
              <img v-else src="../assets/images/home_disable.png" slot="icon" alt />
              家政保洁
          </mt-tab-item>
          <mt-tab-item id="order" @click.native="goorder">
              <img v-if="selectedTab=='order'" src="../assets/images/order_enable.png" slot="icon" alt />
              <img v-else src="../assets/images/order_disable.png" slot="icon" alt />
              订单
          </mt-tab-item>
          <mt-tab-item id="my" @click.native="gomy">
              <img v-if="selectedTab=='my'" src="../assets/images/me_enable.png" slot="icon" alt />
              <img v-else src="../assets/images/me_disable.png" slot="icon" alt />
              我的
          </mt-tab-item>
        </mt-tabbar>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      selectedTab:"home",
      carousel: [],
      baoji: [],
      siftserver: [],
      products: [],
      topserver:[]
    }
  },
  computed:{
    ...mapState(["uname","uid"])
  },
  methods:{
    ...mapMutations(["setUname","setUid"]),
    logout(){
      localStorage.clear();
      sessionStorage.clear();
      this.setUname("");
      this.setUid("");
    },
    scroll(i){
      let products=document.getElementsByClassName("product");
      let offsetTop=products[i].offsetTop;
      console.log(offsetTop);
      window.scrollTo(0,offsetTop)
    },
        goorder(){
            this.$router.push("/indent")
        },
        gomy(){
            this.$router.push("/my")
        }
  },
  beforeRouteEnter(to,from,next){
    next()
  },
  beforeRouteLeave(to,from,next){
    if(to.name=="details"){
      to.meta.keepAlive=false
    }
    next();
  },
  mounted() {
    this.axios.get("http://127.0.0.1:4000/index/carousel").then(res => {
      let add = res.data.result;
      add.forEach(element => {
        element.img = require("../assets/images/index/carousel/" + element.img);
      });
      this.carousel = add;
    });
    this.axios.get("/index/siftserver").then(res => {
      let arr1 = res.data.result;
      arr1.forEach((element,index) => {
        element.img = require("../assets/images/index/2F/" + element.img);
      });
      this.siftserver = arr1;
      // this.axios.get("/index/product").then(res=>{
      //   console.log(res.data)
      //   arr1.forEach((element,index)=>{
      //     this.products[element.fid]=[]
      //     res.data.result.forEach((ele,i)=>{
      //       // ele.img1=require("../assets/images/index/details/"+ele.img1);
      //       if(element.fid==ele.sift_id){
      //         this.products[element.fid].push(ele)
      //       }
      //     })
      //   })
      //   console.log(this.products)
      // })
    });
    this.axios.get("/index/product").then(res=>{
      let arr1=[];
      let arr2=[];
      let arr3=[];
      let arr4=[];
      console.log(res.data)
      res.data.result.forEach((element,i)=>{
        element.img1=require("../assets/images/index/details/"+element.img1);
        element.sift_id==1?arr1.push(element):element.sift_id==2?arr2.push(element):element.sift_id==3?arr3.push(element):arr4.push(element)
      });
      this.products.push(arr1);
      this.products.push(arr2);
      this.products.push(arr3);
      this.products.push(arr4);
      console.log(this.products)
    })
    this.axios.get("/index/topserver").then(res=>{
      let arr3=res.data.result;
      arr3.forEach(element => {
        element.img = require("../assets/images/index/1F/" + element.img);
      });
      this.topserver=arr3;
    });
  }
};
</script>

<style scoped>
.f3-img {
  display: block;
  width: 100%;
  height: 94px;
  /* border: 1px solid #f00; */
  border-radius: 15px;
}
.carousel{
  padding-bottom: 10px;
}
.f3-div {
  text-align: center;
  margin: 10px 0;
  padding: 0 8px;
  box-sizing: border-box;
}
.f3-div a {
  width: 100%;
  margin: 0 auto;
  text-decoration: none;
}
.f3-div p{
  color: #000;
}
.f3-header {
  width: 100%;
  background-color: #fff;
  display: flex;
  /* justify-content: space-between; */
  flex-flow: wrap;
}
.f3-header>a{
  display: block;
  width: 33%;
  text-decoration: none;
  color: #9a9a9a;
}
.imgBox{
  margin-top: 20px;
}
.f1 {
  background-color: #fff;
  padding: 10px;
}
.f1 h3{
  margin: 10px 0;
  font-size: 16px;
  font-weight: 600;
}
ul {
  display: flex;
  list-style: none;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0px;
}
ul.imgBox>li{
  width: 25%;
  padding: 0 15px;
  box-sizing: border-box;
}
ul.imgBox>li p{
  font-size: 14px;
}
ul img {
  width: 100%;
  display: block;
  border-radius: 50%;
  margin: 20px 0;
}
.f3 {
  display: flex;
  justify-content: space-between;
}
.f3 p {
  margin-left: 6px;
  font-size: 8px;
}

.f3a {
  width: 49%;
}
.f3a img{
  width: 100%;
  height: 110px;
  border-radius: 5px;
}
.carousel {
  height: 250px;
  margin-top: 50px;
}
.carousel img {
  display: block;
  height: 250px;
  width: 100%;
}
.header {
  font-size: 17px;
}
.header a {
  text-decoration: none;
  padding-right: 10px;
  color: #fff;
}
.product {
  margin-top: 10px;
  padding: 10px;
}
.product>p{
  font-size: 16px;
}
.textBox {
  margin: 0 auto;
  width: 100%;
}
.textBox p {
  padding-top: 10px;
}
</style>

