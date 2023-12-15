<template>
  <van-card
      v-for="user in userList"
      :title="`${user.username} ( ${user.planetCode} )`"
      :desc="user.profile"
      :thumb="user.avatarUrl"
      tag="VIP"
  >
    <template #tags>
      <template v-for="tag in user.tags">
        <van-tag plain type="primary" style="margin: 10px 8px 0px 0px">{{tag}}</van-tag>
      </template>

    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import {ref} from "vue";

const userList = ref([{
  id: 1,
  username: '星河',
  userAccount: 'Leovany',
  profile: '一名程序猿，喜欢编码，巴拉巴拉巴巴拉巴拉巴巴，谢谢大家',
  avatarUrl: 'https://p3-passport.byteacctimg.com/img/user-avatar/c37ce093307b9b41d7197b041ad9be03~40x40.awebp',
  gender: '男',
  phone: '13000000000',
  email: '123@qq.com',
  planetCode: '123',
  tags: ['java', '打工中', '考研', '学习中'],
  createTime: new Date(),
}]);



</script>

<style scoped>

</style>