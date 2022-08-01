describe('ui: ButtonLoadingContainer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonloadingcontainer--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonLoadingContainer!');
    });
});
