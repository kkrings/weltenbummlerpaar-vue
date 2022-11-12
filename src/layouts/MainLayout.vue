<script setup lang="ts">
import { NLayout, NLayoutHeader } from 'naive-ui';
import { RouterView } from 'vue-router';
import { useLayout } from './internal/useLayout';
import LayoutTopbar from './internal/LayoutTopbar.vue';

const { layout, showSidebar, handleToggleShowSidebar } = useLayout();
</script>

<template>
  <n-layout position="absolute">
    <n-layout-header bordered>
      <LayoutTopbar @toggle:show-sidebar="handleToggleShowSidebar" />
    </n-layout-header>
    <component :is="layout" v-model:show-sidebar="showSidebar">
      <RouterView />
    </component>
  </n-layout>
</template>

<style scoped>
.n-layout-header {
  height: 3.25rem;
  padding: 0.5rem 1rem;
}
</style>
