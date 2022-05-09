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
     // cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
    });
  
    
    it('Should type i find produckt', () => { 
      cy.visit("https://www.komputronik.pl/category/1596/telefony.html"); 
        cy.get('.input-group').type('Xiaomi Redmi 9A 2/32GB');
        cy.get('.btn > .micon').click();
       cy.wait(5000);
        cy.get(':nth-child(1) > .pe2-head-wrap > .pe2-head > .blank-link', { timeout: 15000 }).should('contain','Xiaomi Redmi 9C 2/32GB');
        
  })  

  it("Check banner", () => {
          
  
     cy.visit("https://www.komputronik.pl/category/1596/telefony.html"); 
     
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
  
       
    
   