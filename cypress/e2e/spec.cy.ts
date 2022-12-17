import expected from '../fixtures/expectedResults.json'


describe('visit url', () => {
  it('should navigate to URL & verify information', () => {
    cy.visit(expected.SITE_URL) 
    cy.url().should('be.equal', expected.SITE_URL)
    cy.get('div hgroup .title').should('have.text', expected.title)
    
  });
});
