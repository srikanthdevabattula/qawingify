///<reference types="cypress"/>

describe('wingify QA task',()=>{
    
    it('LogIn Page',()=>{
        cy.visit('https://sakshingp.github.io/assignment/login.html') //visit the url
        cy.title().should('eq','Demo App')                            //checking given title is matched or not
        cy.get('#username').type('srikanth')                          //type user name
        cy.get('#password').type('1234')                              //type password
        cy.get('.form-check-input').check().should('be.checked')      //checked the remember me checkbox
        cy.get('#log-in').click()                                     //click on the login
        cy.title().should('eq','Demo App')                            //again check the title of the home page
        cy.url().should('eq','https://sakshingp.github.io/assignment/home.html') //check the url after login

        /*we check home page here also but i write as another task Below to better understand*/
        // cy.get('#amount').click()
        // cy.get('#transactionsTable > tbody > tr:nth-child(1) > td.text-right.bolder.nowrap').contains('- 320.00 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(2) > td.text-right.bolder.nowrap').contains('- 244.00 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(3) > td.text-right.bolder.nowrap').contains('+ 17.99 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(4) > td.text-right.bolder.nowrap').contains('+ 340.00 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(5) > td.text-right.bolder.nowrap').contains('+ 952.23 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(6) > td.text-right.bolder.nowrap').contains('+ 1,250.00 USD').should('be.visible')
        // cy.get('#amount').click()
        // cy.get('#transactionsTable > tbody > tr:nth-child(1) > td.text-right.bolder.nowrap').contains('+ 1,250.00 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(2) > td.text-right.bolder.nowrap').contains('+ 952.23 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(3) > td.text-right.bolder.nowrap').contains('+ 340.00 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(4) > td.text-right.bolder.nowrap').contains('+ 17.99 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(5) > td.text-right.bolder.nowrap').contains('- 244.00 USD').should('be.visible')
        // cy.get('#transactionsTable > tbody > tr:nth-child(6) > td.text-right.bolder.nowrap').contains('- 320.00 USD').should('be.visible')
   
        
    })
    it('Home Page',()=>{
        cy.visit('https://sakshingp.github.io/assignment/home.html') //visit the homepage
        cy.get('#amount').click()                                    //click on the amount to sort the amount

        //checking amount is in ascending order
        cy.get('#transactionsTable > tbody > tr:nth-child(1) > td.text-right.bolder.nowrap').contains('- 320.00 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(2) > td.text-right.bolder.nowrap').contains('- 244.00 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(3) > td.text-right.bolder.nowrap').contains('+ 17.99 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(4) > td.text-right.bolder.nowrap').contains('+ 340.00 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(5) > td.text-right.bolder.nowrap').contains('+ 952.23 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(6) > td.text-right.bolder.nowrap').contains('+ 1,250.00 USD').should('be.visible')


        cy.get('#amount').click()         //again click on amount

        //checking amount is in descending order
        cy.get('#transactionsTable > tbody > tr:nth-child(1) > td.text-right.bolder.nowrap').contains('+ 1,250.00 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(2) > td.text-right.bolder.nowrap').contains('+ 952.23 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(3) > td.text-right.bolder.nowrap').contains('+ 340.00 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(4) > td.text-right.bolder.nowrap').contains('+ 17.99 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(5) > td.text-right.bolder.nowrap').contains('- 244.00 USD').should('be.visible')
        cy.get('#transactionsTable > tbody > tr:nth-child(6) > td.text-right.bolder.nowrap').contains('- 320.00 USD').should('be.visible')
    })
})