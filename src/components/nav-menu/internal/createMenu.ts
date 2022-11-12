import type { MenuOption } from 'naive-ui';
import type { NavItem } from './types/NavItem';
import { renderLabel } from './renderLabel';

export const createMenu = (items: NavItem[]): MenuOption[] =>
  items.map((item) => ({
    key: item.name,
    label: renderLabel(item.name, item.label),
    icon: item.icon,
  }));
