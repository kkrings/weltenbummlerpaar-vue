import NavMenu from '@/components/nav-menu/NavMenu.vue';

describe('NavMenu', () => {
  it('Tagebuch should have been selected', () => {
    cy.mount(() => <NavMenu />);

    cy.contains('.n-menu-item-content', 'Tagebuch').should(
      'have.class',
      'n-menu-item-content--selected'
    );
  });
});
