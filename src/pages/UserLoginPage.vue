<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">

import {ref} from "vue";
import myAxios from "../plugins/MyAxios.ts";
import {showFailToast, showToast} from "vant";
import {useRouter} from "vue-router";

const userAccount = ref('');
const userPassword = ref('');

const router = useRouter();

const onSubmit = async (values) => {
  console.log('submit', values);

  const res = await myAxios.post('/user/login',{
    userAccount : userAccount.value,
    userPassword:userPassword.value
  });

  if(res.code == 0 && res.data){
    showToast("登录成功");
    router.replace("/");
  }else{
    showFailToast("登录失败，错误信息：" + res.message);
  }

};

</script>

<style scoped>

</style>