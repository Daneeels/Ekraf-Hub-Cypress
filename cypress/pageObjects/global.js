class Global {
    
    //Locators
    ekrafURL = 'https://hub.ekraf.go.id/'

    //Actions
    visitEkraf(){
        cy.visit(this.ekrafURL)
        cy.url().should('include', 'hub.ekraf.go.id')
    }
    
}

export default Global;