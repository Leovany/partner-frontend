<template>
  <!-- 组件内容 -->
  <van-card
      v-for="user in props.userList"
      :title="`${user.username} ( ${user.planetCode} )`"
      :desc="user.profile"
      :thumb="user.avatarUrl"
      tag="VIP"
  >
    <template #tags>
      <template v-for="tag in user.tags">
        <van-tag plain type="primary" style="margin: 10px 8px 0px 0px">{{ tag }}</van-tag>
      </template>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import {UserType} from "../models/user";

// 定义向外暴露的组件
interface UserCardListProps {
  userList:UserType[],
}

const props = withDefaults(defineProps<UserCardListProps>(),{
  // 设置默认值
  userList : [],
});

</script>


<style scoped>

</style>