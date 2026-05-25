class KataKreatif {

    //Locators
    greenCard = '.kata-card.kata-card--green.default'
    orangeCard = '.kata-card.kata-card--orange.default'

    //Actions
    visitKataKreatif(){
        cy.contains('a', 'Kata Kreatif').click()
        cy.url().should('include', '/kata-kreatif')
    }

    checkGreenCard(){
        cy.get(this.greenCard).should('contain.text', 'Kota/Kabupaten Kreatif yang Telah Mendaftar')
    }

    checkOrangeCard(){
        cy.get(this.orangeCard).should('contain.text', 'Kota/Kabupaten Kreatif yang Telah ditetapkan')
    }
}

export default KataKreatif;