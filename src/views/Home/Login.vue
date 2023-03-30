<template>
  <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="rgba(0 0 0 / 20%)"
          text-color="#858585"
          active-text-color="#FFFFFF"
          :ellipsis="false"
          @select="handleSelect"
          menu-trigger="hover"
          router
  >
    <el-menu-item index="/">
      <el-image :src="homeImage" style="height: 50px"></el-image>
    </el-menu-item>


  </el-menu>
  <div class="relative">
    
    <div class="items-center">
      <div class="absolute">
        <h1 style="">LOGO</h1>
        
        <el-form :model="form">
          <el-input class="inputDeep" v-model="name" placeholder="用户名或手机号"/>
          <el-input class="inputDeep" v-model="password" placeholder="请输入密码"/>
          <el-form-item>
            <el-button class="login" type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
        
        <el-button class="wanji">忘记密码</el-button>
      </div>
    
    </div>
    
    <div class="right-content">
      <h2>欢迎光临小屋</h2>
      <div>
        <el-image :src="gif"></el-image>
      </div>
      <el-button class="regiset" style="margin-top: 30px">去注册</el-button>
<!--      <el-button class="regiset">没有账号</el-button>-->

    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted,getCurrentInstance } from "vue";
import { getData } from '../../api/index'
import router from '../../router/index'

//LOGO
const homeImage = new URL("../../static/webstack.jpg", import.meta.url).href;
const gif = new URL("../../static/cat.b0d91952.gif", import.meta.url).href;
const { proxy } = getCurrentInstance()
const name = ref('周一飞')
const password = ref('123456')

const onSubmit = () => {
  const data = {
    name:name.value,
    password:password.value
  }

  getData(data).then((res) => {
    if (res.data.meta.status == 200){
      sessionStorage.setItem('user',JSON.stringify(res))

      proxy.$message.success(res.data.meta.msg)
      router.push('/')
    }else{

      proxy.$message.error(res.data.meta.msg)

    }
  })
}

</script>

<style scoped>
.right-content h2{
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgba(167,139,250,var(--tw-text-opacity));
}

.inputDeep {
  border: none;
  background: linear-gradient(to right, #b5eeba67, #756aee62, #df827881, #c77be780, #89ebe170, #e2e27d94);
  height: 35px;
  margin: 10px auto;
  width: 75%;
}

/*.el-input{*/
/*  height: 35px;*/
/*  margin:10px auto;*/
/*  width: 75%;*/
/*  background: linear-gradient(to right,#b5eeba67,#756aee62,#df827881,#c77be780,#89ebe170,#e2e27d94);*/
/*}*/

.login {
  margin: 10px auto;
  height: 45px;
  width: 75%;
  background-color: #a262ad !important;
  color: #f6f6f6 !important;
  transition: background-color .5s ease !important;
}

.wanji {
  width: 100px;
  height: 35px;
  margin: 40px;
  display: flex;
  background: none;
  border: none;
}

.absolute {
  /*border: 1px solid black;*/
  height: 342px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.items-center {
  width: 20rem;
  height: 30rem;
  /*border: 1px solid red;*/
  margin-top: -42px;
  --tw-bg-opacity: .8;
  
  background: linear-gradient(to right, #b5eeba67, #756aee62, #df827881, #c77be780, #89ebe170, #e2e27d94);
  background-size: 500%;
  animation: gradual 17s linear infinite;
  box-shadow: 2px 0 10px #0000001a;
  
  transition: all .5s ease-in-out;
  /*left: 1.25rem;*/
  justify-content: center;
  align-items: center;
  margin-left: 15px;
}

.absolute {
  text-align: center;
}

.relative {
  width: 40rem;
  height: 27.5rem;
  --tw-bg-opacity: .8;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 5px #0000001a;
  
}

.right-content{
  /*border: 1px solid red;*/
  width: 15rem;
  height: 25rem;
  position:absolute;
  right:15px;
  top: 20px;
  text-align: center;
}
.bg-white\/80 {

}
</style>