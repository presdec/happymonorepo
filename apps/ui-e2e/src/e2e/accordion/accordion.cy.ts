describe('ui: AccordionDemo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=accordiondemo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AccordionDemo!');
    });
});
