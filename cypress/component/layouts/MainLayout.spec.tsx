import MainLayout from '@/layouts/MainLayout.vue';

describe('MainLayout', () => {
  function menuButton() {
    return cy.findAllByLabelText('Navigation öffnen oder schließen');
  }

  describe('small device', () => {
    beforeEach(() => {
      cy.viewport('iphone-se2');
    });

    beforeEach(() => {
      cy.mount(<MainLayout />);
    });

    it('drawer should not have been rendered', () => {
      cy.get('.n-drawer').should('not.exist');
    });

    describe('click menu button', () => {
      beforeEach(() => {
        menuButton().click();
      });

      it('drawer should have been rendered', () => {
        cy.get('.n-drawer').should('be.visible');
      });
    });
  });

  describe('large device', () => {
    beforeEach(() => {
      cy.viewport('macbook-13');
    });

    beforeEach(() => {
      cy.mount(<MainLayout />);
    });

    it('sidebar should not have been collapsed', () => {
      cy.get('.n-layout-sider').should(
        'not.have.class',
        'n-layout-sider--collapsed'
      );
    });

    describe('click menu button', () => {
      beforeEach(() => {
        menuButton().click();
      });

      it('sidebar should have been collapsed', () => {
        cy.get('.n-layout-sider').should(
          'have.class',
          'n-layout-sider--collapsed'
        );
      });
    });
  });
});
