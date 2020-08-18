/* global Given, Then, When */

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import StorePage from '../pageObjects/StorePage'
import CartPage from '../pageObjects/CartPage'
import AuthenticationPage from '../pageObjects/AuthenticationPage'
import OrderingData from '../data/OrderingData'

const storePage = new StorePage
const cartPage = new CartPage
const authenticationPage = new AuthenticationPage

Given('that i access the Women store page', function() {
    storePage.accessSite();
    storePage.clickWomenMenu();
})

Given('I add a product to the cart', function() {    
    storePage.clickAddToCart();
    storePage.clickProceedCheckout();
})

When('confirm the my order summary', function() {    
    cartPage.clickProceedCheckout();
})

When('confirm the Order Delivery Address', function() {    
    cartPage.clickProceedCheckoutAddress();
})

When('confirm the Shipping Order', function() {  
    cartPage.clickTermsService();  
    cartPage.clickProceedCheckoutShipping();
})

When('log in with email valid email and password', function() {    
    authenticationPage.fillEmailLogin(OrderingData.emailValid);
    authenticationPage.fillPasswordLogin(OrderingData.passwordValid);
    authenticationPage.clickLogin();
})

When('choose the {string} payment method', function(method) {  

    if(method.includes('bank')){
        cartPage.clickPayBank();
    }else if(method.includes('check')){
        cartPage.clickPayCheck();
    }else{
        throw "Payment method informed not configured"
    }

    cartPage.clickConfirmOrder();
})

Then('the system should return the message {string}', function(message) {  
    cartPage.checkTextCart(message);
})
