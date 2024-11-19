describe('youtube', () => {
    it('frwrd.go', () => {
        cy.visit('https://www.youtube.com/');
        cy.go('back')
        cy.go('forward')
        cy.reload()
        
    });
});