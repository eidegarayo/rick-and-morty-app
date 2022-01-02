/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const userUsername = Cypress.env('USER_USERNAME');
const userPassword = Cypress.env('USER_PASSWORD');

Cypress.Commands.add('addTokenToSession', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8080/api/auth/signin',
    body: {
      username: userUsername,
      password: userPassword.toString(),
    },
  })
    .then((resp) => {
      localStorage.setItem('accessToken', resp.body.accessToken);
    });
});
