<template>
  <div>
    <mt-header title="确认订单">
      <router-link :to="`/place/${odetails.pid}`" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <div class="cell">
        <span class="title">服务内容：</span>
        <span class="details">{{odetails.title}}</span>
      </div>
      <div class="cell">
        <span class="title">开始时间：</span>
        <span class="details">{{odetails.servertime}}</span>
      </div>
      <div class="cell">
        <span class="title">服务地址：</span>
        <span class="details">{{odetails.address}}</span>
      </div>
      <div class="cell">
        <span class="title">联系电话：</span>
        <span class="details">{{odetails.phone}}</span>
      </div>
      <div class="cell">
        <span class="title">备&nbsp;&nbsp;注：</span>
        <span class="details">{{odetails.remark}}</span>
      </div>
    </div>
    <!-- 支付模块 -->
    <div></div>
    <!-- 底部金额模块 -->
    <div class="money">
      <div>
        总计金额：
        <span>{{odetails.price*odetails.count}}</span>元
      </div>
      <button @click="neworder">支付</button>
    </div>
  </div>
</template>

<style scoped>
.cell {
  width: 90%;
  /* height: 40px; */
  border-bottom: 1px solid rgba(00, 00, 00, 0.5);
  padding: 5px;
}
.title {
  color: rgba(00, 00, 00, 0.5);
  height: 40px;
  display: block;
}
.details {
  font-size: 18px;
  overflow: scroll;
  text-overflow: ellipsis;

  overflow: hidden;
}
.money {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  border-top: solid 1px rgba(00, 00, 00, 0.2);
  margin: 0 !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.money > div {
  margin-right: 10px;
  font-size: 14px;
  color: rgba(00, 00, 00, 0.5);
}
.money span {
  margin-right: 10px;
  color: #f00;
  font-size: 20px;
}
.money button {
  border-style: none;
  background: #36d;
  height: 34px;
  width: 90px;
  color: #fff;
  border-radius: 34px;
}
</style>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      odetails: {},
    };
  },
  computed: {
    ...mapState(["uid"]),
  },
  methods: {
    neworder() {
      let now = new Date();
      let ordertime = now.toLocaleString();
      console.log(ordertime);
      this.axios
        .post(
          "/order/neworder",
          `user_id=${this.uid}&status=2&ordertime=${ordertime}&servertime=${
            this.odetails.servertime
          }&title=${this.odetails.title}&count=${this.odetails.count}&total=${
            this.odetails.price
          }&remark=${this.odetails.remark ? this.odetails.remark : " "}&phone=${
            this.odetails.phone
          }&pos=${this.odetails.address}`
        )
        .then((res) => {
          console.log("已下单");
          sessionStorage.removeItem("info");
          this.$router.push("/indent");
        });
    },
  },
  mounted() {
    let info = sessionStorage.getItem("info");
    let arr = info.split("&");
    let obj = {};
    arr.forEach((element, i) => {
      let arr2 = element.split("=");
      obj[arr2[0]] = arr2[1];
    });
    this.odetails = obj;
    console.log(obj);
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "place") {
      to.meta.keepAlive = true;
    } else {
      to.meta.keepAlive = false;
    }
    next();
  },
};
</script>
