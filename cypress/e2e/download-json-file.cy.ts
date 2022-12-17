import expectedVerify from '../fixtures/expectedResults.json'
import { HEADER_USER_BLOCK, USER_WIDGET } from '../utils/constant'

describe('Dowload json file ', () => {
    it('it should download json & store in downloads directory ', () => {
        cy.visit(expectedVerify.SITE_URL)
        cy.get(`${USER_WIDGET + ' ' + HEADER_USER_BLOCK}`).as('btnApiUser')
        cy.get('@btnApiUser').click()
        cy.get(`${USER_WIDGET} div.no-margin div.try-out`).click()
        cy.get(`${USER_WIDGET} div.no-margin button.opblock-control__btn`).click()
        cy.get(`${USER_WIDGET} div.no-margin div.highlight-code .download-contents`).should("be.visible").click()
        cy.wait(2000);
        cy.task('countFiles', 'cypress/downloads').then((count) => { 
            expect(count).eq(1)

        })
    }) 
})