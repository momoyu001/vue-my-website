<template>
  <div class="flex algorithm-page-module">
    <LayoutSide
      @change="change"
      :config="sidebarConfig['algorithm']"
    ></LayoutSide>
    <div class="content">
      <introduce v-if="componentId === 'introduction'"></introduce>
      <note v-else-if="componentId === 'note'"></note>
    </div>
  </div>
</template>

<script setup lang="ts">
import introduce from "../posts/algorithm/introduction.md";
import note from "../posts/algorithm/算法笔记.md";

import LayoutSide from "../components/Layout/LayoutSide.vue";
import { sidebarConfig } from "../config";

import { ref } from "vue";

const componentId = ref("introduction");

function change(name: string) {
  componentId.value = name;
}
</script>

<style lang="less" scoped>
.algorithm-page-module {
  height: 100%;
  .content {
    flex: 1 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
