class StoreElements {

    //Buttons
    buttonWomenMenu = () => { return 'div#block_top_menu > ul > li > [title="Women"]' }

    buttonAddToCart = () => { return 'ul.product_list > :first-child > div > div.right-block > div.button-container > [title="Add to cart"]' }

    buttonProceedCheckout = () => { return '[title="Proceed to checkout"]' }     
    
}

export default StoreElements;