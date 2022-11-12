<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/theme';
import DarkModeSwitchBase from './internal/DarkModeSwitchBase.vue';

const { dark } = storeToRefs(useThemeStore());
</script>

<template>
  <DarkModeSwitchBase
    v-model:value="dark"
    aria-label="Umschalten zwischen Dark- und Light-Modus"
  />
</template>
