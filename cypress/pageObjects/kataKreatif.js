class KataKreatif {

    //Locators
    greenCard = '.kata-card.kata-card--green.default'
    orangeCard = '.kata-card.kata-card--orange.default'

    //Actions

    checkGreenCard(){
        cy.get(this.greenCard).should('contain.text', 'Kota/Kabupaten Kreatif yang Telah Mendaftar')
    }

    checkOrangeCard(){
        cy.get(this.orangeCard).should('contain.text', 'Kota/Kabupaten Kreatif yang Telah ditetapkan')
    }
}

export default KataKreatif;