describe('Navbar checking (Desktop)', () => {

  beforeEach('Visit Site', () => {
    cy.visit('https://hub.ekraf.go.id/')
    cy.url().should('include', 'hub.ekraf.go.id')
  })

  it('Navigate to Etalase Kreatif', () => {
    cy.contains('a', 'Etalase Kreatif').click()
    cy.url().should('include', '/etalase-kreatif')
  })

  it('Navigate to Agenda Kreatif', () => {
    cy.contains('a', 'Agenda Kreatif').click()
    cy.url().should('include', '/agenda-kreatif')
  })

  it('Navigate to Sebaran Pelaku', () => {
    cy.contains('a', 'Sebaran Pelaku').click()
    cy.url().should('include', '/sebaran-pelaku-kreatif')
  })

  it('Navigate to Kata Kreatif', () => {
    cy.contains('a', 'Kata Kreatif').click()
    cy.url().should('include', '/kata-kreatif')
  })

  it('Navigate to FAQ', () => {
    cy.contains('a', 'FAQ').click()
    cy.url().should('include', '/faq')
  })

})

describe('Navbar Checking (Responsive)', () => {

  beforeEach('Visit Site', () => {
    cy.viewport('samsung-note9')
    cy.visit('https://hub.ekraf.go.id/')
    cy.url().should('include', 'hub.ekraf.go.id')
  })

  it('Navigate to Etalase Kreatif', () => {
    cy.get('#menuBurger').click()
    cy.contains('a', 'Etalase Kreatif').click()
    cy.url().should('include', '/etalase-kreatif')
  })

  it('Navigate to Agenda Kreatif', () => {
    cy.get('#menuBurger').click()
    cy.contains('a', 'Agenda Kreatif').click()
    cy.url().should('include', '/agenda-kreatif')
  })

  it('Navigate to Sebaran Pelaku', () => {
    cy.get('#menuBurger').click()
    cy.contains('a', 'Sebaran Pelaku').click()
    cy.url().should('include', '/sebaran-pelaku-kreatif')
  })

  it('Navigate to Kata Kreatif', () => {
    cy.get('#menuBurger').click()
    cy.contains('a', 'Kata Kreatif').click()
    cy.url().should('include', '/kata-kreatif')
  })

  it('Navigate to FAQ', () => {
    cy.get('#menuBurger').click()
    cy.contains('a', 'FAQ').click()
    cy.url().should('include', '/faq')
  })
})