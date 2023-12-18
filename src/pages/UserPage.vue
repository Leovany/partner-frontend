<template>
  <template v-if="user">
    <van-cell title="头像">
      <img :src='user.avatarUrl' style="height: 48px"/>
    </van-cell>
    <van-cell title="昵称" is-link :value="user.username" @click="doClick('username','昵称',user.username)"/>
    <van-cell title="账号" is-link :value="user.userAccount" @click="doClick('userAccount','账号',user.userAccount)"/>
    <van-cell title="性别" is-link :value="user.gender" @click="doClick('gender','性别',user.gender)"/>
    <van-cell title="电话" is-link :value="user.phone" @click="doClick('phone','电话',user.phone)"/>
    <van-cell title="邮箱" is-link :value="user.email" @click="doClick('email','邮箱',user.email)"/>
    <van-cell title="编号" :value="user.planetCode"/>
    <van-cell title="注册时间" :value="user.createTime"/>
  </template>
</template>


<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {showFailToast, showToast} from "vant";
import myAxios from '../plugins/MyAxios';
import {getCurrentUser} from "../services/user.ts";


const router = useRouter();

// const user = ref({
//   id: 1,
//   username: '星河',
//   userAccount: 'Leovany',
//   avatarUrl: 'https://p3-passport.byteacctimg.com/img/user-avatar/c37ce093307b9b41d7197b041ad9be03~40x40.awebp',
//   gender: '男',
//   phone: '13000000000',
//   email: '123@qq.com',
//   planetCode: '123',
//   createTime: new Date(),
// });

const user = ref();

onMounted(async () => {
  user.value = await getCurrentUser();

});


const doClick = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: "/user/edit",
    query: {
      "editKey": editKey,
      "editName": editName,
      "currentValue": currentValue,
    }
  });
}


</script>


<style scoped>

</style>