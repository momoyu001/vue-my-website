<template>
  <div class="layout-main-module">
    <div class="main-left">
      <LayoutSide></LayoutSide>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutSide from "./LayoutSide.vue";
</script>

<style scoped lang="less">
@topHeight: 100px;

.layout-main-module {
  height: 100%;
  display: flex;
  .main-left {
    flex: 0 0 200px;
    height: 100%;
    border-right: 1px solid #d3d3d3;
  }
  .main-right {
    flex: 1 1;
    height: 100%;
  }
}
</style>
