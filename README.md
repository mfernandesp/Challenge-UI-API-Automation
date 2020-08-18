# Challenge-UI-API-Automation

## UI Tests
  **Project details:** Project built with the Cumcumber and Cypress framewoks and Javascript language
  
  **Project structure:**
  
    1. cypress> integration: Documentation of test scenarios in bdd.
    2. cypress> support> steps: Script containing the automated steps of the features located in cypress> integration
    3. cypress> support> pageObjects: Mapping the functions of a website page. (for example the click of a button)
    4. cypress> support> Elements: Mapping of website elements in css selector.
    5. cypress> support> data: Data used in the test scripts
    
  **How to run:**
  
    1. First change the data contained in the files located at cypress> support> data
    2. In the folder '.\ui_tests' run the command 'npx cypress open' (check Cumcumber-Cypress documentation for more details https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#excluding-tests)
   
   
## API Tests
  **Project details:** Project built with the Cumcumber and Cypress framewoks and Javascript language
  
  **Project structure:**
  
    1. cypress> integration: Documentation of test scenarios in bdd.
    2. cypress> support> steps: Script containing the automated steps of the features located in cypress> integration.
        
  **How to run:**
  
    1. In the folder '.\ui_tests' run the command 'npx cypress open' (check Cumcumber-Cypress documentation for more details https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#excluding-tests)
