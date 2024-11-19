describe('Youtube', () => {
    it('relod,forward', () => {
         cy.visit('https://www.youtube.com/')
         cy.go('back')
         cy.go('forward')
         cy.reload()
    });
});