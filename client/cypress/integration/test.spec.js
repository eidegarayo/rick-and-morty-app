/* eslint-disable no-console */
/* eslint-disable max-nested-callbacks */
/* global cy, Cypress */

/*
 *  TEST USER FLOW
 *  Home
 *  Login
 *  Character-list
 *  Character
 *  Favourite button
 *  Logout
 */
const userUsername = Cypress.env('USER_USERNAME');
const userPassword = Cypress.env('USER_PASSWORD');

Cypress.Cookies.debug(true);

describe('Home page', () => {
  it('Show 7 images', () => {
    cy.visit('/');
    cy.get('img').should('have.length', 7);
  });

  it('6 images are from rick and morty api', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('img').should('have.length', 7);
    cy.get('img[src^="https://rickandmortyapi.com/api/character/avatar"]')
      .should('have.length', 6);
  });
});

describe('Log and add user to redux', () => {
  it('Should go to home before login', () => {
    localStorage.removeItem('accessToken');
    cy.visit('/login');
    cy.get('input[type=text]').type(userUsername);
    cy.get('input[type=password]').type(userPassword);
    cy.contains('button[type=submit]', /^LOG IN/).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });

  it('Should add user to redux store', () => {
    cy.window().its('store').invoke('getState').then((state) => {
      expect(state.account.user.username).to.eq(userUsername);
    });
  });
});

describe('Get character list and pagination', () => {
  it('Get character list first item', () => {
    cy.get('a').contains('Character List').click();
    cy.get('img').should('have.length', 21);
    cy.get('img[src^="https://rickandmortyapi.com/api/character/avatar"]')
      .should('have.length', 20);
  });

  it('Should change page with pagination', () => {
    cy.get('button').contains('->').click();
    cy.location().should((loc) => {
      expect(loc.search).to.eq('?page=2');
    });
    cy.wait(1000);
  });
});

describe('Go to character and add to favourites', () => {
  it('Go to first character', () => {
    cy.contains('LEARN MORE')
      .first()
      .click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/character/21');
    });
  });

  it('Add character to favourites', () => {
    cy.get('svg').first().click();
    cy.wait(1000);
    cy.window().its('store').invoke('getState').then((state) => {
      expect(state.account.user.favourites).to.include(21);
    });
    cy.wait(1000);
    cy.get('svg').first().click();
  });
});
