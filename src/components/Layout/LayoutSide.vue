<template>
  <div class="layout-side-module">
    <div
      v-for="item in list"
      :key="item.name"
      class="side-item"
      :class="{ 'active-item': active === item.name }"
    >
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
const active = ref(list[0]?.name);

const emits = defineEmits(["change"]);

function clickItem(item: Record<string, any>) {
  const { name } = item;
  active.value = name;
  emits("change", name);
}
</script>

<style scoped lang="less">
.layout-side-module {
  height: 100%;
  box-sizing: border-box;
  width: 200px;
  border-right: 1px solid #e5e5e5;
  margin-right: 8px;
  .side-item {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    .side-item-txt {
      cursor: pointer;
    }
    &:hover {
      box-shadow: -3px 3px 3px #d1d1d1;
    }
    &.active-item {
      color: rgb(56, 136, 240);
    }
  }
}
</style>
