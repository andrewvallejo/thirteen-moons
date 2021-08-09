/* eslint-disable no-undef */
describe('Creation Page', () => {
  let id, remaining 
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', 'https://deckofcardsapi.com/api/deck/new/',{
      statusCode: 200,
      fixture: "new-deck.json"
    })
   cy.intercept('GET', `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${remaining}777/draw/?count=4`, {
      statusCode: 200,
      fixture: "cards.json" }
      )
  })

  it('Should sucessfully load upon initial visit', () => {
    cy.get('button')
    cy.get('.message-bar')
      .should('be.visible')
      .get('.moon-face')
      .should('be.visible')
      .get('.dialog')
    .should('have.text','Do you wish to craft a Moon challenge card?')
    cy.get('.dummy-card')
      .should('be.visible')
      .get('.terms > .count')
      .should('have.text', '∞')
    cy.get('.rules')
      .get('.rules > h2')
      .should('have.text', 'Talents')
      .get('.rules > :nth-child(2)')
      .should('have.text', 'Mind')
      .get('.rules > :nth-child(3)')
      .should('include.text', 'challenges your brain. Repetition ')
      .get('.rules > :nth-child(4)')
      .should('have.text', 'Spirit')
      .get('.rules > :nth-child(5)')
      .should('include.text', 'your soul. Just')
      .get('.rules > :nth-child(6)')
      .should('have.text', 'Wisdom')
      .get('.rules > :nth-child(7)')
      .should('include.text', 'perspective. The moon')
      .get('.rules > :nth-child(8)')
      .should('have.text', 'Vitality')
      .get('.rules > :nth-child(9)')
      .should('include.text', 'your muscles. You')
    cy.get('.create-button')
      .should('have.text', 'Create a moon card.')
    cy.get('.start-button')
      .should('have.text', 'I\'m content')
    cy.get('.creation-form') 
      .get('[for="talent"]')  
      .should('have.text', 'Choose a talent')
      .get('#talents')
      .should('have.text', ' Talents MindSpiritWisdomVitality')
      .get('[for="count"]')
      .should('have.text', 'Choose a number between 1 and 13.')
      .get('#count')
      .should('exist')
      .get('[for="terms"]')
      .should('have.text', 'Write your terms.')
      .get('#terms')
      .should('have.attr', 'placeholder', 'Enter your challenge here')
      .get('[for="intervals"]')
      .should('have.text', 'Choose an interval.')
      .get('#intervals')
      .should('include.text', 'minutesrepetitionscountspageschaptersarticlesmilesreps of 10ounces')      
    })
    it('Should be able to successfully make a new card', () => {

    })
})

describe('Game Page', () =>  {

    let id, remaining 
    beforeEach(() => {
      cy.visit('/')
      cy.intercept('GET', 'https://deckofcardsapi.com/api/deck/new/',{
        statusCode: 200,
        fixture: "new-deck.json"
      })
     cy.intercept('GET', `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${remaining}777/draw/?count=4`, {
        statusCode: 200,
        fixture: "cards.json" }
        )
        cy.get('.start-button')
        .click()
    })
  

  it('Should be able to load the game upon visit', () => {
    cy.get(':nth-child(3) > a > .inner-card > .card-front > .card-content')
    .should('exist')
  })  
})