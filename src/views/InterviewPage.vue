<template>
  <div class="flex interview-page-module">
    <LayoutSide @change="change"></LayoutSide>
    <div class="content">
      <interviewModule
        v-if="componentId === 'interviewModule'"
      ></interviewModule>
      <interviewCompany
        v-else-if="componentId === 'interviewCompany'"
      ></interviewCompany>
    </div>
  </div>
</template>

<script setup lang="ts">
import interviewModule from "../posts/interview/interviewByModule.md";
import interviewCompany from "../posts/interview/interviewByCompany.md";
import LayoutSide from "../components/Layout/LayoutSide.vue";

import { ref } from "vue";

const componentId = ref("interviewModule");

function change(name: string) {
  componentId.value = name;
}
</script>

<style lang="less" scoped>
.interview-page-module {
  height: 100%;
  .content {
    flex: 1 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
