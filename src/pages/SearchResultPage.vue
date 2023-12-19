<template>
<!--  <van-card-->
<!--      v-for="user in userList"-->
<!--      :title="`${user.username} ( ${user.planetCode} )`"-->
<!--      :desc="user.profile"-->
<!--      :thumb="user.avatarUrl"-->
<!--      tag="VIP"-->
<!--  >-->
<!--    <template #tags>-->
<!--      <template v-for="tag in user.tags">-->
<!--        <van-tag plain type="primary" style="margin: 10px 8px 0px 0px">{{ tag }}</van-tag>-->
<!--      </template>-->
<!--    </template>-->
<!--    <template #footer>-->
<!--      <van-button size="mini">联系我</van-button>-->
<!--    </template>-->
<!--  </van-card>-->
  <!-- 组件 -->
  <UserCardList :user-list="userList" />

  <van-empty v-if="userList === null || userList.length == 0" description="搜索结果为空"/>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import qs from 'qs';
import myAxios from '../plugins/MyAxios';
import {useRoute} from "vue-router";
import {showToast} from "vant";
import UserCardList from "../components/UserCardList.vue";

const userList = ref([]);

// mock测试数据
// const userList = ref([{
//   id: 1,
//   username: '星河',
//   userAccount: 'Leovany',
//   profile: '一名程序猿，喜欢编码，巴拉巴拉巴巴拉巴拉巴巴，谢谢大家',
//   avatarUrl: 'https://p3-passport.byteacctimg.com/img/user-avatar/c37ce093307b9b41d7197b041ad9be03~40x40.awebp',
//   gender: '男',
//   phone: '13000000000',
//   email: '123@qq.com',
//   planetCode: '123',
//   tags: ['java', '打工中', '考研', '学习中'],
//   createTime: new Date(),
// }]);

var route = useRoute();
const tags = route.query.tags;

onMounted(async () => {
  console.log("进入 SearcheResultPage");
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
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
  console.log("userListData", userListData);
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    });

    userList.value = userListData;
  }


});

</script>

<style scoped>

</style>