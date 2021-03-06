/// <reference types="cypress" />

function textGenerator() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  function numberGenerator() {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }


  
  

describe('Otwieranie strony Komputronik, logowanie i zmiana szczegółów konta', () => {

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
  // cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
  }); 

    

        it("Should change account's details", () => {
          login('testcypresspwsz@gmail.com','Testcypress.12345');
          cy.visit("https://www.komputronik.pl/customer/account#!/personal"); 
        cy.url().should('include', '/customer/account#!/personal');
        cy.wait(2000);
        cy.get('.col-s360-13 > .row > .form-control').clear().type(textGenerator());
        cy.get('.col-s360-17 > .row > .form-control').clear().type(textGenerator());
        cy.get('.col-xs-22 > .row > .form-control').clear().type("5"+numberGenerator());
        cy.contains('button','Zapisz zmiany').click();
        cy.get('.global-alert > span').should('contain','Twoje dane zostały zmienione.');
        cy.get('.global-alert').should('have.css', 'background-color', 'rgb(233, 249, 227)');
        cy.get('.global-alert').should('have.css', 'color', 'rgb(62, 142, 28)');
        cy.get('.col-md-17 > .row > .form-control').should('have.css', 'background-color', 'rgb(207, 255, 187)');
        cy.get('.col-s360-17 > .row > .form-control').should('have.css', 'background-color', 'rgb(207, 255, 187)');
        cy.get('.col-s360-13 > .row > .form-control').should('have.css', 'background-color', 'rgb(207, 255, 187)');
        cy.get('.col-xs-22 > .row > .form-control').should('have.css', 'background-color', 'rgb(207, 255, 187)');
        cy.get('.col-md-17 > .row > .form-control').should('have.css', 'border-color', 'rgb(116, 195, 84)');
        cy.get('.col-s360-17 > .row > .form-control').should('have.css', 'border-color', 'rgb(116, 195, 84)');
        cy.get('.col-s360-13 > .row > .form-control').should('have.css', 'border-color', 'rgb(116, 195, 84)');
        cy.get('.col-xs-22 > .row > .form-control').should('have.css', 'border-color', 'rgb(116, 195, 84)');
  
      }); 


      it("Should check name and number validation", () => {
        login('testcypresspwsz@gmail.com','Testcypress.12345');
        cy.visit("https://www.komputronik.pl/customer/account#!/personal"); 
        cy.url().should('include', '/customer/account#!/personal');
        cy.wait(2000);
        cy.get('.col-s360-13 > .row > .form-control').clear().type(numberGenerator());
        cy.get('.col-s360-17 > .row > .form-control').clear().type(textGenerator());
        cy.get('.col-xs-22 > .row > .form-control').clear().type("000000000");
        cy.contains('button','Zapisz zmiany').click();      
        
        cy.get('.col-md-17 > .row > .form-control') //Mail
        .should('have.css', 'border-color', 'rgb(116, 195, 84)')
        .and('have.css', 'background-color', 'rgb(207, 255, 187)');   
        

        cy.get('.col-s360-13 > .row > .form-control') //Name
        .should('have.css', 'background-color', 'rgb(248, 231, 231)')
        .and('have.css', 'border-color', 'rgb(213, 0, 0)');

        cy.get('.form-alert') //error alert
        .should('contain','Nieprawidłowa wartość')
        .and('have.css', 'color', 'rgb(213, 0, 0)');

        cy.get('.col-s360-17 > .row > .form-control') //Surname
        .should('have.css', 'background-color', 'rgb(207, 255, 187)')
        .and('have.css', 'border-color', 'rgb(116, 195, 84)');

        cy.get('.col-xs-22 > .row > .form-control') //Phone number
        .should('have.css', 'background-color', 'rgb(207, 255, 187)')
        .and('have.css', 'border-color', 'rgb(116, 195, 84)'); 
      }); 


      it("Should check name validation", () => {
       login('testcypresspwsz@gmail.com','Testcypress.12345');
        cy.visit("https://www.komputronik.pl/customer/account#!/personal"); 
        cy.url().should('include', '/customer/account#!/personal');
        cy.wait(2000);
        cy.get('.col-s360-13 > .row > .form-control').clear().type(numberGenerator());
        cy.get('.col-s360-17 > .row > .form-control').clear().type(textGenerator());
        cy.get('.col-xs-22 > .row > .form-control').clear().type("5"+numberGenerator());
        cy.contains('button','Zapisz zmiany').click();      
        
        cy.get('.col-md-17 > .row > .form-control') //Mail
        .should('have.css', 'border-color', 'rgb(116, 195, 84)')
        .and('have.css', 'background-color', 'rgb(207, 255, 187)');   
        

        cy.get('.col-s360-13 > .row > .form-control') //Name
        .should('have.css', 'background-color', 'rgb(248, 231, 231)')
        .and('have.css', 'border-color', 'rgb(213, 0, 0)');

        cy.get('.form-alert') //error alert
        .should('contain','Nieprawidłowa wartość')
        .and('have.css', 'color', 'rgb(213, 0, 0)');

        cy.get('.col-s360-17 > .row > .form-control') //Surname
        .should('have.css', 'background-color', 'rgb(207, 255, 187)')
        .and('have.css', 'border-color', 'rgb(116, 195, 84)');

        cy.get('.col-xs-22 > .row > .form-control') //Phone number
        .should('have.css', 'background-color', 'rgb(207, 255, 187)')
        .and('have.css', 'border-color', 'rgb(116, 195, 84)'); 
      }); 


      it("Should check number validation", () => {
        login('testcypresspwsz@gmail.com','Testcypress.12345');
        cy.visit("https://www.komputronik.pl/customer/account#!/personal"); 
        cy.url().should('include', '/customer/account#!');
        cy.contains('a','Dane osobiste').click();
        cy.url().should('include', '/customer/account#!/personal');
        cy.wait(2000);
        cy.get('.col-s360-13 > .row > .form-control').clear().type(textGenerator());
        cy.get('.col-s360-17 > .row > .form-control').clear().type(textGenerator());
        cy.get('.col-xs-22 > .row > .form-control').clear().type("111111111");

        cy.get('.col-md-17 > .row > .form-control') //Mail
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .and('have.css', 'border-color', 'rgb(229, 229, 229)');  
        

        cy.get('.col-s360-13 > .row > .form-control') //Name
        .should('have.css', 'background-color', 'rgb(207, 255, 187)')
        .and('have.css', 'border-color', 'rgb(116, 195, 84)');

        cy.get('.col-s360-17 > .row > .form-control') //Surname
        .should('have.css', 'background-color', 'rgb(207, 255, 187)')
        .and('have.css', 'border-color', 'rgb(116, 195, 84)');

        cy.contains('button','Zapisz zmiany').click();    
        
        cy.get('.global-alert > span')
        .should('contain','Niepoprawny numer telefonu')
        .and('have.css', 'color', 'rgb(213, 0, 0)')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)');   
      }); 
});