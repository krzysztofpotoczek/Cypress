/// <reference types="cypress" />

describe('Działanie koszyka', () => {

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
     
   
     
        it("Add to cart ", () => {
         
          login('testcypresspwsz@gmail.com','Testcypress.12345');
          cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html");  
          cy.contains('button','Do koszyka', { timeout: 15000 }).should('be.visible').click(); 
          cy.contains('button','Nie, dziękuję - chcę kupić tylko produkt', { timeout: 15000 }).should('be.visible').click(); 
          cy.contains('button','Przejdź do koszyka', { timeout: 15000 }).should('be.visible').click(); 
        });
  
         
          
         it("Check cart ", () => {
          login('testcypresspwsz@gmail.com','Testcypress.12345');
          cy.visit("https://www.komputronik.pl/cart");
          cy.url().should('include', '/cart');
          cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click(); 
          cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-name > .cart-table__elem-name-title')
          .should('contain','Garett Kids Sweet 2 czarny ')
          .and('have.css', 'color', 'rgb(51, 51, 51)');
  
          cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-price > .at-price-0')
          .should('contain','269 zł')
          .and('have.css', 'font-weight', '700');
  
          cy.get('.at-cart-summary-gross')
          .should('contain','269 zł')
          .and('have.css', 'color', 'rgb(0, 151, 213)');
      });

      it("Should check add to card and incrase +1 product ", () => {
        
        login('testcypresspwsz@gmail.com','Testcypress.12345');
        cy.visit("https://www.komputronik.pl/cart");
        cy.url().should('include', '/cart');
        cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click(); 
         cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-name > .cart-table__elem-name-title')
         .should('contain','Garett Kids Sweet 2 czarny ')
         .and('have.css', 'color', 'rgb(51, 51, 51)');
  
         cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-price > .at-price-0')
         .should('contain','269 zł')
         .and('have.css', 'font-weight', '700');
  
         cy.get('.at-cart-summary-gross')
         .should('contain','269 zł')
         .and('have.css', 'color', 'rgb(0, 151, 213)');    
          cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click();      
          cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__input-wrap > .flex-qty-control__input').should('have.value','1');
          cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click();  
          cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__action-down').click();
          
          cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-price > .at-price-0')
          .should('contain','269 zł')
          .and('have.css', 'font-weight', '700');
   
          cy.get('.at-cart-summary-gross')
          .should('contain','538 zł')
          .and('have.css', 'color', 'rgb(0, 151, 213)');
  
          cy.wait(3000);
          cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__input-wrap > .flex-qty-control__input').should('have.value','2');
          
          
        });

        it("Delete product from cart", () => {
          
          login('testcypresspwsz@gmail.com','Testcypress.12345');
        cy.visit("https://www.komputronik.pl/cart");
          cy.url().should('include', '/cart');
          cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click(); 
          cy.get('.form-default > .cart-table > .cart-table__list').should('exist');
          cy.get('.cart-table__elem-remove-button > .icon').click();
          cy.get('.empty-card > span').should('contain','Koszyk jest pusty', { timeout: 15000 }).should('be.visible').click();
          cy.get('.form-default > .cart-table > .cart-table__list').should('not.exist');
        });


        it("Check banner", () => {
          
          login('testcypresspwsz@gmail.com','Testcypress.12345');
        cy.visit("https://www.komputronik.pl/cart");
          cy.url().should('include', '/cart');
        
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


   


     
  
  