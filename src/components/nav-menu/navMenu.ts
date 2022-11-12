import { createMenu } from './internal/createMenu';
import BookIcon from './icons/BookIcon';

export const navMenu = createMenu([
  {
    name: 'diary-entries',
    label: 'Tagebuch',
    icon: BookIcon,
  },
]);
