<template>
    <top></top>
    <div class="body-content">
      <div class="left-content">
        <div class="" style="width:100%;height:80px;background-color: rgba(0, 0, 0, 0.2)">
          <el-col :span="6">
            <div class=" ep-bg-purple"/>
            <el-button type="primary">前端</el-button>
          </el-col>
          <el-row :gutter="20" style="float: left;margin: 10px 20px;" v-for="(item,index) in data.divData" @click="">
            <el-col :span="6">
              <el-button>{{ item.name }}</el-button>
            </el-col>
          </el-row>
        </div>
      
        <div style="width:100%;float: left;">
          <div style="margin-top:20px;height: 300px" v-for="(item,index) in data.data_content" @click="">
            <div class="flower clearfix">
              <div class="item">
                <div class="item-content" style="">
                  <h1>{{ item.title }}</h1>
                </div>
                <img :src="item.img" style="width: 100%;height: 100%">
                <div class="item-mask"></div>
              
                <div class="item-title">
                  {{ item.title }}
                </div>
              
                <div class="item-info" style="">
                  {{ item.content }}
                </div>
              
                <div class="item-bottom">
                  <div>{{ item.time }}</div>
                  <div>{{ item.praise }}条评论</div>
                  <div>{{ item.praise }}条点赞</div>
                  <div>{{ item.praise }}条浏览</div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="right-content">
        <div class="img">
          <img :src="xiaologo">
      
        </div>
      
        <div class="news">
          <h3>热搜榜</h3>
          <ul v-for="(item,index) in data.top_serarch">
            <li><a href=""><span class="col1">{{item.name}}</span>-------{{item.praise}}次浏览</a></li>
          </ul>
        </div>
      </div>
    </div>
  
</template>

<script setup lang="ts">

  import Top from '../../components/top.vue'
  import {ref} from 'vue'
import {Calendar, Search} from '@element-plus/icons-vue'
//圖片背景

const xiaologo = new URL("../../static/xiaologo.jpg", import.meta.url).href;


const data = ref({
  divData: [
    {id: '1', name: 'js', content: 'ddddd', img: ''},
    {id: '2', name: 'css', content: 'ddddd', img: ''},
    {id: '3', name: 'jq', content: 'ddddd', img: ''},
    {id: '4', name: 'vue', content: 'ddddd', img: ''},
  ],
  //详情数据
  data_content: [
    {
      id: '1',
      title: '标题一',
      img: new URL("../../static/bj.jpg", import.meta.url).href,
      content: '汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构汽车是一种交通工具，通常由四个轮子、发动机、底盘和车身构成，能够在道路上行驶，方便人们出行和运输物品。',
      praise: '5',
      collect: true,
      time: "2023-3-14 14:25:49"
    },
    {
      id: '2',
      title: '标题二',
      img: new URL("../../static/webstack.jpg", import.meta.url).href,
      content: '汽车的驾驶方式分为手动和自动两种，手动驾驶需要通过操纵离合器和变速器来改变车速和方向，而自动驾驶则通过电子系统来控制汽车的行驶。,',
      praise: '5',
      collect: false,
      time: "2023-3-14 14:25:49"
    },
    {
      id: '3',
      title: '标题三',
      img: new URL("../../static/bj.jpg", import.meta.url).href,
      content: '汽车的外观设计也是重要的考虑因素，不同的汽车品牌和车型具有各自独特的设计特点和风格，体现了制造商的品牌形象和创新能力。',
      praise: '5',
      collect: true,
      time: "2023-3-14 14:25:49"
    },
    {
      id: '4',
      title: '标题四',
      img: new URL("../../static/bj.jpg", import.meta.url).href,
      content: '汽车的发动机类型有多种，包括燃油发动机、电动发动机、混合动力发动机等，不同的发动机类型具有不同的性能和能源消耗特点。',
      praise: '5',
      collect: true,
      time: "2023-3-14 14:25:49"
    },
    {
      id: '5',
      title: '标题五',
      img: new URL("../../static/webstack.jpg", import.meta.url).href,
      content: '汽车的安全性能非常重要，包括车身结构、气囊、安全带、制动系统等都需要具备高水平的安全性能，以减少车辆事故的发生。',
      praise: '5',
      collect: true,
      time: "2023-3-14 14:25:49"
    },
  
  ],
  
  //热搜数据
  top_serarch: [
    {id: '1', name: 'vue训练', praise: '124' },
    {id: '2', name: 'php foreach', praise: '50'},
    {id: '3', name: 'css动画', praise: '40'},
    {id: '4', name: 'axios封装', praise: '20'},
  ]
})


</script>

<style scoped>
.item-content {
  color: #fff;
  left: 0;
  right: 0;
  top: 100px;
  bottom: 0;
  text-align: center;
  position: absolute;
  
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

/*.flower{*/
/*  width: 960px;*/
/*  height: 300px;*/
/*  !*border: 2px solid red;*!*/
/*  margin: 100px auto 0px;*/
/*}*/
.flower .item {
  width: 100%;
  height: 300px;
  /*background-color: springgreen;*/
  float: left;
  margin: 0px 0px;
  overflow: hidden;
  position: relative;
}

.item img {
  transition: transform ease .5s;
}

.item:hover img {
  transform: scale(1.2);
}

.item .item-mask {
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0px;
  top: 0px;
  transition: all ease .5s;
}

.item:hover .item-mask {
  transform: scale(0.8);
  background-color: rgba(0, 0, 0, 0.5);
  /*border: 5px solid #fff;*/
  box-shadow: 0 0 0 40px rgba(255, 255, 255, 0.5);
}

.item .item-title {
  /*border: 1px solid red;*/
  position: absolute;
  top: 80px;
  left: 100px;
  right: 100px;
  font-size: 18px;
  color: #fff;
  transform: scale(1.2);
  transition: all ease .5s;
  opacity: 0;
}

.item:hover .item-title {
  transform: scale(1);
  opacity: 1;
}

.item .item-info {
  /*border: 1px solid red;*/
  position: absolute;
  top: 110px;
  left: 100px;
  right: 100px;
  color: #fff;
  font-size: 14px;
  transform: scale(1.2);
  /*隐藏*/
  opacity: 0;
  transition: all ease .5s;
  
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.item:hover .item-info {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  transform: scale(1);
  opacity: 1;
}

.item .item-bottom {
  float: left;
  position: absolute;
  
  bottom: 70px;
  left: 100px;
  right: 100px;
  /*border: 1px solid red;*/
  /*color:red;*/
  /*background-color:beige;*/
  transform: scale(1.2);
  transition: all ease .5s;
  opacity: 0;
}

.item .item-bottom div {
  float: left;
  
  /*left: 100px;*/
  /*right: 100px;*/
  margin-left: 5px;
  color: red;
}

.item:hover .item-bottom {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  transform: scale(1);
  opacity: 1;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 20px;
}

.left-content {
  /*border: 1px solid yellow;*/
  width: 75%;
  height: 100%;
}

.right-content {
  float: right;
  width: 40%;
  height: 800px;
  /*border: 1px solid aqua;*/
  /*margin-left: 50px;*/
}

.right-content div {
  width: 100%;
  height: 300px;
  /*border: 1px solid red;*/
  margin-left: 50px;
  margin-top: 103px;
}

.right-content div img {
  width: 100%;
  height: 100%;
  /*margin-left: 50px;*/
  /*margin-top: 20px;*/
}

/*热搜榜*/
.news {
  background-color: rgba(0, 0, 0, 0.5);
  
  width: 360px;
  color: #fff;
  /*height: 400px;*/
  /*margin: 50px auto 0px;*/
  /*border: 1px solid #ddd;*/
  /*padding: 10px;*/
}

.news h3 {
  /*border: 1px solid red;*/
  font-size: 20px;
  margin-bottom: 10px;
}

.news ul {
  /*border: 1px solid #000;*/
  list-style: none;
  padding: 0px;
}

.news ul li {
  border-bottom: 1px dotted #ddd;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
}

.news ul li a {
  color: red;
  text-decoration: none;
}

.news ul li a:hover {
  color: red;
}

.news ul li span {
  margin-right: 10px;
  font-weight: bold;
}

.col1 {
  color: red;
}


.body-content {
  margin: auto;
  margin-top: 80px;
  width: 70%;
  height: 770px;
  /*border: 1px solid red;*/
  display: flex;

  overflow-x: hidden;/*隐藏x轴滚动条*/
}

.body-content::-webkit-scrollbar {
  display: none;
}
</style>