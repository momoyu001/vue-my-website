<template>
  <div class="layout-head-module flex">
    <div class="head-item left t-right flex">
      <div class="text" @click="toPage('/index')">momoyu</div>
    </div>
    <div class="head-item right flex">
      <div
        v-for="item in configList"
        :key="item.key"
        class="config-item"
        @click="toPage(item.router)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const configList: Record<string, string>[] = [
  { title: "面试", key: "interview", router: "/interview" },
  { title: "数据结构和算法", key: "algorithm", router: "/algorithm" },
  { title: "Javascript", key: "javascript", router: "/javascript" },
  { title: "Vue", key: "vue", router: "/vue" },
  { title: "react", key: "react", router: "/react" },
  { title: "源码", key: "code", router: "/sourceCode" },
  { title: "每日随笔", key: "random", router: "/daily" },
  { title: "其他", key: "other", router: "/other" },
];

const router = useRouter();

function toPage(route: string) {
  if (!route) return;
  router.push(route);
}
</script>

<style scoped lang="less">
.layout-head-module {
  align-items: center;
  height: 60px;
  box-shadow: 6px 3px 6px #d3d3d3;
  margin-bottom: 20px;
  .head-item {
    height: 60px;
    line-height: 60px;
    .config-item {
      padding: 5px 20px;
      cursor: pointer;
    }
  }
  .left {
    width: 200px;
    align-items: center;
    justify-content: flex-end;
    .text {
      font-size: 18px;
      font-weight: 600;
      height: 40px;
      line-height: 40px;
      padding-right: 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  .right {
    width: calc(100% - 200px);
    padding-right: 40px;
    justify-content: flex-end;
  }
}
</style>
