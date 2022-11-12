import { darkTheme } from 'naive-ui';
import { createPinia, setActivePinia, storeToRefs } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useThemeStore } from '@/stores/theme';

describe('useThemeStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('#theme should reference light theme', () => {
    const { dark, theme } = storeToRefs(useThemeStore());
    dark.value = false;
    expect(theme.value).toBeNull();
  });

  it('#theme should reference dark theme', () => {
    const { dark, theme } = storeToRefs(useThemeStore());
    dark.value = true;
    expect(theme.value).toEqual(darkTheme);
  });
});
