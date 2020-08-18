Feature: Create Account 
 As a customer
 I want to create an account
 So that I can place and track orders

    Background: 
      Given that i access the Authentication page

   @Priority_Higth @Not_Implemented
    Scenario: Create a Accout
      When fill the Email address field with a registered email
      And i click on Create an account button
      And i fill all requires fields to create a account
      And i click on Register button
      Then the customer must be successfully registered in the database
      And the customer must be redirected to the My Account page
      And the View my customer account button must be displayed with the customer's name

   @Priority_Medium @Implemented
   Scenario: Try to create a Account with invalid email
     When i fill the Email address field with invalid email
     And i click on Create an account button
     Then the system must retunrs the erro "Invalid email address"

   @Priority_Medium @Implemented
   Scenario: Try to create an Account with email already used
     When i fill the Email address field with a email already used
     And i click on Create an account button
     Then the system must retunrs the erro "An account using this email address has already been registered. Please enter a valid password or request a new one."
   
   @Priority_Low @Not_Implemented
   Scenario: Check the email field when we enter an invalid email
     When i fill the Email address field with invalid email
     Then the system should change the color of the field to red
   
   @Priority_Low @Not_Implemented
   Scenario: Check the email field when we enter an valid email
     When i fill the Email address field with valid email
     Then the system should change the color of the field to green

    

    
    