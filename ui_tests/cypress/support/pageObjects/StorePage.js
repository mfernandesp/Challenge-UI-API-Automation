// <reference types="Cypress" />

import StoreElements from '../elements/StoreElements.js'
import BasePage from './BasePage.js'

const storeElements = new StoreElements
const url = Cypress.config("baseUrl")

class StorePage extends BasePage {
    
    //Click on "Women" store menu
    clickWomenMenu() {
        cy.get(storeElements.buttonWomenMenu()).click()
    }

    //Click on "Add to cart" to the first produtct found
    clickAddToCart(){
        cy.get(storeElements.buttonAddToCart()).click()
    }
    
    //Click on "Proceed to checkout"
    clickProceedCheckout(){
        cy.get(storeElements.buttonProceedCheckout()).click()
    }

}

export default StorePage;