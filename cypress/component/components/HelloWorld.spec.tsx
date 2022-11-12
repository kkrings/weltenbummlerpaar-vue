import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('playground', () => {
    cy.mount(() => <HelloWorld message={'Hello Cypress'} />);
  });

  it('renders properly', () => {
    cy.mount(() => <HelloWorld message={'Hello Cypress'} />);
    cy.get('h1').should('contain', 'Hello Cypress');
  });
});
