Feature: Purchasing and order 
 As a customer
 I want to order products
 So that I can purchase these products

    @Priority_Critical @Implemented
    Scenario Outline: Place an order for a product from the Women section
     Given that i access the Women store page
      And I add a product to the cart
      When confirm the my order summary
      And log in with email valid email and password
      And confirm the Order Delivery Address
      And confirm the Shipping Order
      And choose the <method> payment method
      Then the system should return the message "Your order on My Store is complete."

      Exemples:
        |method|
        |bank|
        |check|

    @Priority_Critical @Not_Implemented
    Scenario: Place an order for a product from the Dress section
      
    @Priority_Critical @Not_Implemented
    Scenario: Place an order for a product from the T-shirts section

    @Priority_Hight @Not_Implemented
    Scenario: Buy more than one unit of the same product
    
    @Priority_Hight @Not_Implemented
    Scenario: Buy more than one product

    @Priority_Hight @Not_Implemented
    Scenario: Buy products from different sections

    @Priority_Hight @Not_Implemented
    Scenario: Buy products in Sale

    @Priority_Hight @Not_Implemented
    Scenario: Buy the same product in different colors
    
    @Priority_Hight @Not_Implemented
    Scenario: Buy the same product in different size
        
    @Priority_Hight @Not_Implemented
    Scenario: Remove a product from the shopping cart

    @Priority_Low @Not_Implemented
    Scenario: Access the shopping cart when empty



    

    
    