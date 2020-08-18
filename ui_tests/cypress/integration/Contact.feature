Feature: Contact
 As a customer
 I want to contact the web site

   @Priority_Higth @Not_Implemented
   Scenario: Contact Customer Service
    Given that i access the Contact US page
     And I fill in all the fields in the contact section
     When i click on Send button
     Then the system must retunrs the success message "Your message has been successfully sent to our team."

   @Priority_Medium @Not_Implemented
   Scenario: Try to contact without informing email

   @Priority_Medium @Not_Implemented
   Scenario: Try to contact without informing message

   @Priority_Medium @Not_Implemented
   Scenario: Try to contact without informing Subject

   @Priority_Low @Not_Implemented
   Scenario: Check the email field when we enter an invalid email
    Given that i access the Contact US page
     When i fill the Email address field with invalid email
     Then the system should change the color of the field to red
   
   @Priority_Low @Not_Implemented
   Scenario: Check the email field when we enter an valid email
    Given that i access the Authentication page
     When i fill the Email address field with valid email
     Then the system should change the color of the field to green