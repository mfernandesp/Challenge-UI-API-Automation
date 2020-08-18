import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const url = Cypress.config("baseUrlAPI")
const userWithoutTitle = Cypress.config("userWithoutTitle")

let responseGet 
let responsePost
let user

When('I make the request GET users', function() {

    //Send the GET/users request
    cy.request('GET', (url + 'users')).then((response) => {
        responseGet = response
    })
    
})

When('I make the POST posts request using a userId got by GET users', function() {
    
    //Select a user from GET/users
    user = responseGet.body[0]

    //Send the selected user to POST/posts request
    cy.request('POST', url + 'posts', user).then((response) => {
        responsePost = response         
    })    
})

When('I make the POST posts request without entering the title', function() {

    //Send the user without tilte to POST/posts request
    cy.request('POST', url + 'posts', userWithoutTitle).then((response) => {
        responsePost = response         
    })        
})

Then('all returned users must have Name, Username and Email', function() {
    
    //Check if the user has Name, Username and Email
    for (var i in responseGet.body){
        expect(responseGet.body[i].name).to.not.be.null
        expect(responseGet.body[i].username).to.not.be.null
        expect(responseGet.body[i].email).to.not.be.null
    }
})

Then('all users must have valid email', function() {
    
    //Check if the user email is valid
    for (var i in responseGet.body){

        //Regular Expression to check email field
        var reEmail = /\S+@\S+\.\S+/;
        expect(responseGet.body[i].email).to.match(reEmail)
    }
})

Then('the system must return less than {int} characters for the campany > catchPhrase field', function(quantity) {
    
    //Check if the company.catchPhrase field is less than the number of characters indicated
    for (var i in responseGet.body){
         expect(responseGet.body[i].company.catchPhrase.length).to.be.lessThan(quantity)
    }
})

Then('the systems must insert the informed data', function(quantity) {

    //Check if the user was sent correctly    
    expect(JSON.stringify(responsePost.body)).to.be.equal(JSON.stringify(user))    
})

Then('the systems should return an error', function(quantity) {

    //Checks if the post without the title has not been saved. => Checks if the JSON returned empty.
    expect(JSON.stringify(responsePost.body)).to.be.equal('{}')
})