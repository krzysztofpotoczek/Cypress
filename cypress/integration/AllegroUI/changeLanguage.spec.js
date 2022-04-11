/// <reference types="cypress" />

describe('Zmiana języka z PL na ANG', () => {
    context('uruchomienie strony', () => {
        it('Should open https://allegro.pl.allegrosandbox.pl/ ', () => {            
            cy.visit('https://allegro.pl.allegrosandbox.pl/');             
          })
    })
    

    context('testy', () => {
        it('Should accept popup', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();        
            
          })

          it('Should check sentence in PL', () => { 
            cy.wait(2000);        
            cy.contains('h5','Warto zobaczyć');           
          })

          it('Should change language', () => {   
                      
            cy.get('.munh_56 > :nth-child(1) > div > .mgn2_14 > img').click();  
            cy.get('#language-select').select('English');
            cy.wait(5000);
            cy.get('form > .m9qz_yp').click();  
            cy.wait(2000);
          })

          it('Should accept popup2', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();        
            
          })
         
          it('Should check sentence in ENG', () => {                    
            cy.contains('h5','Worth seeing ');           
          })
         
            
        
          })
    })

  

     
  
 