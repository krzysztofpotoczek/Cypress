/// <reference types="Cypress" />

describe('Pobranie użytkownika z podanym ID',() => {
    
    let token = '4c9e8b2a490da3b4778412f723c00bd2885baa42610eab60a16d6ba4f93d59dd';
 
    it('Get user', () => {
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/2700',
            headers: {
                'authorization': "Bearer" + token,
              }
        }).then((res)=>{
            const gender = res.body.gender
            const name = res.body.name
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(2700)
            expect(res.body.gender).to.eq(gender)
            expect(res.body.name).to.eq(name)
            

        })    
    })  
})