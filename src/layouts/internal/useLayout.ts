import { computed, ref } from 'vue';
import { useBreakpoints } from '@/composables/useBreakpoints';
import LargeDevice from './LargeDevice.vue';
import SmallDevice from './SmallDevice.vue';

export function useLayout() {
  const isSmallDevice = useBreakpoints().smaller('m');

  const layout = computed(() =>
    isSmallDevice.value ? SmallDevice : LargeDevice
  );

  const showSidebar = ref(!isSmallDevice.value);

  function handleToggleShowSidebar() {
    showSidebar.value = !showSidebar.value;
  }

  return {
    layout,
    showSidebar,
    handleToggleShowSidebar,
  };
}
