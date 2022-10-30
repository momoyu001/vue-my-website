<template>
  <div class="layout-side-module">
    <div v-for="item in list" :key="item.name" class="side-item">
      <div class="side-item-txt" @click="clickItem(item)">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sidebarConfig } from "../../config";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentPath = ref(route.path);
const list = sidebarConfig[currentPath.value ? currentPath.value.slice(1) : ""];

const emits = defineEmits(["change"]);

function clickItem(item: Record<string, any>) {
  const { name } = item;
  emits("change", name);
}
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
