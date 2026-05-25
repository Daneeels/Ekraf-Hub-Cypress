import Global from "../pageObjects/global"
import KataKreatif from "../pageObjects/kataKreatif";

describe('Kata Kreatif Testing', () => {

    const global = new Global();
    const kataKreatif = new KataKreatif();

    beforeEach('Visit Site', () => {
        
        global.visitEkraf();
        kataKreatif.visitKataKreatif();

    })

    it('Cards Content Testing', () => {

        kataKreatif.checkGreenCard();
        kataKreatif.checkOrangeCard();
        
    })
})