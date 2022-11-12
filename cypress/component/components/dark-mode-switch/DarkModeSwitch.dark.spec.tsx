import { darkTheme, lightTheme } from 'naive-ui';
import DarkModeSwitch from '@/components/dark-mode-switch/DarkModeSwitch.vue';

function prefersColorSchemeDark() {
  cy.stub(window, 'matchMedia')
    .withArgs('(prefers-color-scheme: dark)')
    .returns({
      matches: true,
      addEventListener: () => {},
    });
}

describe('DarkModeSwitch (dark theme)', () => {
  beforeEach(() => {
    prefersColorSchemeDark();
  });

  beforeEach(() => {
    cy.clearLocalStorage('vueuse-color-scheme');
  });

  beforeEach(() => {
    cy.mount(<DarkModeSwitch />);
  });

  beforeEach(() => {
    cy.findByLabelText('Umschalten zwischen Dark- und Light-Modus').as(
      'darkModeSwitch'
    );
  });

  it('should have been switched on', () => {
    cy.get('@darkModeSwitch').should('have.attr', 'aria-checked', 'true');
  });

  it('dark theme should have been applied', () => {
    cy.expectTheme(darkTheme);
  });

  describe('switch', () => {
    beforeEach(() => {
      cy.get('@darkModeSwitch').click();
    });

    it('should have been switched off', () => {
      cy.get('@darkModeSwitch').should('have.attr', 'aria-checked', 'false');
    });

    it('light theme should have been applied', () => {
      cy.expectTheme(lightTheme);
    });
  });

  afterEach(() => {
    cy.clearLocalStorage('vueuse-color-scheme');
  });
});
