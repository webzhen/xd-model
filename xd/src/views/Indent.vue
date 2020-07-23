<template>
  <div>
    <!-- 顶部导航开始 -->
    <div class="header">
      <mt-header>
        <router-link slot="left" to="/">订单</router-link>
      </mt-header>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <div>
      <mt-navbar v-model="id">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">未支付</mt-tab-item>
        <mt-tab-item id="3">已支付</mt-tab-item>
        <mt-tab-item id="4">已完成</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- 顶部选项卡结束 -->
    <mt-tab-container v-model="id" :swipeable="true">
      <mt-tab-container-item :id="`${i}`" v-for="i of 4" :key="i">
        <!-- 订单详情开始 -->
        <div class="indent" v-for="(p,index) of orderlist" :key="index" v-show="i==1?true:p.status==i-1?true:false">
          <router-link :to="`/indentpage/${p.did}`">
            <div class="details">
              <p>
                项目:{{p.title}}
                <span>{{p.status==1?'已取消':p.status==2?'已支付':'已完成'}}</span>
              </p>
              <p>时间:{{p.servertime}}</p>
              <p>日期:{{p.ordertime}}</p>
              <p>{{p.pos}}</p>
            </div>
          </router-link>
        </div>
        <!-- 订单详情结束 -->
      </mt-tab-container-item>
    </mt-tab-container>
     <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="home" @click.native="gohome">
                <img v-if="selectedTab=='home'" src="../assets/images/home_enable.png" slot="icon" alt />
                <img v-else src="../assets/images/home_disable.png" slot="icon" alt />
                家政保洁
            </mt-tab-item>
            <mt-tab-item id="order">
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: "1",
      selectedTab:'order',
      orderlist: []
    };
  },
  computed: {
    ...mapState(["uid"])
  },
  beforeRouteEnter(to,from,next){
    if(from.name =="indentpage"){
      to.meta.keepAlive=true
    }else{
      to.meta.keepAlive=false
    }
    next();
  },
  beforeRouteLeave(to,from,next){
    if(to.name=="indentpage"){
      from.meta.keepAlive=true
    }else{
      from.meta.keepAlive=false
    }
    
    next();
  },
  methods:{
    gohome(){
            this.$router.push("/")
        },
        gomy(){
            this.$router.push("/my")
        }
  },
  mounted() {
    console.log('订单列表页重新加载了');
    this.axios
      .get("/order/getorder", {
        params: {
          uid: this.uid
        }
      })
      .then(res => {
        console.log(res.data);
        this.orderlist = res.data.result;
      });
  }
};
</script>
<style scoped>
a{
  text-decoration: none;
  }
.header,
.indent a {
  text-decoration: none;
}
.indent a {
  color: rgb(20, 17, 17);
}
.details {
  margin: 20px 5px 20px 8px;
  border-bottom: 1px solid rgb(133, 133, 133);
}
.details p {
  margin: 12px 0 12px 15px;
}
.details span {
  margin-left: 5px;
  color: #f00;
}
</style>