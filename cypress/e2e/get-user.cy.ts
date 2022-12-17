import expected from '../fixtures/expectedResults.json'
const ID = 1;
const USER_WIDGET = 'div .wrapper section.block.col-12 #operations-Users-get_api_v1_Users'
const HEADER_USER_BLOCK = '.opblock-summary-get span.opblock-summary-path[data-path="/api/v1/Users"]'

describe('GET username & password API', () => {
    it('should return username & password from API by interact with button', () => {

        cy.visit(expected.SITE_URL)
        cy.get(`${USER_WIDGET + ' ' + HEADER_USER_BLOCK}`).as('btnApiUser')
        cy.get('@btnApiUser').click()
        cy.get(`${USER_WIDGET} div.no-margin div.try-out`).click()
        cy.get(`${USER_WIDGET} div.no-margin button.opblock-control__btn`).click()

        cy.request('GET', `/Users`).then((response) => {
            expect(response.body.length).to.deep.equal(expected.length+1);
        });

        cy.request('GET', `/Users/${ID}`).then((response) => {
            expect(response.body).to.deep.equal(expected.userExpected);
        });
    });

})