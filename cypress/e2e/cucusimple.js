import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
Given('open browser enter simpleform url', () => {
  cy.visit('https://v1.training-support.net/selenium/simple-form?');
});
When('enter all details ', () => {
  cy.get('#firstName').type('John'); // Use realistic test data
  cy.get('#lastName').type('Doe'); // Use realistic test data
  cy.get('#email').type('john.doe@gmail.com'); // Use realistic test data
  cy.get('#number').type('7569335977'); // Use realistic test data
});
And('click on submit button', () => {
  cy.get('input[type="submit"]').click(); // No need for xpath
});
Then('will displayed confrim message', () => {
  // Add the assertion for the alert

  cy.on('window:confirm', (text) => {
    expect(text).to.equal('Thank You for reaching out to us, John Doe'); 
  });
});




