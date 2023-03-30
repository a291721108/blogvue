<template>

  <div :class="config.cruTheme">
    <div class="home-page">
      <el-image :src="homeImage" style="height: 100%;width: 100%;z-index: -1"></el-image>
    </div>

      <floor></floor>

  
    <!--    <Panle></Panle>-->
    <router-view></router-view>
  </div>
</template>

<script setup>
import config from "../src/store/config.js"
// import Top from '../src/components/top.vue'
import floor from '../src/components/floor.vue'

//圖片背景
const homeImage = new URL("static/webstack.jpg", import.meta.url).href;
</script>

<style scoped="scoped">
.home-page {
  height: 100%;
  width: 100%;
  /*position: fixed;*/
  /*background-size: 100% 100%;*/
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  
  
}
</style>
