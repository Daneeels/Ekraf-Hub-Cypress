import Global from "../pageObjects/global"
import FAQ from "../pageObjects/faq";
import Navbar from "../pageObjects/navbar";

describe('FAQ Testing', () => {

    const global = new Global();
    const faq = new FAQ();
    const navbar = new Navbar();

    beforeEach('Visit Site', () => {
        global.visitEkraf();
        navbar.visitFAQ();
    })

    it('FAQ Toggle Testing', () => {

        faq.togglePanel();

    })

    it('FAQ Content Testing', () => {
        
        faq.checkContent();

    })

})