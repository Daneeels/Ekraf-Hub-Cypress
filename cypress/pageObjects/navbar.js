import Global from "./global";
    
const global = new Global();

class Navbar {
    //Locators
    burgerMenu = '#menuBurger'

    //Actions
    runMobile(){
        cy.viewport('samsung-note9')
        global.visitEkraf();
        cy.get(this.burgerMenu).click()
    }

    visitEtalaseKreatif(){
        cy.contains('a', 'Etalase Kreatif').click()
        cy.url().should('include', '/etalase-kreatif')
    }

    visitAgendaKreatif(){
        cy.contains('a', 'Agenda Kreatif').click()
        cy.url().should('include', '/agenda-kreatif')
    }

    visitSebaranPelaku(){
        cy.contains('a', 'Sebaran Pelaku').click()
        cy.url().should('include', '/sebaran-pelaku-kreatif')
    }

    visitKataKreatif(){
        cy.contains('a', 'Kata Kreatif').click()
        cy.url().should('include', '/kata-kreatif')
    }

    visitFAQ(){
        cy.contains('a', 'FAQ').click()
        cy.url().should('include', '/faq')
    }
}

export default Navbar;