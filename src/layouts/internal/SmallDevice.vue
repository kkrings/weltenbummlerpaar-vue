<script setup lang="ts">
import { NDrawer, NLayoutContent } from 'naive-ui';
import NavMenu from '@/components/nav-menu/NavMenu.vue';

defineProps<{
  showSidebar: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:showSidebar', showSidebar: boolean): void;
}>();

function handleUpdateShow(show: boolean) {
  emit('update:showSidebar', show);
}
</script>

<template>
  <n-drawer
    placement="left"
    :show="showSidebar"
    :native-scrollbar="false"
    @update-show="handleUpdateShow"
  >
    <NavMenu />
  </n-drawer>
  <n-layout-content
    content-style="padding: 0.5rem 1rem"
    position="absolute"
    style="top: 3.25rem"
    :native-scrollbar="false"
  >
    <slot></slot>
  </n-layout-content>
</template>
