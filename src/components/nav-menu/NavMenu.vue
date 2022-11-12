<script setup lang="ts">
import { NMenu } from 'naive-ui';
import { navMenu } from './navMenu';
import { useNavMenu } from './internal/useNavMenu';

const { activeKey } = useNavMenu(navMenu);
</script>

<template>
  <n-menu v-model:value="activeKey" :options="navMenu" />
</template>
