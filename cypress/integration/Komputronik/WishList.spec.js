/// <reference types="cypress" />

describe('Otwieranie strony Komputronik, stworzenie listy życzeń i usunięcie jej', () => {
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

        it("Should create wish list", () => {
          login('testcypresspwsz@gmail.com','Testcypress.12345');
          cy.visit("https://www.komputronik.pl/customer/account#!"); 
        cy.url().should('include', '/customer/account#!');
        cy.contains('a','Twoje listy życzeń').click();
        cy.url().should('include', '/customer/account#!/wishlist');
        cy.get('.wl-add-list').click();       
        cy.get(' [ng-show="$ctrl.addNewWishList && !$ctrl.successAdd"] > .form-control').type('Krzys lista');
        cy.get('.col-s360-18 > button.btn2').click(); 
        cy.get('ol > :nth-child(1) > h3').should('contain','Krzys lista')
    });

    it("Should destroy wish list", () => {
      login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/customer/account#!"); 
      cy.contains('a','Twoje listy życzeń').click();
      cy.url().should('include', '/customer/account#!/wishlist');
      cy.contains('button','Usuń listę').click();
      cy.get('ol > :nth-child(1) > h3').should('not.exist');
      
  });

  it("Check banner", () => {
          
     login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/customer/account#!/wishlist"); 
      cy.url().should('include', '/customer/account#!/wishlist');
  
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
  
});