Cypress.Commands.add('expectTheme', (theme) => {
  cy.get('body')
    .should('have.css', 'color')
    .and('be.colored', theme.common?.textColor2 ?? '#fff');

  cy.get('body')
    .should('have.css', 'background-color')
    .and('be.colored', theme.common?.bodyColor ?? '#000');
});

export {};
