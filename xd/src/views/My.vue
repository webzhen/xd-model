<template>
  <div>
    <!-- 头部导航栏 开始 -->
    <div id="header">
      <mt-header title="我的" fixed  >
      </mt-header>
    </div>
    
    <!--头部导航栏 结束  -->

    <!-- 用户名、头像区 开始 -->
    <!-- <div class="head-user">
      <p>我的</p>
      <img src="../assets/imgs/page.png" slot="icon"/>
    </div> -->
    <div v-if="uid==''">
      <mt-cell @click.native="gologin" title="点我登录"  id="head-user" >
      </mt-cell>
    </div>
    <div v-else>
      <mt-cell :title="`${userMsg.username}`"  id="head-user" >
        <img :src="userMsg.avatar">
      </mt-cell>
    </div>
   
      
    <!-- 用户名、头像区 结束 -->
     <!-- 卡槽列表 开始 -->
    <mt-cell title="我的地址" isLink to="/myAdress">
      <img src="../assets/imgs/address.png" slot="icon" />
    </mt-cell>
    <mt-cell title="我的钱包" isLink to="/myPurse">
      <img src="../assets/imgs/page.png" slot="icon" />
    </mt-cell>
    <mt-cell title="我的卡券" slot="left" isLink to="/myCoupon">
      <img src="../assets/imgs/card.png" slot="icon" />
    </mt-cell>
    <mt-cell title="在线咨询" slot="left" isLink to="/onlineReference">
      <img src="../assets/imgs/relation.png" slot="icon" />
    </mt-cell>
    <mt-cell title="拨打客服电话" slot="left" isLink to="/dial">
      <img src="../assets/imgs/tel.png" slot="icon" />
    </mt-cell>
    <!-- 卡槽列表 结束 -->
    <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="home" @click.native="gohome">
                <img v-if="selectedTab=='home'" src="../assets/images/home_enable.png" slot="icon" alt />
                <img v-else src="../assets/images/home_disable.png" slot="icon" alt />
                家政保洁
            </mt-tab-item>
            <mt-tab-item id="order" @click.native="goorder">
                <img v-if="selectedTab=='order'" src="../assets/images/order_enable.png" slot="icon" alt />
                <img v-else src="../assets/images/order_disable.png" slot="icon" alt />
                订单
            </mt-tab-item>
            <mt-tab-item id="my">
                <img v-if="selectedTab=='my'" src="../assets/images/me_enable.png" slot="icon" alt />
                <img v-else src="../assets/images/me_disable.png" slot="icon" alt />
            我的
            </mt-tab-item>
        </mt-tabbar>
  </div>
   
  
</template>
<style>
#head-user{
  height: 100px;
  margin-top:50px;
  /* text-align: center; */
  line-height: 100px;
}
#head-user img{
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
</style>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      selectedTab:"my",
      userMsg:{}
    };
  },
  computed:{
    ...mapState(["uid"])
  },
  methods:{
    ...mapMutations(["setUid"]),
    gohome(){
            this.$router.push("/")
        },
        goorder(){
            this.$router.push("/indent")
        },
        gologin(){
          this.$router.push("/login")
        }
  },
  mounted() {
    var uid=localStorage.getItem("uid") || sessionStorage.getItem("uid");
    this.setUid(uid||"");
    if(this.uid!=""){
    this.axios
      .get("/user/person",{params:{
        uid:this.uid
      }})
      .then(res => {
        // console.log(res.data.result);
         this.userMsg=res.data.result;
         this.userMsg.avatar=require("../assets/images/index/avatar/"+this.userMsg.avatar);
        // console.log(userMsg.username);
      });
    }
  }
};

</script>
