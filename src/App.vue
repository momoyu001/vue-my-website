<template>
  <div class="main-app-module">
    <div class="app-top"></div>
    <div class="app-main">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped lang="less">
.main-app-module {
  height: 100%;
  min-width: 800px;
  .app-top {
    height: 100px;
  }
  .app-main {
    height: calc(100% - 100px);
  }
}
</style>
