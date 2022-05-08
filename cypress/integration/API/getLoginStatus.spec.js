/// <reference types="Cypress" />

describe('Pobieranie statusu logowania',() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
   
 
    it('Get login status', () => {
        cy.request({
            method : 'GET',
            url : 'https://www.komputronik.pl/frontend-api/customer/login-status',
           
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.login).to.eq(null)
            expect(res.body.logged).to.eq(false)
            expect(res.body.isPremiumClient).to.eq(false)
            expect(res.body.marginEnabled).to.eq(false)
            expect(res.body.current_date).to.eq(today)
           
            

        })    
    })  
})

