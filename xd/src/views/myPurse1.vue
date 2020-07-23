<template>
  <div id="index">
    <mt-header title="我的钱包" fixed>
      <router-link slot="left" to="/">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <div class="myPurse">
      <!-- <img src="../assets/imgs/myPurse.png" alt="钱包" > -->
      <p><b>我的余额:{{xx}}￥</b></p>
     
    </div>
    <mt-cell title="充值" slot="left" isLink to="/">
    </mt-cell>
    <mt-cell title="我的优惠券" slot="left" isLink to="/">
    </mt-cell>
    <mt-cell title="余额明细" slot="left" isLink to="/">
    </mt-cell>
      
    
    
    <!-- <div class="container">
      <p v-for="(p,i) in 50" :key="i">{{p}}</p>
    </div> -->
  </div>
</template>
<style scoped>
  /* #index{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  } */
  .myPurse{
    padding-top:33px; 
    height: 160px;
    background-color: #f9dda3;

  }
  .myPurse img{
      padding-right:10px;
  } 
  .myPurse p{
    line-height: 160px;
    text-align: center;
  }
 
</style>
<script>
  export default{}
</script>