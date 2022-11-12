<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutSider } from 'naive-ui';
import NavMenu from '@/components/nav-menu/NavMenu.vue';

defineProps<{
  showSidebar: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:showSidebar', showSidebar: boolean): void;
}>();

function handleUpdateCollapsed(collapsed: boolean) {
  emit('update:showSidebar', !collapsed);
}
</script>

<template>
  <n-layout has-sider position="absolute" style="top: 3.25rem">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed="!showSidebar"
      :collapsed-width="64"
      :native-scrollbar="false"
      @update:collapsed="handleUpdateCollapsed"
    >
      <NavMenu :collapsed-width="64" />
    </n-layout-sider>
    <n-layout-content
      content-style="padding: 0.5rem 1rem"
      :native-scrollbar="false"
    >
      <slot></slot>
    </n-layout-content>
  </n-layout>
</template>
