<template>
  <UserCardList :user-list="userList"/>
  <van-empty v-if="userList === null || userList.length == 0" description="数据为空"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import myAxios from "../plugins/MyAxios.ts";

import {showToast} from "vant";
import UserCardList from "../components/UserCardList.vue";

const userList = ref([]);

onMounted(async () => {

  const userListData = await myAxios.get('/user/recommend', {})
      .then(function (response) {
        // console.log(response);
        return response?.data;
      })
      .catch(function (error) {
        // console.log(error);
        showToast("请求失败，error = " + error);
      })

      .finally(function () {
        // 总是会执行
      });

  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    });

    // userList.value = userListData;
  }


});

</script>


<style scoped>

</style>