<template>
  <!--  顶部导航栏-->
  <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>
  <!-- 中间内容：通过路由动态加载  -->
  <div id="content">
    <router-view/>
  </div>


  <!-- 底部标签栏 -->
  <!--  <van-tabbar v-model="active" @change="onChange" >-->
  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import {showToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter();


const onClickLeft = () => {
  // 返回上一页
  router.back();
};
const onClickRight = () => {
  router.push("/search");
};

const onChange = (index) => {
  showToast(`标签 ${index}`);


};


</script>

<style scoped>
#content {
  padding-bottom: 50px;
}
</style>