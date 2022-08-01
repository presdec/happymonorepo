describe('ui: AccordionContent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=accordioncontent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AccordionContent!');
    });
});
