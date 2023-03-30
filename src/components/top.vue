<template>
    <el-row :gutter="20">
        <el-col :span="2">
            <div class="grid-content ep-bg-purple">
                LOGO
            </div>
        </el-col>
        <el-col :span="15">
            <div class="grid-content ep-bg-purple">

            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">

            </div>
        </el-col>
    </el-row>















<!--    <el-menu :default-active="data.activeIndex" class="el-menu-demo" mode="horizontal" background-color="rgba(0 0 0 / 20%)" text-color="#858585" active-text-color="#FFFFFF" :ellipsis="false" @select="handleSelect" menu-trigger="hover" router>-->
<!--        <el-menu-item index="/">-->
<!--            <el-image :src="data.homeImage" style="height: 50px"></el-image>-->
<!--        </el-menu-item>-->

<!--        <div class="flex-grow"/>-->
<!--        <el-menu-item index="/">主页</el-menu-item>-->
<!--        <el-sub-menu index="2">-->
<!--            <template #title>文章分类</template>-->
<!--            <el-menu-item index="/Article">前端</el-menu-item>-->
<!--            <el-menu-item index="/Article">后端</el-menu-item>-->
<!--            <el-menu-item index="2-3">item three</el-menu-item>-->
<!--        </el-sub-menu>-->
<!--        <el-menu-item index="/friend">友链</el-menu-item>-->
<!--&lt;!&ndash;        <el-menu-item index="4" :style="{'pointer-events':'none','opacity':opacity}">个人中心</el-menu-item>&ndash;&gt;-->

<!--        <div v-if="data.personal_center">-->
<!--            <el-menu-item index="4" >个人中心</el-menu-item>-->
<!--        </div>-->


<!--        <el-row class="demo-avatar demo-basic">-->
<!--            <el-col :span="12">-->
<!--                <div class="demo-basic&#45;&#45;circle">-->
<!--                    <div class="block">-->
<!--                        <el-avatar :size="35" :src="circleUrl" />-->
<!--                    </div>-->
<!--                    <div v-for="size in sizeList" :key="size" class="block">-->
<!--                        <el-avatar :size="size" :src="circleUrl" />-->
<!--                    </div>-->
<!--                    <div class="sub-title">circle</div>-->
<!--                </div>-->


<!--            </el-col>-->
<!--        </el-row>-->

<!--        <el-input v-model="input3" class="w-50 m-2" size="small" placeholder="输入关键字查询" :suffix-icon="Search"/>-->

<!--        <div>-->
<!--            <div v-if="data.showname">-->
<!--                <el-menu-item index="/login" style="position:absolute;right: 10px" @click="change()">登陆</el-menu-item>-->
<!--            </div>-->
<!--            <div>-->
<!--                asdf-->
<!--            </div>-->
<!--        </div>-->



<!--    </el-menu>-->


</template>

<script setup lang="ts">
    import {ref, watchEffect,toRefs } from 'vue'
    import {Calendar, Search} from '@element-plus/icons-vue'

    //LOGO
    const homeImage = new URL("../static/webstack.jpg", import.meta.url).href;

    // const data = ref({
    //   isActive: true,
    //   name: '',
    //   divData:[
    //     '主页',
    //     '文章分类',
    //     '留言板',
    //     '友链',
    //     '我的收藏',
    //     '个人中心'
    //   ],
    //   input2:''
    // })
    //
    // const currentIndex = ref(0)
    // const liClick = (index) => {
    //   currentIndex.value = index;
    //   if (index == 0){
    //     routes.push('/')
    //   }
    //   if (index == 1){
    //     routes.push('/article')
    //   }
    // }

    const data = ref({
        activeIndex:1,
        personal_center:false,
        showname : false,
        homeImage: new URL("../static/webstack.jpg", import.meta.url).href,
        circleUrl:
            'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        squareUrl:
            'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        sizeList: ['small', '', 'large'] as const,
        input3:''
    })

    const { circleUrl, squareUrl, sizeList } = toRefs(data)

    watchEffect(()=>{
        if (JSON.parse(sessionStorage.getItem('user')) == null){
            //还没有登陆
            console.log(1)
        } else{
            //已经登陆
            data.showname = false
        }
        console.log('watchEffect所指定的回调执行了')
    })



    const dv = document.getElementById('dv');
    const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>


<style>
    @import '../styles/theme/top.css';

    .demo-basic {
        text-align: center;
    }
    .demo-basic .sub-title {
        margin-bottom: 10px;
        font-size: 14px;
        color: var(--el-text-color-secondary);
    }
    .demo-basic .demo-basic--circle,
    .demo-basic .demo-basic--square {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .demo-basic .block:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
    }
    .demo-basic .block {
        flex: 1;
    }
    .demo-basic .el-col:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
    }


    .el-menu {
        /*opacity: 1;*/
        position: fixed;
        width: 100%;
        top: 0px;

    }

    .flex-grow {
        margin-left: 10%;
        flex-grow: 0;
    }

    .el-input__wrapper {
        background-color: rgb(94 94 94 / 40%);

    }

    .el-sub-menu__title {
        background-color: rgb(58 58 58 / 20%);

    }

    .el-input--small {
        position: absolute;
        /*margin-left: 30%;*/
        width: max-content;
        right: 100px;
        height: 58px;
    }

    .el-input--small .el-input__wrapper {
        box-shadow: none;
    }

    .el-input--small .el-input__wrapper .el-input__inner {
        color: black;
    }


    .el-menu {
        /*position: fixed;*/
    }


</style>