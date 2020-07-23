<template>
  <div class="place">
    <!-- 头部开始 -->
    <div class="header">
      <mt-header title="选择项目" fixed>
        <!-- 返回谁的详情页？ -->
        <router-link :to="'/details/'+this.pid" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 头部结束 -->
    <!-- 地址栏开始 -->
    <div class="address">
      <mt-cell :to="`/addressList/${pid}`" isLink :title="addInfo==''?address.pos:addInfo.pos"></mt-cell>

      <span>{{addInfo==""?address.dname:addInfo.dname}}</span>
      <span>{{addInfo==""?address.phone:addInfo.phone}}</span>
    </div>
    <!-- 地址栏结束 -->
    <!-- 选择服务类型开始 -->
    <p class="p_class">
      <span>服务类型:</span>
      <span>{{title}}</span>
    </p>
    <div class="server">
      <div
        class="serveItem"
        :class="{isMe:i==index}"
        v-for="(kk,index) of serveDetailsList"
        :key="index"
        @click="changeServe(index)"
      >{{kk.title}}</div>
      <!-- 排版填充用 -->
      <div class="serveItem-after" v-if="serveDetailsList.length%2==1"></div>
    </div>
    <!-- 选择服务类型结束 -->
    <!-- 服务类型价格数量添加模块开始 -->
    <div class="servePrice">
      <!-- 图片链接 -->
      <div>
        <img class="servePrice_img" :src="img1" />

        <div>
          <p>{{title}}</p>
          <!-- 服务单价 -->
          <p>{{price}}{{unit}}</p>
        </div>
      </div>

      <div>
        <span class="dec_btn" @click="sub">-</span>
        <span class="space">{{this.count}}</span>
        <span class="add_btn" @click="add">+</span>
      </div>
    </div>
    <!-- 服务类型价格数量添加模块结束 -->
    <!-- 选择服务时间模块开始(具体到 年-月-日-小时) -->
    <!-- @touchmove.prevent 阻止默认事件，此方法可以在选择时间时阻止页面也跟着滚动。 -->
    <div class="serveTime" @click="selectDate" @touchmove.prevent>
      <mt-cell title="选择开始时间" isLink v-if="!selectedValue">
        <span>请选择</span>
      </mt-cell>
      <span class="showDate" v-else>开始时间：{{startTime}}</span>
    </div>
    <div class="datePicker">
      <mt-datetime-picker
        lockScroll="ture"
        ref="datePicker"
        v-model="dateVal"
        class="myPicker"
        type="datetime"
        :startDate="startDate"
        :endHour="endHour"
        year-format="{value}年"
        month-format="{value}月"
        date-format="{value}日"
        hour-format="{value}时"
        @confirm="dateConfirm"
      ></mt-datetime-picker>
    </div>

    <!-- 选择服务时间模块结束 -->
    <!-- 下单界面留言模块开始 -->
    <div class="note">
      <!-- $evente.target绑定所点击的元素 -->
      <p>留言给我们：</p>
      <button @click="addNote($event)" value=" 开始时间可提前或延后两小时">开始时间可提前或延后两小时</button>
      <button @click="addNote($event)" value="服务人员可延后抵达">服务人员可延后抵达</button>
      <button @click="addNote($event)" value="提前联系我">提前联系我</button>
      <button @click="addNote($event)" value="自带鞋套">自带鞋套</button>
      <button @click="addNote($event)" value="服务人员可提前抵达">服务人员可提前抵达</button>
      <div>
        <textarea v-model="remark" @change="nodeInput($event)"></textarea>
      </div>
    </div>
    <!-- 下单界面留言模块结束 -->
    <!-- 底部总金额和跳转支付界面模块开始 -->
    <div class="money">
      <div>
        总计金额：
        <span>{{price*count}}</span>元
      </div>
      <button @click="toOrder">下一步</button>
    </div>
    <!-- 底部总金额和跳转支付界面模块结束 -->
  </div>
</template>




<style scoped>
.note p {
  padding-top: 20px;
  color: rgba(00, 00, 00, 0.5);
}
.showDate {
  height: 48px;
  width: 100%;
  display: block;
  line-height: 48px;
  margin-left: 10px;
  font-size: 18px;
}
.space {
  width: 30px;
  text-align: center;
}
.note {
  padding-bottom: 40px;
  width: 100%;
}

.p_class {
  padding: 16px 5px;
  background: #fff;
  margin: 0;
}
.place {
  background: rgb(227, 227, 227);
}
.place > div {
  margin-bottom: 10px;
  background: #fff;
}
.header {
  top: 0px;
  width: 100%;
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
.address {
  padding-top: 40px;
  border-bottom: 2px solid #000;
}
.servePrice_img {
  width: 100px;
  height: 100px;
  margin: 5px 0;
}
.serveItem {
  line-height: 80px;
  width: 45%;
  height: 80px;
  border: 1px solid #36d;
  border-radius: 8px;
}
.serveItem-after {
  width: 45%;
  height: 80px;
}
.servePrice > div {
  display: inline-block;
  margin: 0 10px;
  display: flex;
  align-items: center;
}
.servePrice {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.add_btn,
.dec_btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px #36d;
  font-size: 30px;
  text-align: center;
  line-height: 16px;
}
.add_btn {
  background: #36d;
  color: #fff;
}
.address span {
  margin-left: 10px;
}
.dec_btn {
  color: #36d;
}
.server {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 100%;
  text-align: center;
}
.server div {
  margin-bottom: 20px;
}
.note div textarea {
  width: 100%;
  height: 100px;
  border: solid 1px rgba(00, 00, 00, 0.3);
  color: rgba(00, 00, 00, 0.5);
  font-size: 16px;
  border-radius: 10px;
  padding: 8px;
  box-sizing: border-box;
}
.note button {
  background-color: transparent;
  border-style: none;
  height: 25px;
  font-size: 14px;
  border: 1px solid rgba(00, 00, 00, 0.3);
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: rgba(00, 00, 00, 0.5);
}
.serveItemClass {
  background: #f00;
}

p {
  margin: 0 5px 16px 5px;
}
/* 定义服务列表的点击样式 */
.isMe {
  border: solid 1px black;
  background: rgb(228, 118, 118);
  line-height: 80px;
  width: 45%;
  height: 80px;
  border-radius: 8px;
}
</style>



<script>
import { mapState } from "vuex";
export default {
  data() {
    var start = new Date();
    var now = new Date();
    var hour = now.getHours();
    start.setHours(hour + 3);
    return {
      startDate: start,
      endHour: 18,
      dateVal: "",
      servertime: "",
      selectedValue: "",
      i: 0,
      pid: "",
      // 单价
      price: "",
      // 单位
      unit: "",
      // 服务数量
      count: 1,
      // 金额总价
      total: "",
      uname: "用户名",
      uphone: "用户电话",
      // 保存商品列表返回的可选服务类型
      serveDetailsList: [],
      // 保存用户留言的字符串
      startTime: "",
      active: 0,
      img1: "",
      // 保存加载获得的地址数据
      address: "",
      title: "",
      remark: "",
    };
  },
  computed: {
    ...mapState(["uid", "addInfo"]),
  },
  methods: {
    selectDate() {
      // 打开时间选择器
      // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
      if (this.selectedValue) {
        this.dateVal = this.selectedValue;
      } else {
        this.dateVal = new Date();
      }
      this.$refs.datePicker.open();
      var pickerSlot = document.getElementsByClassName("picker-slot");
      pickerSlot[4].style.display = "none";
    },
    dateConfirm() {
      // 时间选择器确定按钮，并把时间转换成我们需要的时间格式

      this.selectedValue = this.dateVal;
      let year = this.selectedValue.getFullYear();
      let month = this.selectedValue.getMonth();
      let day = this.selectedValue.getDate();
      let hour = this.selectedValue.getHours();
      this.startTime = `${year}-${month}-${day} ${hour}:00:00`;
      let endTime = `${hour + 3}:00:00`;
      this.servertime = this.startTime + " -- " + endTime;
    },

    // 加号触发事件
    add() {
      this.count++;
      this.total = this.price * this.count;
    },
    // 减号触发事件
    sub() {
      if (this.count > 1) {
        this.count--;
      }
      this.total = this.price * this.count;
    },
    // 时间选择器函数
    addNote(e) {
      // 点击元素在node进行拼接

      this.remark += e.target.value + " ";
    },
    // 输入框触发事件添加留言
    nodeInput(e) {
      this.remark = e.target.value;
    },
    // 点击转换服务选项和改变样式事件函数*******
    changeServe(index) {
      this.index = index;
      this.count = 1;
      this.i = index;
      this.price = this.serveDetailsList[index].price;
      this.total = this.price * this.count;
      this.title = this.serveDetailsList[index].title;
      this.unit = this.serveDetailsList[index].unit;
    },
    toOrder() {
      console.log(this.year);
      if (this.dateVal != "") {
        //   sessionStorage.setItem("year", this.year);
        //   sessionStorage.setItem("month", this.month);
        //   sessionStorage.setItem("day", this.day);
        //   sessionStorage.setItem("hour", this.hour);
        //   sessionStorage.setItem("address", this.address.pos);
        //   sessionStorage.setItem("remark", this.node);
        //   sessionStorage.setItem("phone", this.address.phone);
        //   sessionStorage.setItem("price", this.price);
        //   sessionStorage.setItem("count", this.count);
        //   sessionStorage.setItem("title", this.title);
        sessionStorage.setItem(
          "info",
          `servertime=${this.servertime}&address=${
            this.addInfo == "" ? this.address.pos : this.addInfo.pos
          }&remark=${this.remark}&phone=${
            this.addInfo == "" ? this.address.phone : this.addInfo.phone
          }&price=${this.price}&count=${this.count}&title=${this.title}&pid=${
            this.pid
          }`
        );
        this.$router.push("/neworder");
      } else {
        alert("请选择服务时间");
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("进入规格页");
    // if (from.name == "neworder" || from.name == "addressList") {
    //   to.meta.keepAlive = true;
    // } else {
    //   to.meta.keepAlive = false;
    // }
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("离开规格页");
    if (to.name == "neworder") {
      from.meta.keepAlive = true;
    } else {
      from.meta.keepAlive = false;
    }
    next();
  },
  mounted() {
    console.log("规格页重新加载");
    let pid = this.$route.params.pid;
    this.pid = pid;
    // 获取当前页服务明细
    this.axios
      .get("http://127.0.0.1:4000/details/sku?pid=" + pid)
      .then((res) => {
        this.serveDetailsList = res.data.result;
        this.serveDetailsList[0].img1 = require("../assets/images/index/details/" +
          this.serveDetailsList[0].img1);
        // 页面加载同时计算总计金额
        this.price = this.serveDetailsList[0].price;
        this.total = this.price * this.count;
        this.title = this.serveDetailsList[0].title;
        this.img1 = this.serveDetailsList[0].img1;
        this.unit = this.serveDetailsList[0].unit;
      });

    // 获取用户默认地址
    // 获取uid(需修改)

    this.axios
      .post("http://127.0.0.1:4000/address/default", `uid=${this.uid}`)
      .then((res) => {
        this.address = res.data.result;
      });
  },
};
</script>