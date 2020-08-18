// <reference types="Cypress" />

import CartElements from '../elements/CartElements.js'
import BasePage from './BasePage.js'

const cartElements = new CartElements
const url = Cypress.config("baseUrl")

class CartPage extends BasePage {
        
    //Click on "Proceed to checkout"
    clickProceedCheckout(){
        cy.get(cartElements.buttonProceedCheckout()).click()
    }
        
    //Click on "Proceed to checkout" to confirm Address
    clickProceedCheckoutAddress(){
        cy.get(cartElements.buttonProceedCheckoutAddress()).click()
    }

    //Click on "Proceed to checkout" to confirm Shipping
    clickProceedCheckoutShipping(){
        cy.get(cartElements.buttonProceedCheckoutShipping()).click()
    }
       
    //Click on "Pay by bank wire" option
    clickPayBank(){
        cy.get(cartElements.buttonPayBank()).click()
    }   

    //Click on "Pay by check" option
    clickPayCheck(){
        cy.get(cartElements.buttonPayCheck()).click()
    }

    //Click in "I agree to the terms of service and will adhere to them unconditionally."
    clickTermsService(){
        cy.get(cartElements.checkTermsService()).check()
    }  
    
    //Click on "I confirm my Order" option
    clickConfirmOrder(){
        cy.get(cartElements.buttonConfirmOrder()).click()
    }
    
    // Check the message returned in the Cart page
    checkTextCart(message) {
        cy.get(cartElements.textCart()).should('contain', message)
    }

}

export default CartPage;