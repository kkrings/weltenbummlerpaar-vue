<script setup lang="ts">
import { dateDeDE, deDE, NConfigProvider, NGlobalStyle } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/theme';
import { breakpoints } from '@/theme/breakpoints';

const { theme } = storeToRefs(useThemeStore());
</script>

<template>
  <n-config-provider
    :theme="theme"
    :locale="deDE"
    :date-locale="dateDeDE"
    :breakpoints="breakpoints"
  >
    <n-global-style />
    <slot></slot>
  </n-config-provider>
</template>
