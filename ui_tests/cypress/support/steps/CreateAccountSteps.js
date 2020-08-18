/* global Given, Then, When */

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AuthenticationPage from '../pageObjects/AuthenticationPage'
import CreateAccountData from '../data/CreateAccountData'

const authenticationPage = new AuthenticationPage

Given('that i access the Authentication page', function() {
    authenticationPage.accessSite();
    authenticationPage.clickSingIN();
})

When('i fill the Email address field with invalid email', function () {
    authenticationPage.fillEmailCreate(CreateAccountData.invalidEmailExemple);
})

When('i fill the Email address field with a email already used', function () {
    authenticationPage.fillEmailCreate(CreateAccountData.usedEmailExemplo);
})

When('i fill the Email address field with invalid email', function () {
    authenticationPage.fillEmailCreate(CreateAccountData.validEmailExemple);
})

When('i click on Create an account button', function() {
    authenticationPage.clickCreateAccount();
})

Then('the system must retunrs the erro {string}', function(message) {
    authenticationPage.checkErrorMenssage(message);
})