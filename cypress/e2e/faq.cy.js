import Global from "../pageObjects/global"
import FAQ from "../pageObjects/faq";

describe('FAQ Testing', () => {

    const global = new Global();
    const faq = new FAQ();

    beforeEach('Visit Site', () => {
        global.visitEkraf();
        faq.visitFAQ();
    })

    it('FAQ Toggle Testing', () => {

        faq.togglePanel();

    })

    it('FAQ Content Testing', () => {
        
        faq.checkContent();

    })

})