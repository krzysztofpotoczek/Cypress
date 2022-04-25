/// <reference types="cypress" />

describe('Logowanie i potwierdzenie zgody na otrzymywanie ofert', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
    });

      
    it("Should logIn", () => {
        cy.get('.header__user-account > a > label', { timeout: 15000 }).should('be.visible').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click(); 
        
      });
    

      it("Should logIn and accept consent", () => { 
        cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();        
        cy.get('.header__user-account > a > label', { timeout: 15000 }).should('be.visible').click();  
        cy.url().should('include', '/customer/account#!/');
        cy.get('.rodo-menu-label').click();
        cy.url().should('include', '/customer/account#!/customerConsents');
        cy.get('.checkbox').click();
        cy.get('.rodo-actions > span > button').click();
        cy.get('.global-alert > span').should('contain','Twoje zgody zostały zmienione.');
        cy.get('.global-alert').should('have.css', 'background-color', 'rgb(233, 249, 227)');
        cy.get('.global-alert').should('have.css', 'color', 'rgb(62, 142, 28)');
      });      
        
    });
  

  

  
     
  
  