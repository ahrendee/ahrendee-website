describe('Ahrendee.com', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('Check homepage component', () => {
    cy.contains('Independent Full-Stack Software Engineering')
    cy.contains('Typescript | Angular | NodeJS | Java')
    cy.contains('Find out more')
  })

  it('Check menu', () => {
    cy.get('#sidebar-wrapper').should('not.have.class', 'active')

    handleMenuItem('#about', 'About')
    handleMenuItem('#cv', 'CV')
    handleMenuItem('#portfolio', 'Portfolio')
    handleMenuItem('#contact', 'Contact')
  })

  it('Click button and check bio', () => {
    cy.contains('Find out more').click()
    cy.location().should((location) => {
      expect(location.hash).to.eq('#about')
    })

    cy.get('#menu-toggle').click()
    cy.location().should((location) => {
      expect(location.hash).to.eq('')
    })

    cy.contains('Hi, I\'m Ronald Pieterse')
    cy.contains('Fast-learning, autodidact, professional, drives for result.')
    cy.contains('Passionate for new technologies. Problem solver with good interpersonal skills')
    cy.contains('Always looking for new challenges and new technologies to learn')
    cy.contains('Real teamplayer, working in scrum teams for many years')
    cy.contains('After so many years of mostly back-end development I am expanding my knowledge more to')
    cy.contains('full-stack Javascript and Typescript with Angular 8+, NodeJS, Express, MongoDB, etc')
    cy.contains('Quite recently I built the front-end implementation of Apple Pay for the Rabobank')
    cy.contains('Also for the band August Life I created their whole online suite, including a full-blown webshop with Paypal')
    cy.contains('and iDeal links and a manager/admin website to manage gigs, shop articles, orders etc.')
  })

  it('Check CV', () => {
    cy.contains('Get my full up-to-date CV here')
    cy.contains('download')
  })

  it('Check Portfolio', () => {
    cy.contains('Get my full up-to-date CV here')
    cy.contains('download')
  })
})

function handleMenuItem(id, name) {
  cy.get('#menu-toggle').click()
  cy.get('#sidebar-wrapper').should('have.class', 'active')
  cy.get('#sidebar-wrapper').contains(name).click()
  cy.location().should((location) => {
    expect(location.hash).to.eq(id)
  })
  cy.get('#sidebar-wrapper').should('not.have.class', 'active')
}
