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
    //  cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
    });

    it('Should check category and subcategory Sprzęt PC', () => { 
      cy.visit("https://www.komputronik.pl/");
         cy.visit("https://www.komputronik.pl/category/14508/sprzet-pc.html");
        
      
        cy.url().should('include', '/sprzet-pc.html');
        cy.get(':nth-child(1) > .category-compact > .category-compact__header > .name > a').should('contain','Peryferia PC');
        cy.get(':nth-child(2) > .category-compact > .category-compact__header > .name > a').should('contain','Części PC');
        cy.get(':nth-child(3) > .category-compact > .category-compact__header > .name > a').should('contain','Sieci i komunikacja');
        cy.get(':nth-child(4) > .category-compact > .category-compact__header > .name > a').should('contain','Akcesoria | Eksploatacja');
        cy.get(':nth-child(5) > .category-compact > .category-compact__header > .name > a').should('contain','Oprogramowanie');
      
  })  
  
    
    it('Should check category and subcategory Laptopy i komputery', () => { 
      cy.visit("https://www.komputronik.pl/");
      cy.visit("https://www.komputronik.pl/category/5803/laptopy-i-komputery.html");
        cy.url().should('include', '/laptopy-i-komputery.html');
        cy.get(':nth-child(1) > .category-compact > .category-compact__header > .name > a').should('contain','Laptopy');
        cy.get(':nth-child(2) > .category-compact > .category-compact__header > .name > a').should('contain','Komputery');
        cy.get(':nth-child(3) > .category-compact > .category-compact__header > .name > a').should('contain','Serwery');
        cy.get(':nth-child(4) > .category-compact > .category-compact__header > .name > a').should('contain','Tablety');
        cy.get(':nth-child(5) > .category-compact > .category-compact__header > .name > a').should('contain','Czytniki e-book');
        
  })  
  
  it('Should check category and subcategory Gaming', () => { 
    cy.visit("https://www.komputronik.pl/");
    cy.visit("https://www.komputronik.pl/category/8737/gaming.html");
    cy.url().should('include', '/gaming.html');
    cy.get(':nth-child(1) > .category-compact > .category-compact__header > .name > a').should('contain','Sprzęt gamingowy');
    cy.get(':nth-child(2) > .category-compact > .category-compact__header > .name > a').should('contain','Pokój gracza');
    cy.get(':nth-child(3) > .category-compact > .category-compact__header > .name > a').should('contain','Konsole do gier');
    cy.get(':nth-child(4) > .category-compact > .category-compact__header > .name > a').should('contain','Akcesoria do konsol');
    cy.get('.category-compact > .name').should('contain','Gry');
    cy.get(':nth-child(6) > .category-compact > .category-compact__header > .name > a').should('contain','Artykuły kolekcjonerskie z gier');
    
})  

it("Check banner", () => {
          
  
  cy.visit("https://www.komputronik.pl/category/8737/gaming.html");
  cy.url().should('include', '/gaming.html');

 //contact
 cy.get('.footer2__infoline')
 .should('contain','Masz pytania?')
 .and('exist')
 .and('contain','Zadzwoń lub napisz')
 .and('contain','+48616680007')
 .and('contain','Skontaktuj się')
 .and('have.css', 'font-weight', '700')
 .and('have.css', 'color', 'rgb(255, 255, 255)')
 .and('have.css', 'background-color', 'rgb(40, 45, 49)')
 .and('have.css', 'font-family', 'OpenSans, sans-serif')
 .and('have.css', 'width', '1383px')
 .and('have.css', 'height', '110px')


 //cooperation
 cy.get('.footer2__right-column')
 .should('contain','Znajdziesz nas na:')
 .and('exist')
 .and('contain','Znajdziesz nas na:')

 

 cy.get(':nth-child(1) > .footer2__connect-img-wrap > .tools__img-fit-center')
 .should('exist')
 cy.get(':nth-child(1) > a > .f-btn > span')
 .should('contain','Znajdź sklep')
 .and('have.css', 'color', 'rgb(0, 114, 188)')

 cy.get(':nth-child(2) > .footer2__connect-img-wrap > .tools__img-fit-center')
 .should('exist')
 cy.get(':nth-child(2) > a > .f-btn > span')
 .should('contain','Dołącz')
 .and('have.css', 'color', 'rgb(0, 114, 188)')

 cy.get(':nth-child(3) > .footer2__connect-img-wrap > .tools__img-fit-center')
 .should('exist')
 cy.get(':nth-child(3) > a > .f-btn > span')
 .should('contain','Współpracuj')
 .and('have.css', 'color', 'rgb(0, 114, 188)')

 cy.get(':nth-child(1) > a > .f-btn')
 .should('have.css', 'width', '145px')
 .and('have.css', 'height', '40px')

 cy.get(':nth-child(2) > a > .f-btn')
 .should('have.css', 'width', '145px')
 .and('have.css', 'height', '40px')


 cy.get(':nth-child(3) > a > .f-btn')
 .should('have.css', 'width', '145px')
 .and('have.css', 'height', '40px')


 cy.get('[href="https://www.facebook.com/komputronik"] > .footer2__social-icon')
 .should('exist')

 cy.get('[href="https://www.instagram.com/Komputronik/"] > .footer2__social-icon')
 .should('exist')

 cy.get('[href="https://www.youtube.com/user/KomputronikSA"] > .footer2__social-icon')
 .should('exist')

 cy.get('[href="https://www.komputronikgaming.pl/"] > .footer2__social-icon')
 .should('exist')
 

  
});

    })
  
       
    
   