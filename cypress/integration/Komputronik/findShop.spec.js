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


  it("Check banner", () => {
          
  
    cy.visit("https://www.komputronik.pl/storehouse/find");
        
        cy.url().should('include', '/storehouse/find');
    
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

    
   
   