<template>
  <div class="flex vue-page-module">
    <LayoutSide @change="change" :config="sidebarConfig['vue']"></LayoutSide>
    <div class="content">
      <introduce v-if="componentId === 'introduction'"></introduce>
      <vueClassComponent
        v-else-if="componentId === 'vueClassComponent'"
      ></vueClassComponent>
      <vue3 v-else-if="componentId === 'vue3'"></vue3>
    </div>
  </div>
</template>

<script setup lang="ts">
import introduce from "../posts/vue/introduction.md";
import vueClassComponent from "../posts/vue/vueClassComponent.md";
import vue3 from "../posts/vue/vue3学习笔记.md";

import LayoutSide from "../components/Layout/LayoutSide.vue";
import { sidebarConfig } from "../config";

import { ref } from "vue";

const componentId = ref("introduction");

function change(name: string) {
  componentId.value = name;
}
</script>

<style lang="less" scoped>
.vue-page-module {
  height: 100%;
  .content {
    flex: 1 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
