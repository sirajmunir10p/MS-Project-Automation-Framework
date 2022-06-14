/// <reference types = "Cypress" />

import loginPage from './pages/loginPage.js'
import homePage from './pages/homePage.js'

describe('Test Suite', function() {

    const loginpage = new loginPage()
    const homepage = new homePage()

    it('Login with Valid Credentials', function() {
        loginpage.visit()
        loginpage.enterEmail("xirajmunir@gmail.com")
        loginpage.enterPassword("siraj1234")
        loginpage.clickSubmit()
        cy.title().should('be.equal', 'My account - My Store')
    })

    it('Search an Item to purchase', function() {
        homepage.searchItem('Faded Short Sleeve T-shirts')
        homepage.clickSearch()
        homepage.ProductHeading.should('have.text', 'Faded Short Sleeve T-shirts')
        homepage.ProductHeading.invoke('text').should('contain', 'Faded ') //Another way to assert
        homepage.ProductHeading.invoke('text').should('include', 'Faded Short Sleeve T-shirts') //Another way to assert
        homepage.clickAddToCart()
        cy.title().should('be.equal', 'Faded Short Sleeve T-shirts - My Store')
    })
})