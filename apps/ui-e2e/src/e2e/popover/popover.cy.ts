describe('ui: Popover component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=popover--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Popover!');
    });
});
