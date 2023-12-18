<template>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入 ${editUser.editName}`"
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
import {useRoute, useRouter} from "vue-router";
import myAxios from '../plugins/MyAxios';
import {showFailToast, showToast, Toast} from "vant";
import {getCurrentUser,reqRemoteCurrentUser} from "../services/user.ts";

const route = useRoute();
const router = useRouter();

const editUser = ref({
  "editKey": route.query.editKey,
  "editName": route.query.editName,
  "currentValue": route.query.currentValue,
});

const onSubmit = async (formData) => {
  const currentUser = await getCurrentUser();
  if(!currentUser){
    showFailToast("用户未登录");
    return;
  }
  console.log("UserEditPage::onSubmit,", currentUser);
  const res = await myAxios.post('/user/update', {
    id: currentUser.id,
    [editUser.value.editKey]: editUser.value.currentValue
  });

  if (res.code === 0 && res.data > 0) {
    showToast('修改成功');
    await reqRemoteCurrentUser();
    router.back();
  } else {
    showFailToast('修改错误');
  }


}
</script>


<style scoped>

</style>