describe('ui: ButtonRoot component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonroot--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonRoot!');
    });
});
