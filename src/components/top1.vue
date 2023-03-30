<template>
  <div class="top-content">
    <div class="top-image">
      <el-image :src="homeImage"></el-image>
    </div>
    
    <div class="top-title">
      <div class="title-content" v-for="(item,index) in data.divData" @click="liClick(index)"
           :class="{active:currentIndex === index}">
                <span>{{ item }}</span>
      </div>
    </div>
  
    <div class="top-right">
      <div class="demo-input-size" >
        <input type="text" placeholder="搜索" style="height: 20px;background-color: transparent;border-style: none none solid none;">
<!--        <button>-->
<!--          <img src="../assets/bj.jpg" style="width: 20px;height:20px;border-radius:50%;">-->
<!--        </button>-->
      </div>
      
      <div class="top-zoom">
        5
      
      </div>
      <div class="top-root">
        <div>
          <el-image :src="homeImage" style="width:40px;height: 40px;border-radius:50%;"></el-image>
          <span>admin</span>
        </div>
      </div>
    </div>
    
  </div>


</template>

<script setup lang="ts">
import {ref} from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
import routes from '../router/index'
//圖片背景
const homeImage = new URL("../assets/webstack.jpg", import.meta.url).href;

const data = ref({
  isActive: true,
  name: '',
  divData:[
    '主页',
    '文章分类',
    '留言板',
    '友链',
    '我的收藏',
    '个人中心'
  ],
  input2:''
})

const currentIndex = ref(0)
const liClick = (index) => {
  currentIndex.value = index;
  if (index == 0){
    routes.push('/')
  }
  if (index == 1){
    routes.push('/article')
  }
}

</script>

<style>
.active{
  color: red;
  
}
.title-content {
  width: 16.4%;
  height: 70px;
  float: left;
  position: relative;

}

.top-content {
  width: 100%;
  height: 70px;
  display: flex;
  /*border: 1px solid yellow;*/
  background-color: rgb(0 0 0 / 20%);
}

.top-image {
  width: 10%;
}

.top-title {
  width: 55%;
  margin-left: 60px;
  font-size: 17px;
  cursor: pointer;
  text-align: center;
  line-height: 70px;
  
  /*border: 1px solid darkblue;*/
}

.quarter-div {
  width: 16.4%;
  height: 70px;
  float: left;
  /*border: 1px solid green;*/
  
  /*background-color: rgb(115, 223, 241);*/
}

.quarter-div span {
  transition: 0.2s linear;
}

.quarter-div:hover span:nth-child(1) {
  margin-right: 5px;
}


.top-image .el-image {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.top-right{
  width: 25%;
  height: 70px;
  text-align: center;
  line-height: 70px;
  
  position:absolute;
  right:0;
  /*border: 1px solid red;*/
  display: flex;
}

.demo-input-size{
  width: 55%;
  
  /*border: 1px solid seagreen;*/
}
.w-50{

}

.top-zoom{
  width: 10%;
  /*border: 1px solid black;*/
  
}

.top-root{
  width: 30%;
  
  /*border: 1px solid lightcoral;*/
}
</style>




