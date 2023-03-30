<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="flex-col">
        <div class="cursor-pointer mx-auto header-img">
          <el-image :src="xiaologo" style="height: 88px;border-radius: 50%;"></el-image>
          <p class="font-bold text-xl">Hi，我是おう，欢迎大家~~</p>
        </div>
      </div>
    </div>
    <div class="bottem-content">
      <div class="friend-link">
        <h4>友联</h4>
      </div>
      <div class="error-img">
        <el-image :src="errorImg"></el-image>
      </div>
    </div>
  </div>
</template>

<script setup>

const xiaologo = new URL("../../assets/xiaologo.jpg", import.meta.url).href;
const errorImg = new URL("../../assets/o7pMkek63B.png", import.meta.url).href;

</script>

<style scoped>
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;

  margin: 0 auto;
  width: 293px;
  margin-left: -80px;
  
}
.justify-center {
  /*height: 484px;*/
  margin: 32px 32px 32px 32px;
}

.justify-center .flex-col {
  width: 292px;
  height: 116px;
  margin-left: auto;
  margin-right: auto;
}

.header-img{
  margin-left: auto;
  margin-right: auto;
  width: 88px;
  height: 88px;
}
.el-image {
  width: 100%;
  height: 100%;
}
.bottem-content{
  height: 368px;
  margin: -32px 32px 0 32px;
  /*margin: ;*/
}
.friend-link{
  border-left: 4px solid #0960bd;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 600;
}

.bottem-content h4{
  padding: 0;
  margin: 0;
}
.error-img{
  width: 560px;
  margin: 0 auto;
}

.w-full {
  --tw-bg-opacity: .5;
  background-color: rgba(255,255,255,var(--tw-bg-opacity));
  width: 75%;
  height: 600px;
  /*margin-top: 48px;*/
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  margin: 80px auto;
}
</style>