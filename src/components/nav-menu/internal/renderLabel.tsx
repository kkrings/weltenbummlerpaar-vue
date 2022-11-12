import { RouterLink } from 'vue-router';

export function renderLabel(name: string, label: string) {
  return () => <RouterLink to={{ name }}>{label}</RouterLink>;
}
