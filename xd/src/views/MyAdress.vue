<template>
  <div id="index">
    <mt-header title="管理收获地址" fixed>
        <router-link slot="left" to="/my">
          <mt-button icon="back"></mt-button>
        </router-link>
      <!-- <mt-button slot="right" icon="more"></mt-button> -->
    </mt-header>
    <div class="container">
      <div class="posbox" v-for="(p,i) of addresslist" :key="i">
        <div class="pos-innerbox">
          <p class="nameBox"><span>{{p.dname}}</span><span>{{p.phone}}</span></p>
          <p class="pos">{{p.pos}}</p>
        </div>
        <div class="defaultBox">
          <label @click="def(p.aid)">
            <input :checked="p.is_default" type="radio" name="is_default">默认地址
          </label>
          <div>
            <router-link class="editbox" :to="`/editaddress/${p.aid}`">
              <span class="edit">编辑</span>
            </router-link>
            <span class="del" @click="dele(p.aid)">删除</span>
          </div>
        </div>
      </div>
    </div>
    <mt-tabbar fixed>
      <mt-tab-item>
        <div class="btnBox">
          <router-link to="/newaddress">
            <mt-button size='large'>+添加新地址</mt-button>
          </router-link>
        </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style scoped>
  #index{
    font-family: Microsoft Yahei;
  }
  .container{
    margin-top: 40px;
    background: #f6f8fa;
  }
  .posbox{
    padding: 10px;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 5px;
  }
  .nameBox{
    display: flex;
    justify-content: space-between;
  }
 .nameBox span{
   display: block;
 }
 .pos{
   color: #aaaaaa;
 }
 .pos-innerbox p{
   margin-bottom: 10px;

 }
 .pos-innerbox{
  border-bottom: 1px solid #aaaaaa;
 }
 .defaultBox{
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
 }
 .edit::before{
   display: inline-block;
   content: "";
   width: 16px;
   height: 16px;
   background: url("../assets/images/index/avatar/edit.png") no-repeat;
   vertical-align: bottom;
 }
  .del::before{
   display: inline-block;
   content: "";
   width: 16px;
   height: 16px;
   background: url("../assets/images/index/avatar/del.png") no-repeat;
   vertical-align: bottom;
   margin-left: 5px;
 }
 .container{
  margin-bottom: 55px;
}
.btnBox{
  width: 80%;
  margin: 0 auto;
}
a{
  text-decoration: none;
}
.btnBox  .mint-button--default {
    color: #fff;
    background-color: #c0a062;
}
.editbox{
  color: #000;
}
</style>
<script>
import { mapState, mapMutations } from 'vuex'
  export default{
    inject:['reload'],
    data(){
      return {
        addresslist:[]
      }
    },
    computed:{
      ...mapState(["uid"])
    },
    methods:{
      ...mapMutations(['setUid']),
      def(aid){
        this.axios.get("/address/updatedefault",{params:{
          uid:this.uid,
          aid:aid
        }
        }).then(res=>{
          this.reload();
        })
      },
      dele(aid){
        this.axios.get("/address/del",{params:{
          uid:this.uid,
          aid:aid
        }
        }).then(res=>{
          this.$router.go(0)
        })
      },
      
    },
    mounted(){
      var uid=localStorage.getItem("uid") || sessionStorage.getItem("uid");
      this.setUid(uid||"");
      this.axios.get("/address",{params:{
        uid:this.uid
      }
      }).then(res=>{
        this.addresslist=res.data.result;
        console.log(this.addresslist);
      })
    }
    
  }
</script>
