<template>
  <div>
    <!-- 顶部导航开始 -->
    <div class="header">
      <mt-header title="订单详情">
        <router-link slot="left" to="/indent">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 订单详情开始 -->
    <div class="page">
      <div class="top">
        <h1>订单状态:{{desri.status==1?'已取消':desri.status==2?'已支付':'已完成'}}</h1>
      </div>
      <div class="middle">
        <h1>订单信息:</h1>
        <p>服务类型:{{desri.title}}</p>
        <p class="bei">备注:{{desri.remark}}</p>
        <p>服务时间:{{desri.servertime}}</p>
        <p>订单号:{{desri.did}}</p>
        <p>服务地点:{{desri.pos}}</p>
        <p>联系电话:{{desri.phone}}</p>
        <p>创建时间:{{desri.ordertime}}</p>
      </div>
      <div class="bottom">
        <p>总计:{{desri.total}}</p>
      </div>
    </div>

    <!-- 订单详情结束 -->
  </div>
</template>

<script>
export default {
  props:["oid"],
  data() {
    return {
      desri:{}
    };
  },
  beforeRouteEnter(to,from,next){
      next();
  },
  beforeRouteLeave(to,from,next){
    if(to.name=="indent"){
      to.meta.keepAlive=true
    }
    next();
  },
  mounted(){
    this.axios.get("/order/descri",{params:{did:this.oid}}).then(res=>{
      console.log(res.data)
      this.desri=res.data.result;
    })
  }
};
</script>
<style scoped>
.page {
  margin-top: 15px;
  margin-left: 25px;
}
.top,
.middle {
  padding: 15px 5px;
}
.top,
.middle h1 {
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
}
.middle p {
  padding: 15px 0;
  margin-right: 5px;
}
.bei{
   line-height: 35px;
}
.bottom {
  position: relative;
  height: 60px;
  border: 1px solid #fff;
}
.bottom p {
  position: absolute;
  right: 15px;
  padding: 20px 0;
  font-size: 20px;
  color: #f00;
}
</style>