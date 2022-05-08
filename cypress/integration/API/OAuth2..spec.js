/// <reference types="Cypress" />

describe('Testowanie z wykorzystaniem OAuth2', ()=>{
    let access_token = '';
    let userId = ''
    
        it('Generate token', ()=>{
            //to get the token id(access token)
            cy.request({
                method: 'POST',
                url: 'http://coop.apps.symfonycasts.com/token',
                form: true,
                body:{
                    "client_id" : "CyPressAppPWSZ",
                    "client_secret" : "9064056f2c27f1a41e9cb69477330434",
                    "grant_type" : "client_credentials"
                }
        }).then(response=>{
               
               access_token = response.body.access_token;
               cy.log(JSON.stringify(access_token));
               
                cy.request({
                    method: 'GET',
                    url: 'http://coop.apps.symfonycasts.com/api/me',
                    headers: {
                        'Authorization' : 'Bearer ' + access_token
                    }
                }).then(response=>{
                    userId = response.body.id;
                    cy.log("user id " + userId);
                })
            })
        })
            it('Unlock the Barn Test', ()=>{
                            cy.request({
                                method: 'POST',
                                url: 'http://coop.apps.symfonycasts.com/api/'+userId+'/barn-unlock',
                                headers: {
                                    'Authorization' : 'Bearer ' + access_token
                                }
                            }).then(response=>{
                                cy.log(JSON.stringify(response));
                                expect(response.status).to.equal(200);
                            })
            })
            
    
            it('Put the Toilet Seat Down Test', ()=>{
                cy.request({
                    method: 'POST',
                    url: 'http://coop.apps.symfonycasts.com/api/'+userId+'/toiletseat-down',
                    headers: {
                        'Authorization' : 'Bearer ' + access_token
                    }
                }).then(response=>{
                    cy.log(JSON.stringify(response));
                    expect(response.status).to.equal(200);
                })
            })
    
            it('Chicekn Feed Test', ()=>{
                cy.request({
                    method: 'POST',
                    url: 'http://coop.apps.symfonycasts.com/api/'+userId+'/chickens-feed',
                    headers: {
                        'Authorization' : 'Bearer ' + access_token
                    }
                }).then(response=>{
                    cy.log(JSON.stringify(response));
                    expect(response.status).to.equal(200);
                })
            
        })
    
})
    