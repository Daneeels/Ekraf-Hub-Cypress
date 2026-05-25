import Global from "../pageObjects/global"
import KataKreatif from "../pageObjects/kataKreatif";
import Navbar from "../pageObjects/navbar";

describe('Kata Kreatif Testing', () => {

    const global = new Global();
    const kataKreatif = new KataKreatif();
    const navbar = new Navbar();

    beforeEach('Visit Site', () => {
        
        global.visitEkraf();
        navbar.visitKataKreatif();
    })

    it('Cards Content Testing', () => {

        kataKreatif.checkGreenCard();
        kataKreatif.checkOrangeCard();
        
    })
})