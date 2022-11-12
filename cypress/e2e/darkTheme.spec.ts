import { lightTheme } from 'naive-ui';

function prefersColorSchemeDark(contentWindow: Cypress.AUTWindow) {
  cy.stub(contentWindow, 'matchMedia')
    .withArgs('(prefers-color-scheme: dark)')
    .returns({
      matches: true,
      addEventListener: () => {},
    });
}

describe('dark theme; switch; reload', () => {
  beforeEach(() => {
    cy.clearLocalStorage('vueuse-color-scheme');
  });

  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: prefersColorSchemeDark,
    });
  });

  beforeEach(() => {
    cy.findByLabelText('Umschalten zwischen Dark- und Light-Modus').click();
  });

  beforeEach(() => {
    cy.reload();
  });

  it('should not have switched back to dark theme', () => {
    cy.expectTheme(lightTheme);
  });

  afterEach(() => {
    cy.clearLocalStorage('vueuse-color-scheme');
  });
});
