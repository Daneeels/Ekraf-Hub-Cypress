describe('Kata Kreatif Testing', () => {

    beforeEach('Visit Site', () => {
        cy.visit('https://hub.ekraf.go.id/')
        cy.url().should('include', 'hub.ekraf.go.id')
        cy.contains('a', 'Kata Kreatif').click()
        cy.url().should('include', '/kata-kreatif')
    })

    it('Cards Content Testing', () => {
        cy.get('.kata-card.kata-card--green.default').should('contain.text', 'Kota/Kabupaten Kreatif yang Telah Mendaftar')
        cy.get('.kata-card.kata-card--orange.default').should('contain.text', 'Kota/Kabupaten Kreatif yang Telah ditetapkan')
    })
})