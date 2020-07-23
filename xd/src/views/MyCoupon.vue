<template>
  <div id="index">
    <!-- 头部导航栏 开始 -->
    <mt-header title="我的卡券" fixed>
      <router-link slot="left" to="/my">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button slot="right" icon="more"></mt-button> -->
    </mt-header>
    <!-- 头部导航栏 结束 -->
    <!-- 按钮 -->
    <mt-button type="primary" size="large" plain  id="my-button">立即续费</mt-button>
  </div>
</template>
<style scoped>
  /* #index{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  } */
</style>
<script>
  export default{}
</script>
<style scoped>
 /* #button{
    background-color: #fa6400; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius:5px;
 } */
  #my-button{
    /* width: 250px;height: 60px; */
    margin-top: 400px;
    background-color: #fa6400; 
  }
</style>