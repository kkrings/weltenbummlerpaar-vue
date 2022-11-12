import { mount } from 'cypress/vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import NaiveUI from '@/components/naive-ui/NaiveUI.vue';
import routes from '@/router/routes';
import pinia from '@/stores';

Cypress.Commands.add('mount', (component, options = {}) => {
  const router =
    options.router ||
    createRouter({
      history: createMemoryHistory(),
      routes,
    });

  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];
  options.global.plugins.push(pinia);
  options.global.plugins.push({ install: (app) => app.use(router) });
  options.router = router;

  mount(
    () => (
      <NaiveUI>
        <component is={component} />
      </NaiveUI>
    ),
    options
  );
});

export {};
