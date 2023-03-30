<template>
  <div class="floor">
    我是页脚
  </div>
</template>

<script>
export default {
  name: "floor"
}
</script>

<style scoped>
  .floor{
    width: 100%;			/*宽度为100%*/
    height: 70px;			/*高度度为70px*/
    background-color: #000;	/*背景颜色为黑色*/
    text-align: center;		/*内容居中*/
    line-height: 70px;
    margin: 0;
    color:red;				/*字体颜色*/
    /*放置的位置设置*/
    position: fixed;		/*1、【relative】相对定位；2、【absolute】绝对定位；3、【fixed】固定定位；4、【static】默认值；5、【sticky】粘性定位。*/
    left: 0px; 				/*定位：离页面左边0px的位置*/
    bottom: 0px;			/*定位：离页面底部0px的位置*/
    /*top: 92%;*/				/*定位：离页面顶部92%的位置*/
  }
</style>