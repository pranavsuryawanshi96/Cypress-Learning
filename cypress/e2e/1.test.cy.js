describe('HerokuApp', () => {

    it('Login', () => {

    cy.visit('https://zepto-masai.netlify.app/signup')

    cy.get('#signupUsername').type('pranav7789')
    cy.get('#signupEmail').type('Patil@gmail.com')
    cy.get('#signupContact').type('9066189696')
    cy.get('#signupPassword').type('P12345678')
    cy.get('#signupForm > button').click()         
    

    // cy.get('#password').type('SuperSecretPassword!')

    });

});



// describe('HerokuooooApp', () => {
//     it('Login', () => {
//         cy.visit('https://the-internet.herokuapp.com/login')
//         cy.url().should('eq','https://the-internet.herokuapp.com/login')
//         cy.xpath('//input[@name="username"]').type('tomsmith');
//       //  cy.title().should('include','The Internet')
//       //  cy.get('#username').type('tomsmith')
//         cy.get('#password').type('SuperSecretPassword!')
//         cy.get('.radius').click()
//     });
// })

describe('HerokuooooApp', () => {
    it('Login', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login');
    //     cy.url().should('eq','https://the-internet.herokuapp.com/login');
    //     cy.title().should('include','Internet'); //title to check verify title
    //        cy.xpath('//input[@name="username"]').type('tomsmith');
    //     cy.get('#username').type('tomsmith')
    //    // cy.get('[name="password"]').type('SuperSecretPassword');
    //     //  cy.get('#username').type('tomsmith')
    //     //  cy.get('#password').type('SuperSecretPassword!')
    //     cy.get('.radius').click()

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //   cy.xpath("//input[@placeholder='Username']").should('be.visible'); // for checking  text is visible  or not 
          cy.xpath('//input[@placeholder="Password"]').should('be.visible');
        //  cy.xpath("//input[@placeholder='Username']").should('exist');       // esxist or not in HTML code/DOM
        //  cy.xpath("//input[@placeholder='Username']").should('not.exist');       //for negavtive  is presnt already
    //  cy.xpath("//input[@placeholder='Username']").type('Admin').should('have.value','Admin') //chek  with poper placeholder present or not  with write
    //     cy.xpath("//input[@placeholder= 'Password']").type('admin123').should('have.value','admin123');
    //     //  cy.xpath("//input[@placeholder='Username']").should('not.be.visible');
    //     cy.xpath("//input[@placeholder='Username']").should('have.attr','placeholder','Username')  //will chekc entire things wi
    //   cy.xpath("//input[@placeholder='Password']").should('have.attr','placeholder','Password')
        cy.xpath('//button[@type="submit"]').should('have.text',' Login '); 
         cy.get('[type="submit"]').should('eq','Login');
          cy.get('[type="submit"]').should('contains')

   }); 
});