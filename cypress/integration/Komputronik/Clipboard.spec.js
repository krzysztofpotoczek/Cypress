/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i dodanie do schowka', () => {
  const login = (name, password) => { 
    cy.session([name,password], () => {
      cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html");
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
     
  });
  

      
    it("Should add to clipboard", () => {
      
      
      login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html"); 
        cy.contains('span','Do schowka', { timeout: 15000 }).should('be.visible').click();
        cy.get('.col-s360-18 > .btn2', { timeout: 15000 }).should('be.visible').click();
        cy.url().should('include', '/customer/account#!/clipboard');
        cy.get('.compact-product > a').should('exist');
    });

    it("Should delete product from clipboard", () => {
    
      login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/customer/account#!/clipboard"); 
      cy.url().should('include', '/customer/account#!/clipboard');
      cy.contains('a','Twój schowek').click();
      cy.url().should('include', '/customer/account#!/clipboard');
      cy.get('.compact-product > a').should('exist');
      cy.get('.btn > strong').click();
      cy.get('.global-alert > span').should('contain','Usunięto produkt ze schowka.');
      cy.get('.compact-product > a').should('not.exist');
      cy.get('.global-alert').should('have.css', 'background-color', 'rgb(233, 249, 227)');
      cy.get('.global-alert').should('have.css', 'color', 'rgb(62, 142, 28)');
      
  });

  it("Check banner", () => {
          
    login('testcypresspwsz@gmail.com','Testcypress.12345');
    cy.visit("https://www.komputronik.pl/customer/account#!/clipboard"); 
      cy.url().should('include', '/customer/account#!/clipboard');
  
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
  
  
     
  
  