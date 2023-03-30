import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// import './assets/main.css'
import './styles/default.css'


// 导入路由模块
import router from './router/index.js'
//加载ant-design-vueui框架 https://2x.antdv.com/components/button-cn
import qs from 'qs'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

var app = createApp(App);

import axios from 'axios'
app.config.productionTip = false;
/* 挂载全局对象 start */
// 配置请求的跟路径
// axios.defaults.baseURL = 'http://127.0.0.1:80'
app.config.globalProperties.$http = axios;

// 挂载路由模块
app.use(router);

//挂在element
app.use(ElementPlus, {
    locale: zhCn,
  })

app.mount('#app');
