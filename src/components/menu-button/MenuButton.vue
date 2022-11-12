<script setup lang="ts">
import { MenuOutlined } from '@vicons/material';
import { NButton, NIcon } from 'naive-ui';
</script>

<template>
  <n-button circle quaternary>
    <template #icon>
      <n-icon><menu-outlined /></n-icon>
    </template>
  </n-button>
</template>
