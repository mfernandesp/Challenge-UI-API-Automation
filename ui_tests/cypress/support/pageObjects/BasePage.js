// <reference types="Cypress" />

//import BaseElements from '../elements/BaseElements.js'
//const baseElements = new BaseElements

const url = Cypress.config("baseUrl")

class BasePage {
    // Access Web Site
    accessSite() {
        cy.visit(url)
    }
}

export default BasePage;