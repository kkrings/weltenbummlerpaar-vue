import { useDark } from '@vueuse/core';
import { darkTheme } from 'naive-ui';
import { defineStore, skipHydrate } from 'pinia';
import { computed } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const dark = useDark({ onChanged: () => {} });
  const theme = computed(() => (dark.value ? darkTheme : null));
  return { dark: skipHydrate(dark), theme };
});
