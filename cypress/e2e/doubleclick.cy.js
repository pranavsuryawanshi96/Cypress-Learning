describe('demorguru', () => {
    it('clicking', () => {
    cy.visit('https://demo.guru99.com/test/simple_context_menu.html');
    cy.xpath('//span[text()="right click me"]').rightclick()
     });
         it('dobleclk', () => {
            cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
             cy.xpath('//button[text()="Double-Click Me To See Alert"]').dblclick()
        });



});