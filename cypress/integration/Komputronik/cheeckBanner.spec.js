/// <reference types="cypress" />

describe('Sprawdzanie banerów i elementów', () => {

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
       
     
       
          it("Main page ", () => {
           
           
            cy.visit("https://www.komputronik.pl/");
            //main banner
            cy.get('.rotator__curr > .ls-is-cached', { timeout: 15000 })
            .should('be.visible')
            .and('exist')
            .and('have.css', 'width', '1246px')
            .and('have.css', 'height', '327.359375px');

            //day promotion
            cy.get(':nth-child(2) > .so2-wrap', { timeout: 15000 })
            .should('be.visible')
            .and('exist')
            .and('have.css', 'width', '613px')
            .and('have.css', 'height', '390px');

            cy.get(':nth-child(3) > .so2-wrap')
            .should('exist')
            .and('have.css', 'width', '613px')
            .and('have.css', 'height', '390px');

            //our promotion
            cy.get('.container > .row > :nth-child(1) > a > .lazyloaded')
            .should('exist')
            .and('have.css', 'width', '408.65625px')
            .and('have.css', 'max-width', '100%')
            .and('have.css', 'height', '196.828125px')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', '"Open Sans", sans-serif')
            .and('have.css', 'line-height', '21px')

            cy.get('.container > .row > :nth-child(2) > a > .lazyloaded')
            .should('exist')
            .and('have.css', 'width', '408.65625px')
            .and('have.css', 'max-width', '100%')
            .and('have.css', 'height', '196.828125px')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', '"Open Sans", sans-serif')
            .and('have.css', 'line-height', '21px')

            cy.get('.container > .row > :nth-child(3) > a > .lazyloaded')
            .should('exist')
            .and('have.css', 'width', '408.65625px')
            .and('have.css', 'max-width', '100%')
            .and('have.css', 'height', '196.828125px')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', '"Open Sans", sans-serif')
            .and('have.css', 'line-height', '21px')

            //new product
            cy.get('#new-products > .swipe')
            .should('exist')
            .and('have.css', 'width', '1266px')
            .and('have.css', 'height', '377px')
            .and('have.css', 'font-size', '0px')
            .and('have.css', 'font-family', '"Open Sans", sans-serif')
          
            //choose for you
            cy.get('[ktr-transclude=""] > .swipe')
            .should('exist')
            .and('have.css', 'width', '1266px')
            .and('have.css', 'height', '404px')
            .and('have.css', 'font-size', '0px')
            .and('have.css', 'font-family', '"Open Sans", sans-serif')

            //description
            cy.get('.text-box-light')
            .should('exist')
            .and('contain','Komputronik to jeden z najbardziej zaufanych sklepów internetowych Polsce.')
            .and('contain','Posiada w ofercie nie tylko sprzęt komputerowy, ale także RTV i AGD, tablety, laptopy, telefony, smartwatche, spory wybór urządzeń smarthome, foto i video oraz produkty dla domu. Komputronik to idealny stosunek jakości do ceny, ale także usługi dopasowane do nowoczesnego poziomu życia: fachowe doradztwo, raty, leasing, elastyczne możliwości dostawy, ubezpieczenia, a nawet wniesienie i montaż.')
            .and('have.css', 'width', '1246px')
            .and('have.css', 'height', '200px')
            .and('have.css', 'background-color', 'rgb(255, 255, 255)')
            .and('have.css', 'color', 'rgb(27, 29, 30)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', '"Open Sans", sans-serif')

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
  
  
     
  
  
       
    
    