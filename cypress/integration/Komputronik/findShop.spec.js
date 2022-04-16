/// <reference types="cypress" />

describe('Wyszuanie produktów', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get('.webpush-followup-close', { timeout: 10000 }).should('be.visible').click();              
    });
  
    
    it('Should find shop in Nowy Sącz at Węgierska 170 and check it', () => { 
      
        cy.get('.header__stores > a > label').click();
        cy.get('.row > .form-control').type('Nowy Sącz');
        cy.get('.primary').click();
        cy.get('.btn2-pp10').click();
        cy.contains('a','Nowy Sącz').should('contain','Nowy Sącz').click();  
        cy.get('h1').should('contain','Nowy Sącz').click(); 
        cy.get(':nth-child(7) > .avia_codeblock_section > .avia_codeblock > :nth-child(2)').should('contain','ul. Węgierska 170')    
        
  })  
    })

       
   
   