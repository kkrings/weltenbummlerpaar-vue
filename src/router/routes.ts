import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'diary-entries',
    path: '/tagebuch',
    component: HomeView,
  },
  {
    path: '/',
    redirect: { name: 'diary-entries' },
  },
];

export default routes;
