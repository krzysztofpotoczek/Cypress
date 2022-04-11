/// <reference types="cypress" />

describe('Znajdowanie produktu przez wyszukiwarkę', () => {
    context('uruchomienie strony', () => {
        it('Should open https://allegro.pl.allegrosandbox.pl/ ', () => {            
            cy.visit('https://allegro.pl.allegrosandbox.pl/');             
          })
    })
    

    context('testy', () => {
        it('Should accept popup', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();              
          })

          it('Should display coupon', () => {          
            cy.contains('a','Korzyści').click();
            cy.contains('p','Kupony').click();
                      
          })

          it('Should accept popup2', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();              
          })

          it('Should take coupon', () => {          
            cy.contains('button','ODBIERZ KUPON').click();            
          })

         
          })
    })

  

     
  
 