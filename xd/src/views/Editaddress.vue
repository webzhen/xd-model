<template>
  <div class="box">
    <mt-header title="编辑地址">
      <router-link to="/myAdress" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <mt-field v-model="uname" label="联系人：" type="text" placeholder="例：王先生" class="border"></mt-field>
      <mt-field v-model="phone" label="手机号码：" type="text" class="border"></mt-field>
      <mt-field v-model="add" label="服务地址：" type="text" placeholder="请选择服务区域" class="border"></mt-field>
      <mt-field
        v-model="pos"
        label="详细地址："
        type="text"
        placeholder="详细地址,例:1号楼2单元102室"
        class="border"
      ></mt-field>
    </div>

    <div class="btn-container">
      <mt-button size="large" @click="newadd">保存</mt-button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["aid"],
  data() {
    return {
      loves: [],
      uname: "",
      phone: "",
      add: "",
      pos: ""
    };
  },
  computed: {
    ...mapState(["uid"])
  },
  methods: {
    newadd() {
      this.axios
        .get("/address/update", {
          params: {
            aid: this.aid,
            dname: this.uname,
            pos: this.add + this.pos,
            phone: this.phone,
            user_id: this.uid
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.$router.push("/myAdress");
          }
        });
    }
  },
  mounted() {
    this.axios.get("/address/getaddress", {
      params: { aid: this.aid }
    }).then(res=>{
        console.log(res.data);
        this.uname=res.data.result[0].dname;
        this.phone=res.data.result[0].phone;
        this.pos=res.data.result[0].pos;
    });
  }
};
</script>
<style scoped>
.border {
  border-bottom: 1px solid #aaaaaa;
}
.container {
  padding: 10px;
  background: #ffffff;
}
.box {
  background: #eaeaea;
}
.btn-container {
  width: 80%;
  margin: 0 auto;
}
.btn-container .mint-button--default {
  color: #fff;
  background-color: #dbdd62;
  box-shadow: 0 0 1px #b8bbbf;
}
#btnbox {
  background: #eaeaea;
}
#btnbox .mint-cell {
  background-color: #eaeaea;
}
</style>