<template>
  <div id="index">
    <mt-header title="拨打电话" fixed>
      <router-link slot="left" to="/my">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button slot="right" icon="more"></mt-button> -->
    </mt-header>
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
</style>
<script>
  export default{}
</script>