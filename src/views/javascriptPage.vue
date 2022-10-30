<template>
  <div class="flex javascript-page-module">
    <LayoutSide
      @change="change"
      :config="sidebarConfig['javaScript']"
    ></LayoutSide>
    <div class="content">
      <introduce v-if="componentId === 'introduction'"></introduce>
      <typeScriptCom v-else-if="componentId === 'typescript'"></typeScriptCom>
    </div>
  </div>
</template>

<script setup lang="ts">
import introduce from "../posts/javascript/introduction.md";
import typeScriptCom from "../posts/javascript/typescript.md";

import LayoutSide from "../components/Layout/LayoutSide.vue";
import { sidebarConfig } from "../config";

import { ref } from "vue";

const componentId = ref("introduction");

function change(name: string) {
  componentId.value = name;
}
</script>

<style lang="less" scoped>
.javascript-page-module {
  height: 100%;
  .content {
    flex: 1 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
