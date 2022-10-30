<template>
  <div class="flex interview-page-module">
    <LayoutSide
      @change="change"
      :config="sidebarConfig['interview']"
    ></LayoutSide>
    <div class="content" ref="content">
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
import { sidebarConfig } from "../config";

import { ref } from "vue";

const componentId = ref("interviewModule");
const content = ref<InstanceType<any> | null>(null);

function change(name: string) {
  componentId.value = name;
  content.value.scrollTop = 0;
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
