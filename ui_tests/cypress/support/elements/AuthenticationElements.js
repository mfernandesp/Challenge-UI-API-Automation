class AuthenticationElements {

    //Buttons
    buttonSignIN = () => { return 'div.header_user_info > a.login' }

    buttonCreateAccount = () => { return 'button#SubmitCreate' }

    buttonLogin = () => { return 'button#SubmitLogin' }

    //Text Fields
    fieldEmailCreate = () => { return 'input#email_create' }
    
    fieldEmailLogin = () => { return 'input#email' }
    
    fieldPasswordLogin = () => { return 'input#passwd' }
    
    //Message
    menssageErrorCreateAccount = () => { return 'div#create_account_error > ol > li'}
}

export default AuthenticationElements;