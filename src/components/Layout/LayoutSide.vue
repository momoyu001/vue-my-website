<template>
  <div class="layout-side-module">
    <div
      v-for="item in config"
      :key="item.name"
      class="side-item"
      :class="{ 'active-item': active === item.name }"
    >
      <div class="side-item-txt" @click="clickItem(item)">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  config: { title: string; name: string }[];
}

const props = withDefaults(defineProps<Props>(), {
  // config is required
});

const active = ref(props.config[0]?.name);

const emits = defineEmits(["change"]);

function clickItem(item: Record<string, any>) {
  const { name } = item;
  active.value = name;
  emits("change", name);
}
</script>

<style scoped lang="less">
.layout-side-module {
  height: 100%;
  box-sizing: border-box;
  width: 200px;
  border-right: 1px solid #e5e5e5;
  margin-right: 8px;
  .side-item {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    .side-item-txt {
      cursor: pointer;
    }
    &:hover {
      box-shadow: -3px 3px 3px #d1d1d1;
    }
    &.active-item {
      color: rgb(56, 136, 240);
    }
  }
}
</style>
