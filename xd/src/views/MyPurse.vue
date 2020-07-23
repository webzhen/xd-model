<template>
  <div id="index">
    <mt-header title="我的钱包" fixed>
      <router-link slot="left" to="/my">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button slot="right" icon="more"></mt-button> -->
    </mt-header>
    <div class="myPurse">
      <img src="../assets/imgs/myPurse.png" alt="钱包" >
      <p>￥{{money}}</p>
    </div>
    <mt-cell title="充值" slot="left" isLink to="/Recharge">
    </mt-cell>
    <mt-cell title="我的优惠券" slot="left" isLink to="/my">
    </mt-cell>
    <mt-cell title="余额明细" slot="left" isLink to="/my">
    </mt-cell>
      
    
    
    <!-- <div class="container">
      <p v-for="(p,i) in 50" :key="i">{{p}}</p>
    </div> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  
}
</script>
<style scoped>
  /* #index{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  } */
  .myPurse{
    position: relative;
    padding-top:33px; 
  }
  .myPurse img{
    width: 100%;
      padding-right:10px;
  } 
.myPurse p{
  position: absolute;
  top: 95px;
  left: 30px;
  font-weight: 500;
  font-family: "Microsoft Yahei";
  font-size: 30px;
  color:#f58e3c;
}
 
</style>
<script>
import{mapState} from 'vuex'
  export default{
    data(){
      return {
        money:0
      }
    },
    computed:{
      ...mapState(["uid"])
    },
    mounted(){
      this.axios.get("/user/person",{params:{
        uid:this.uid
      }
      }).then(res=>{
        this.money=res.data.result.balance;
      })
    }
  }
</script>