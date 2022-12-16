const SITE_URL = 'https://fakerestapi.azurewebsites.net/index.html';
const ID = 1;

describe('Test on session USERS', () => {
  it('should navigate to URL & verify information', () => {
    const VERIFY_EXPECTED = {
      title: 'FakeRESTApi.Web V1 v1 OAS3',
    };
    cy.visit(SITE_URL) 
    cy.url().should('be.equal', SITE_URL)
    cy.get('div hgroup .title').should('have.text',VERIFY_EXPECTED.title)
  });

});
