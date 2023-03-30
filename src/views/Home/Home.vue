<template>
  <top></top>

  <div class="home-header">
    <div class="home-body" v-for="item in data.divData" :key="item">
      <div class="body-content">
        <div class="body-img">
          <img :src="item.img">
        </div>
        <div class="body-title">
          
          <div class="body-caption">
            {{ item.title }}
          </div>
          
          <div class="content-list">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.content }}
          </div>
          
          <div class="content-comment" style="display:flex;">
            
            <div style="display: flex">
              <div class="base">
              {{ item.praise }}条评论
              </div>
              <div class="base">
              {{item.praise}}条点赞
              </div>
              <div class="base">
                {{ item.praise }}条浏览
              </div>
              <div class="base">
                {{ item.praise }}条收藏
              </div>
            </div>
            
            <div style="width: 12%;margin-left: 250px;color: red">
              <div v-if="item.collect == 0" @click="">
                收藏
              </div>
              <div v-else @click="">
                取消收藏
                <img src="../../static/bj.jpg" style="width: 20px;">
              </div>
            </div>
          
          </div>
        </div>
      </div>
    
    </div>
    
  </div>

</template>

<script setup lang="ts">
  import Top from '../../components/top.vue'
  import {ref} from "vue";


const data = ref({
  require: true,
  divData: [
    {
      id: '1',
      title: '标题一',
      img: new URL("../../static/bj.jpg", import.meta.url).href,
      content: '汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构成，能够在道路上行驶，方便人们出行和运输物品。',
      praise: '5',
      collect: true
    },
    {
      id: '2',
      title: '标题二',
      img: new URL("../../static/webstack.jpg", import.meta.url).href,
      content: '汽车的驾驶方式分为手动和自动两种，手动驾驶需要通过操纵离合器和变速器来改变车速和方向，而自动驾驶则通过电子系统来控制汽车的行驶。,',
      praise: '5',
      collect: false
    },
    {
      id: '3',
      title: '标题三',
      img: new URL("../../static/bj.jpg", import.meta.url).href,
      content: '汽车的外观设计也是重要的考虑因素，不同的汽车品牌和车型具有各自独特的设计特点和风格，体现了制造商的品牌形象和创新能力。',
      praise: '5',
      collect: true
    },
    {
      id: '4',
      title: '标题四',
      img: new URL("../../static/bj.jpg", import.meta.url).href,
      content: '汽车的发动机类型有多种，包括燃油发动机、电动发动机、混合动力发动机等，不同的发动机类型具有不同的性能和能源消耗特点。',
      praise: '5',
      collect: true
    },
    {
      id: '5',
      title: '标题五',
      img: new URL("../../static/webstack.jpg", import.meta.url).href,
      content: '汽车的安全性能非常重要，包括车身结构、气囊、安全带、制动系统等都需要具备高水平的安全性能，以减少车辆事故的发生。',
      praise: '5',
      collect: true
    },
  
  ],
  input2: ''
})

const count = ref(0)
const load = () => {
  count.value += 2
}


</script>

<style scoped="scoped">
.base {
  width: 100px;
  /*border: 1px solid springgreen;*/
  
}

.content-comment {
  margin-top: 30px;
}

.body-caption {
  height: 50px;
  font-size: 40px;
  font-weight: bold
}

.body-title {
  /*border: 1px solid lightcoral;*/
  width: 57%;
  margin-left: 35px;
}

.content-list {
  /*border: 1px solid palevioletred;*/
  height: 50%;
  margin-top: 30px;
  font-size: 25px;
  width: calc(100% - 30px);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.body-content {
  width: 98%;
  height: 270px;
  /*border: 1px solid darkcyan;*/
  margin: auto;
  display: flex;
}

.body-img {
  width: 40%;
  height: 270px;
  /*border: 1px solid red;*/
}

.body-img img {
  width: 100%;
  height: 270px;
  
}

.home-body {
  margin: auto;
  display: flex;
  margin-top: 20px;
  width: 95%;
  height: 300px;
  /*border: 1px solid black;*/
  background-color: rgb(0 0 0 / 20%);
}


.home-header {
  overflow-y: scroll;

  margin: auto;
  margin-top: 80px;
  width: 80%;
  height: 770px;
  color: white;
  /*border: 1px solid red;*/
}

.home-header::-webkit-scrollbar {
  display: none;
}
</style>