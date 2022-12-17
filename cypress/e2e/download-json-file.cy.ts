import expected from '../fixtures/expectedResults.json'
import { HEADER_USER_BLOCK, USER_WIDGET } from './get-user.cy'

describe('Dowload json file ', () => {
    it('it should download json in folder inside project', () => {
        cy.visit(expected.SITE_URL)
        cy.get(`${USER_WIDGET + ' ' + HEADER_USER_BLOCK}`).as('btnApiUser')
        cy.get('@btnApiUser').click()
        cy.get(`${USER_WIDGET} div.no-margin div.try-out`).click()
        cy.get(`${USER_WIDGET} div.no-margin button.opblock-control__btn`).click()
        cy.get(`${USER_WIDGET} div.no-margin div.highlight-code .download-contents`).click()
    }) 
})