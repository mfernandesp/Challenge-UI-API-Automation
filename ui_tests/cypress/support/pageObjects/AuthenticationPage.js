// <reference types="Cypress" />

import AuthenticationElements from '../elements/AuthenticationElements.js'
import BasePage from './BasePage.js'

const authenticationElements = new AuthenticationElements
const url = Cypress.config("baseUrl")

class AuthenticationPage extends BasePage{
   
    // Click on Sig In button
    clickSingIN() {
        cy.get(authenticationElements.buttonSignIN()).click()
    }

    // Click on Sig In button
    clickCreateAccount() {
        cy.get(authenticationElements.buttonCreateAccount()).click()
    }

    // Click on Sig In (Login) button
    clickLogin() {
        cy.get(authenticationElements.buttonLogin()).click()
    }

    // Fill in the Email in the Create Account section
    fillEmailCreate(email) {
        cy.get(authenticationElements.fieldEmailCreate()).type(email)
    }
    
    // Fill in the Email in the Login section
    fillEmailLogin(email) {
        cy.get(authenticationElements.fieldEmailLogin()).type(email)
    }
     
    // Fill in the Password in the Login section
    fillPasswordLogin(email) {
        cy.get(authenticationElements.fieldPasswordLogin()).type(email)
    }
  
    // Check the error message returned in the Create Account session- Pode ser generico
    checkErrorMenssage(message) {
        cy.get(authenticationElements.menssageErrorCreateAccount()).should('contain', message)
    }
}

export default AuthenticationPage;