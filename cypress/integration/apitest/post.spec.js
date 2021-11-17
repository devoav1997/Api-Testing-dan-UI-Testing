describe('Given the title api', () => {
    context('When I send POST /posts', () => {
      it('Then it should create a new title', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/posts',
            body: {
                "title": "recommendation",
                "body": "motorcycle",
                "userId": 12
            }
          })
          .should((response) => {
            expect(response.status).eq(201)
            expect(response.body).to.have.property('title', 'recommendation')
            expect(response.body).to.have.property('body', 'motorcycle')
            expect(response.body).to.have.property('userId', 12)
          });
      });
    });
  });