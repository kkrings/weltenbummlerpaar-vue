/// <reference types="cypress" />

import type { MountingOptions, VueWrapper } from '@vue/test-utils';
import type { Component } from 'vue';
import type { Router } from 'vue-router';

type Options = Pick<MountingOptions<never>, 'global'> & {
  router?: Router;
};

declare global {
  namespace Cypress {
    interface Chainable {
      mount(component: Component, options?: Options): Chainable<VueWrapper>;
    }
  }
}
