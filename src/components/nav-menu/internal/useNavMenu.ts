import type { MenuOption } from 'naive-ui';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export function useNavMenu(navMenu: MenuOption[]) {
  const activeKey = ref<string | number | null>(null);
  const route = useRoute();

  watchEffect(() => {
    const activeItem = navMenu
      .filter((item) => item.key === route.name)
      .shift();

    if (activeItem?.key) activeKey.value = activeItem.key;
  });

  return { activeKey };
}
