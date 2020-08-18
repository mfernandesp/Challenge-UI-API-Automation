Feature: API Teste

   Scenario: Validate required fields
    When I make the request GET users
    Then all returned users must have Name, Username and Email

   Scenario: Check if users emails are valid
    When I make the request GET users
    Then all users must have valid email
 
   Scenario: Check if campany > catchPhrase is less than 50 characters
    When I make the request GET users
    Then the system must return less than 50 characters for the campany > catchPhrase field
  
   Scenario: Try to save a new POST posts without the title
     When I make the POST posts request without entering the title
     Then the systems should return an error
  
   Scenario: Save a new post using a userId got by GET users API
     Given I make the request GET users
     When I make the POST posts request using a userId got by GET users
     Then the systems must insert the informed data