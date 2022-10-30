<template>
  <div class="main-app-module">
    <div class="app-top">
      <LayoutHead></LayoutHead>
    </div>
    <div class="app-main">
      <HomeView v-if="pageName === '/index'"></HomeView>
      <LayoutMain v-else></LayoutMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import LayoutHead from "./components/Layout/LayoutHead.vue";
import LayoutMain from "./components/Layout/LayoutMain.vue";
import HomeView from "./views/HomeView.vue";

const pageName = ref<string | null>(null);
const route = useRoute();

watch(
  () => route.path,
  (nv: string) => (pageName.value = nv)
);
</script>

<style scoped lang="less">
.main-app-module {
  height: 100%;
  min-width: 800px;
  .app-main {
    height: calc(100% - 100px);
  }
}
</style>
