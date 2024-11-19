describe('', () => {
    before(() => {
        cy.fixture('datadriven.json').then((data)=>{
             globalThis.data=data
        })
    });
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
    });
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(data.invaliduser)
        cy.get('[name="password"]').type(data.invalidpassword)
        cy.get('[type="submit"]').click()
    });
});