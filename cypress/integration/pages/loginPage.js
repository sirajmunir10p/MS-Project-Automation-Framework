class loginPage {

    usernameInput() {
        return cy.get('#txtUsername')
    }

    passwordInput() {
        return cy.get('#txtPassword')
    }

    loginBtn() {
        return cy.get('#btnLogin')
    }

    //AutomationPractice.com login page
    visit() {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")

    }

    enterEmail(value)
    {
        const email = cy.get('[id=email]')
        email.clear()
        email.type(value)
        return this
    }

    enterPassword(value)
    {
        const pwd = cy.get('[id=passwd]')
        pwd.clear()
        pwd.type(value)
        return this

    }

    clickSubmit()
    {
        const submitBtn = cy.get('[id=SubmitLogin]')
        submitBtn.click()
    }
}
export default loginPage