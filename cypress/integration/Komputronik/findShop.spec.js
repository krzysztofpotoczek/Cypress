/// <reference types="cypress" />

describe('Wyszuanie sklepu na ulicy Węgierskiej 170', () => {
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
        cy.url().should('include', '/storehouse/find');
        cy.get('.row > .form-control').type('Nowy Sącz');
        cy.get('.primary').click();
        cy.get('.btn2-pp10').click();
        cy.url().should('include', '/storehouse/list');
        cy.contains('a','Nowy Sącz').should('contain','Nowy Sącz').click();  
        cy.get('h1').should('contain','Nowy Sącz').click(); 
        cy.get(':nth-child(7) > .avia_codeblock_section > .avia_codeblock > :nth-child(2)').should('contain','ul. Węgierska 170');
        cy.url().should('include', '/informacje/komputronik-nowy-sacz/');
        cy.get(':nth-child(7) > .avia_codeblock_section > .avia_codeblock > :nth-child(2)').should('have.css', 'color', 'rgb(102, 102, 102)');
        cy.get(':nth-child(7) > .avia_codeblock_section > .avia_codeblock > :nth-child(3)').should('contain','33-300 Nowy Sącz');
        cy.get(':nth-child(7) > .avia_codeblock_section > .avia_codeblock > :nth-child(3)').should('have.css', 'color', 'rgb(102, 102, 102)');
  })  
    })

    
   
   