describe('jsonplaceholder cypress io api', () => {
    context('GET /posts', () => {
        it('should return a list with all title', () => {
            cy.request({
                method: 'GET',
                url: 'https://jsonplaceholder.cypress.io/posts'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                
                });
        });
    });
});