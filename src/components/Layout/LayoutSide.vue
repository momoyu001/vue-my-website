<template>
  <div class="layout-side-module">
    <div v-for="item in tempRouter" :key="item.path" class="side-item">
      <div class="side-item-txt">{{ item.meta && item.meta.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tempRouter: Record<string, any>[] = [
  { path: "/1", component: "", meta: { title: "测试一" } },
  { path: "/2", component: "", meta: { title: "测试二" } },
  { path: "/3", component: "", meta: { title: "测试三" } },
];
</script>

<style scoped lang="less">
.layout-side-module {
  padding-top: 10px;
  padding-left: 20px;
  box-sizing: border-box;
  width: 200px;
  .side-item {
    height: 40px;
    line-height: 40px;
    .side-item-txt {
      height: 20px;
      cursor: pointer;
    }
  }
}
</style>
