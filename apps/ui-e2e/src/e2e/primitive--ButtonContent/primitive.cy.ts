describe('ui: ButtonContent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncontent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonContent!');
    });
});
