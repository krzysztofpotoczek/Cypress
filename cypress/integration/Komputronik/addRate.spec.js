/// <reference types="cypress" />

describe('Zrezygnowanie z wystawienia opini', () => {
  const login = (name, password) => { 
    cy.session([name,password], () => {
     cy.visit("https://www.komputronik.pl/");
     cy.get('.header__user-account > a > label', { timeout: 15000 }).should('be.visible').click();
     cy.get('#login').type(name);
     cy.get('#password').type(password);
     cy.contains('button','Zaloguj się').click(); 
   })
   }
  
  
   it("Should handle the alerts automatically", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://www.komputronik.pl/");
    //window:confirm is the event which get fired on alert open
    cy.on("window:confirm", (str) => {
      return false;
    });
  // cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
  }); 
     
   
 
   
      it("Should fill rate form ", () => {
       
          cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html"); 
        cy.get('.at-add-opinion').click();
        cy.get('.at-quality-star-over-3').click();
        cy.get('.at-func-star-over-1').click();
        cy.get('.form-group > .form-control').type('Polecam');        
        cy.contains('button', 'Zrezygnuj').click();
        
          })
    });
   
  

  
  
     
  
  