/// <reference types="cypress" />

describe('Sprawdzenie kategori i podkategroi', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click();              
    });

    it('Should check category and subcategory Sprzęt PC', () => { 
        cy.get('.at-cat-ELEKTRONIKA > a > .name-wrap').click({force: true});
        cy.url().should('include', '/sprzet-pc.html');
        cy.get(':nth-child(1) > .category-compact > .category-compact__header > .name > a').should('contain','Peryferia PC');
        cy.get(':nth-child(2) > .category-compact > .category-compact__header > .name > a').should('contain','Części PC');
        cy.get(':nth-child(3) > .category-compact > .category-compact__header > .name > a').should('contain','Sieci i komunikacja');
        cy.get(':nth-child(4) > .category-compact > .category-compact__header > .name > a').should('contain','Akcesoria | Eksploatacja');
        cy.get(':nth-child(5) > .category-compact > .category-compact__header > .name > a').should('contain','Oprogramowanie');
      
  })  
  
    
    it('Should check category and subcategory Laptopy i komputery', () => { 
        cy.get(':nth-child(1) > .hub-menu__link').click();
        cy.url().should('include', '/laptopy-i-komputery.html');
        cy.get(':nth-child(1) > .category-compact > .category-compact__header > .name > a').should('contain','Laptopy');
        cy.get(':nth-child(2) > .category-compact > .category-compact__header > .name > a').should('contain','Komputery');
        cy.get(':nth-child(3) > .category-compact > .category-compact__header > .name > a').should('contain','Serwery');
        cy.get(':nth-child(4) > .category-compact > .category-compact__header > .name > a').should('contain','Tablety');
        cy.get(':nth-child(5) > .category-compact > .category-compact__header > .name > a').should('contain','Czytniki e-book');
        
  })  

  it('Should check category and subcategory Gaming', () => { 
    cy.get(':nth-child(3) > .hub-menu__link').click();
    cy.url().should('include', '/gaming.html');
    cy.get(':nth-child(1) > .category-compact > .category-compact__header > .name > a').should('contain','Sprzęt gamingowy');
    cy.get(':nth-child(2) > .category-compact > .category-compact__header > .name > a').should('contain','Pokój gracza');
    cy.get(':nth-child(3) > .category-compact > .category-compact__header > .name > a').should('contain','Konsole do gier');
    cy.get(':nth-child(4) > .category-compact > .category-compact__header > .name > a').should('contain','Akcesoria do konsol');
    cy.get('.category-compact > .name').should('contain','Gry');
    cy.get(':nth-child(6) > .category-compact > .category-compact__header > .name > a').should('contain','Artykuły kolekcjonerskie z gier');
    
})  
    })
  
       
    
   