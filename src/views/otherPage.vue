<template>
  <div class="flex other-page-module">
    <LayoutSide @change="change" :config="sidebarConfig['other']"></LayoutSide>
    <div class="content">
      <introduce v-if="componentId === 'introduction'"></introduce>
      <established v-else-if="componentId === 'established'"></established>
      <webpack v-else-if="componentId === 'webpack'"></webpack>
      <htmlAndCss v-else-if="componentId === 'html&css'"></htmlAndCss>
    </div>
  </div>
</template>

<script setup lang="ts">
import introduce from "../posts/other/introduction.md";
import established from "../posts/other/established.md";
import webpack from "../posts/other/webpack.md";
import htmlAndCss from "../posts/other/html&css.md"; // html & css 笔记

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
