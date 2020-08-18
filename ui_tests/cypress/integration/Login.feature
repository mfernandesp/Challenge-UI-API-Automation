Feature: Login
 As a customer
 I want to log into my account
 So that I can place and track orders

   @Priority_High @Not_Implemented
   Scenario: Login in to my account
     Given that i access the Authentication page
      When fill the Email address field with "teste@emai.com"
      And fill the Password field with "teste123"
      And i click on "Sing in" button
      Then the customer must be redirected to the My Account page
      And the "View my customer account" button must be displayed with the customer's name
   
   @Priority_Medium @Not_Implemented
   Scenario: Try to login with the wrong password
     Given that i access the Authentication page
      When fill the Email address field with "teste@emai.com"
      And fill the Password field with "invalid"
      And i click on "Sing in" button
      Then the system must retunrs the erro "Authentication failed."

   @Priority_Medium @Not_Implemented   
   Scenario: Try to sign in without entering an email
     Given that i access the Authentication page
      When I do not fill in the email field
      And i click on "Sing in" button
      Then the system must retunrs the erro "An email address required."

   @Priority_Medium @Not_Implemented
   Scenario: Try to sign in without entering a password
     Given that i access the Authentication page
      When i do not fill in the passaword field
      And i click on "Sing in" button
      Then the system must retunrs the erro "Password is required."
   
   @Priority_Medium @Not_Implemented
   Scenario: Try to sign in with an invalid password
     Given that i access the Authentication page
      When i fill the Password field with a invalid passaword
      And i click on "Sing in" button
      Then the system must retunrs the erro "Invalid password."

   @Priority_Low @Not_Implemented
   Scenario: Check the email field when we enter an invalid email
    Given that i access the Authentication page
     When i fill the Email address field with invalid email
     Then the system should change the color of the field to red
   
   @Priority_Low @Not_Implemented
   Scenario: Check the email field when we enter an valid email
    Given that i access the Authentication page
     When i fill the Email address field with valid email
     Then the system should change the color of the field to green

  

