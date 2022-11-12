<script setup lang="ts">
import { DarkModeOutlined, LightModeOutlined } from '@vicons/material';
import { NIcon, NSwitch } from 'naive-ui';
</script>

<template>
  <n-switch>
    <template #unchecked-icon>
      <n-icon><light-mode-outlined /></n-icon>
    </template>
    <template #checked-icon>
      <n-icon><dark-mode-outlined /></n-icon>
    </template>
  </n-switch>
</template>
