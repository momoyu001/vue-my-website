<template>
  <div class="flex other-page-module">
    <LayoutSide @change="change" :config="sidebarConfig['other']"></LayoutSide>
    <div class="content">
      <introduce v-if="componentId === 'introduction'"></introduce>
    </div>
  </div>
</template>

<script setup lang="ts">
import introduce from "../posts/other/introduction.md";
import LayoutSide from "../components/Layout/LayoutSide.vue";
import { sidebarConfig } from "../config";

import { ref } from "vue";

const componentId = ref("introduction");

function change(name: string) {
  componentId.value = name;
}
</script>

<style lang="less" scoped>
.other-page-module {
  height: 100%;
  .content {
    flex: 1 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
