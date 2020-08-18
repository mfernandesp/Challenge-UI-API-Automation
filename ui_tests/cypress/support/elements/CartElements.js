class CartElements {

    //Buttons 
    buttonProceedCheckout = () => { return 'p.cart_navigation.clearfix > [title="Proceed to checkout"]' }   

    buttonProceedCheckoutAddress = () => {return '[name="processAddress"]' } 

    buttonProceedCheckoutShipping = () => {return '[name="processCarrier"]' }    

    buttonPayBank = () => {return '[title="Pay by bank wire"]' }

    buttonPayCheck = () => {return '[title="Pay by bank wire"]' }

    buttonConfirmOrder = () => {return '#cart_navigation > button' } 
    
    //checkboxs
    checkTermsService = () => { return 'p.checkbox > div > span > input#cgv'}


    //text
    textCart = () => { return 'div.box'}
}

export default CartElements;