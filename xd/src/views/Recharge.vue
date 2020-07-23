<template>
  <div>
    <!-- 顶部导航开始 -->
    <div class="header">
      <mt-header title="充值中心">
        <router-link slot="left" to="/myPurse">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 金额选项卡开始 -->
    <div class="money_h">
      <h1>选择金额:</h1>
      <div class="money">
        <div
          @click="btn(i,k.money)"
          :data-money="k.money"
          :class="{check: n==i}"
          v-for="(k,i) of moneys"
          :key="i"
        >{{k.text}}</div>
        <!-- <div data-money="1800">1800元储值卡</div>
        <div data-money="2800">2800元储值卡</div>
        <div data-money="3800">3800元储值卡</div>
        <div data-money="4800">4800元储值卡</div>
        <div data-money>{{money}}</div>-->
      </div>
    </div>
    <!-- 金额选项卡结束 -->
    <!-- 支付方式开始 -->
    <div class="pay">
      <h1>支付方式</h1>
    </div>
    <!-- 支付方式结束 -->
    <!-- 支付按钮开始 -->
    <div class="pay_money">
      <mt-button type="primary" @click="pay">需要支付{{m}}元</mt-button>
      <p>
        支付即表示同意
        <router-link to="/notice">&lt;&lt;充值协议&gt;&gt;</router-link>
      </p>
    </div>
    <!-- 支付按钮结束 -->
    <!-- 输入框开始 -->
    <div class="text" v-show="isShow">
      <div class="text_btn">
        <input type="text" v-model="tex" />
        <button @click="add">确定</button>
      </div>
      <div id="keys" @click="keys" class="keys">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>00</button>
        <button>×</button>
      </div>
    </div>
    <!-- 输入框结束 -->
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      m: "",
      tex: "",
      arr: [],
      isShow: false,
      n: 0,
      moneys: [
        { money: "800", text: "800元储值卡" },
        { money: "1800", text: "1800元储值卡" },
        { money: "2800", text: "2800元储值卡" },
        { money: "3800", text: "3800元储值卡" },
        { money: "4800", text: "4800元储值卡" },
        { money: "", text: "其他金额" }
      ]
    };
  },
  computed:{...mapState(["uid"])},
  methods: {
    pay(){
      this.axios.get("/user/recharge",{params:{
        uid:this.uid,
        money:this.m
      }}).then(res=>{
        if(res.data.code==200){
          this.$router.push("/myPurse")
        }
      })
      },
    btn(b, a) {
      if (a != "") {
        this.m = a;
        this.isShow = false;
      } else {
        this.isShow = true;
      }
      this.n = b;
    },
    keys(e) {
      if (e.target.nodeName == "BUTTON") {
        if (e.target.innerHTML == "×") {
          this.arr.pop();
          this.tex = this.arr.join("");
        } else {
          this.arr.push(e.target.innerHTML);
          this.tex = this.arr.join("");
        }
      }
      this.m = this.tex;
    },
    add() {
      this.isShow = false;
    }
  },
  mounted(){
    this.m=this.moneys[this.n].money;

  }
};
</script>
<style scoped>
.money_h,
.pay h1 {
  padding: 20px 0 0 10px;
  font-weight: 700;
}
.pay_money {
  text-align: center;
  margin-bottom: 20px;
}
.pay_money a {
  text-decoration: none;
  color: #26a2ff;
}
.pay_money button {
  margin: 15px 0;
}
.money {
  padding-top: 20px;
  padding-right: 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
}
.money div {
  width: 170px;
  height: 60px;
  margin-top: 5px;
  text-align: center;
  line-height: 60px;
  background-color: #eaeaea;
  font-weight: 400;
  border-radius: 5px;
}
/* 点击div后样式 */
.check {
  width: 170px;
  height: 60px;
  margin-top: 5px;
  text-align: center;
  line-height: 60px;
  background-color: rgb(248, 219, 165);
  font-weight: 400;
  color: rgb(255, 165, 0);
  border: 1px solid rgb(255, 165, 0);
}
.text {
  text-align: center;
}
.text_btn {
  padding-bottom: 10px;
}
.text_btn input {
  padding: 5px 35px;
}
.keys {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.text .keys button {
  box-sizing: border-box;
  padding: 10px 50px;
  width: 28%;
}
</style>