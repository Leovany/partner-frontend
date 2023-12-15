<template>
  <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
  />
  <van-divider content-position="left">已选择标签</van-divider>

  <!-- 设置垂直间距 -->
  <van-row>
    <van-col span="4" v-for="tag in activeIds">
      <van-tag closeable size="small" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>

    </van-col>


  </van-row>

  <!--  <van-tag type="primary">标签</van-tag>-->

  <van-divider content-position="left">选择标签</van-divider>
  <!--  分类选择-->
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

  <div style="padding:20px">
    <van-button block type="primary" @click="onSearchResutl">搜索</van-button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

var router = useRouter();

// 源数据
const originTagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
      {text: '其他', id: '其他', disabled: true},
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
      {text: '大四', id: '大四'},
      {text: '研究生', id: '研究生'},
      {text: '硕士生', id: '硕士生'},
    ],
  },
];

const activeIndex = ref(0);  // 第一级
const activeIds = ref([]); // 第二级

// 搜索词
const searchText = ref('');
// 标签列表
let tagList = ref(originTagList);


/**
 * 搜索过滤
 * @param val
 */
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => {
      // 包含搜索词
      return item.text.includes(searchText.value)
    });
    return tempParentTag;
  });
}

/**
 * 取消
 */
const onCancel = () => {
  searchText.value = '';
  activeIds.value = [];
  tagList.value = originTagList;
}


const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  });
}

const onSearchResutl = () => {
  router.push({
    path: "/user/list",
    query: {
      tags: activeIds.value
    }
  });
}

</script>

<style scoped>

</style>