<template>
  <div class="flex javascript-page-module">
    <LayoutSide
      @change="change"
      :config="sidebarConfig['javaScript']"
    ></LayoutSide>
    <div class="content">
      <introduce v-if="componentId === 'introduction'"></introduce>
      <typeScriptCom v-else-if="componentId === 'typescript'"></typeScriptCom>
      <ProxyAndReflectAndDecorator
        v-else-if="componentId === 'proxy&reflect&decorator'"
      ></ProxyAndReflectAndDecorator>
      <JSCode v-else-if="componentId === 'JSCode'"></JSCode>
      <JSNote v-else-if="componentId === 'JSNote'"></JSNote>
    </div>
  </div>
</template>

<script setup lang="ts">
import introduce from "../posts/javascript/introduction.md";
import typeScriptCom from "../posts/javascript/typescript.md";
import ProxyAndReflectAndDecorator from "../posts/javascript/Proxy&Reflect&装饰器.md";
import JSCode from "../posts/javascript/JS手写题.md"; // JS 手写题
import JSNote from "../posts/javascript/JS笔记.md"; // JS 笔记

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
