<template>
  <div id="index">
    <mt-header title="地址列表" fixed>
      <router-link slot="left" :to="`/place/${pid}`">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <div class="posbox" v-for="(p,i) of addresslist" :key="i" @click="def(i)">
        <router-link :to="`/place/${pid}`">
          <div class="pos-innerbox">
            <p class="nameBox">
              <span>{{p.dname}}</span>
              <span>{{p.phone}}</span>
            </p>
            <p class="pos">{{p.pos}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <mt-tabbar fixed>
      <mt-tab-item>
        <div class="btnBox">
          <router-link to="/newaddress">
            <mt-button size="large">添加新地址</mt-button>
          </router-link>
        </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props:["pid"],
  data() {
    return {
      addresslist: [],
      info:""
    };
  },
  computed: {
    ...mapState(["uid"])
  },
  methods: {
    ...mapMutations(["setInfo"]),
    def(i) {
      // this.axios
      //   .get("/address/updatedefault", {
      //     params: {
      //       uid: this.uid,
      //       aid: aid
      //     }
      //   })
      //   .then(res => {
      //     this.$router.go(0);
      //   });
      this.info=this.addresslist[i];
      this.setInfo(this.info);
    }
  },
  beforeRouteLeave(to,from,next){
    if(to.name=="place"){
      to.meta.keepAlive=true
    }else{
      to.meta.keepAlive=false
    }
    next();
  },
  mounted() {
    console.log(this.uid);
    this.axios
      .get("/address", {
        params: {
          uid: this.uid
        }
      })
      .then(res => {
        this.addresslist = res.data.result;
      });
  }
};
</script>


<style scoped>
#index {
  font-family: Microsoft Yahei;
}
.container {
  margin-top: 40px;
  background: #f6f8fa;
}
.posbox {
  padding: 10px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 5px;
}
.nameBox {
  display: flex;
  justify-content: space-between;
}
.nameBox span {
  display: block;
}
.pos {
  color: #aaaaaa;
}
.pos-innerbox p {
  margin-bottom: 10px;
}
.pos-innerbox {
  border-bottom: 1px solid #aaaaaa;
}
.defaultBox {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.edit::before {
  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;
  background: url("../assets/images/index/avatar/edit.png") no-repeat;
  vertical-align: bottom;
}
.del::before {
  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;
  background: url("../assets/images/index/avatar/del.png") no-repeat;
  vertical-align: bottom;
  margin-left: 5px;
}
</style>

<style scoped>
.container {
  margin-bottom: 55px;
}
.btnBox {
  width: 80%;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
.btnBox .mint-button--default {
  color: #fff;
  background-color: #c0a062;
  box-shadow: 0 0 1px #b8bbbf;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
  color: #26a2ff;
}
</style>