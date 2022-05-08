/// <reference types="Cypress" />

describe('Pobieranie statusu koszyka',() => {

   
 
    it('Get login status', () => {
        cy.request({
            method : 'GET',
            url : 'https://www.komputronik.pl/frontend-api/product/722545/main-attributes',
           
        }).then((res)=>{

            let attributes = "63608_124701_86511_98465"
           
            expect(res.status).to.eq(200)

            expect(res.body.type).to.eq("variants")

            expect(res.body.values[0].name).to.eq("GPS")
            expect(res.body.values[0].values).to.eq("wbudowany")
            expect(res.body.values[0].type).to.eq("text")
            expect(res.body.values[0].selected_value).to.eq("63608")
            expect(res.body.values[0].default_value).to.eq("63608")
            
            expect(res.body.values[1].name).to.eq("Kolor koperty")
            expect(res.body.values[1].type).to.eq("color")
            expect(res.body.values[1].selected_value).to.eq("124698")
            expect(res.body.values[1].default_value).to.eq("124698")
       
        })    
    })  
})

