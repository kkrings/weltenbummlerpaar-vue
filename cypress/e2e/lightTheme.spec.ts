import { darkTheme } from 'naive-ui';

describe('light theme; switch; reload', () => {
  beforeEach(() => {
    cy.clearLocalStorage('vueuse-color-scheme');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.findByLabelText('Umschalten zwischen Dark- und Light-Modus').click();
  });

  beforeEach(() => {
    cy.reload();
  });

  it('should not have switched back to light theme', () => {
    cy.expectTheme(darkTheme);
  });

  afterEach(() => {
    cy.clearLocalStorage('vueuse-color-scheme');
  });
});
