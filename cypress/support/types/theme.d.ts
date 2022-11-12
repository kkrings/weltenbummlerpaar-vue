/// <reference types="cypress" />

import type { GlobalTheme } from 'naive-ui';

declare global {
  namespace Cypress {
    interface Chainable {
      expectTheme(theme: GlobalTheme): Chainable<void>;
    }
  }
}
