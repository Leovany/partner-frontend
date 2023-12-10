<template>
  <!--  导航栏-->
  <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <!-- 底部标签栏 -->
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item name="index" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item name="team" icon="search">队伍</van-tabbar-item>
    <van-tabbar-item name="user" icon="friends-o">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {showLoadingToast, showToast, Toast} from "vant";

const onClickLeft = () => {
  alert("左")
};
const onClickRight = () => {
  alert("右")
};

const active = ref('index');
// const onChange = (index) => showToast(`标签 ${index}`);
const onChange = (index) => {
  showToast(`标签 ${index}`);


};


</script>

<style scoped>

</style>