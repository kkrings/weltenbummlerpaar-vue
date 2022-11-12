<script setup lang="ts">
import { NSpace } from 'naive-ui';
import DarkModeSwitch from '@/components/dark-mode-switch/DarkModeSwitch.vue';
import MenuButton from '@/components/menu-button/MenuButton.vue';

const emit = defineEmits<{
  (event: 'toggle:showSidebar'): void;
}>();

function handleMenuButtonClick() {
  emit('toggle:showSidebar');
}
</script>

<template>
  <n-space align="center" justify="space-between" :wrap="false">
    <MenuButton
      aria-label="Navigation öffnen oder schließen"
      @click="handleMenuButtonClick"
    />
    <DarkModeSwitch />
  </n-space>
</template>
