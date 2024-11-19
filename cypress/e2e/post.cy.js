describe('post', () => {
 let token;
  it('passes', () => {
    cy.request({
      method: 'POST',
      url: 'https://simple-books-api.glitch.me/api-clients/',
      body: {
        "clientName": "Patdfil",
        "clientEmail": "roylfffmech@gmail.com"
      },
      headers: {
        'Content-Type': 'application/json'
      },
       
      failOnStatusCode: false
    })
    .then((vr) => {
      expect(vr.status).to.eq(201);
      const res=  JSON.parse(JSON.stringify(vr.body));

      token = res.accessToken;

     cy.log(token)
     
    });
  });
});
