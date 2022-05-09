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
   //   cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
    });
  
    
    it('Should find shop in Nowy Sącz at Węgierska 170 and check it', () => { 
      cy.visit("https://www.komputronik.pl/");
      cy.visit("https://www.komputronik.pl/storehouse/find");
        
        cy.url().should('include', '/storehouse/find');
        cy.get('.row > .form-control').type('Nowy Sącz');
        cy.get('.primary').click();
        cy.get('.btn2-pp10').click();
        cy.url().should('include', '/storehouse/list');
        cy.contains('a','Nowy Sącz').should('contain','Nowy Sącz').click();  
        cy.get('h1').should('contain','Nowy Sącz').click(); 
        cy.get('.avia-builder-el-6 > .avia_codeblock_section > .avia_codeblock > :nth-child(2)').should('contain','ul. Węgierska 170');
        cy.url().should('include', '/informacje/komputronik-nowy-sacz/');
        cy.get('.avia-builder-el-6 > .avia_codeblock_section > .avia_codeblock > :nth-child(2)').should('have.css', 'color', 'rgb(102, 102, 102)');

        cy.get('.avia-builder-el-6 > .avia_codeblock_section > .avia_codeblock > :nth-child(3)').should('contain','33-300 Nowy Sącz');
        cy.get('.avia-builder-el-6 > .avia_codeblock_section > .avia_codeblock > :nth-child(3)').should('have.css', 'color', 'rgb(102, 102, 102)');
       
        cy.get('.avia-builder-el-6 > .avia_codeblock_section > .avia_codeblock > :nth-child(4) > a')
        .should('contain','+48 507 509 747')
        .and('have.css', 'color', 'rgb(0, 151, 213)')

        cy.get('.avia_codeblock > :nth-child(5) > a')
        .should('contain','sandecja@komputronik.pl')
        .and('have.css', 'color', 'rgb(0, 151, 213)')
  })  
    })

    
   
   