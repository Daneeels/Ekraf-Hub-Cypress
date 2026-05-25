import Global from "../pageObjects/global";
import Navbar from "../pageObjects/navbar";

const global = new Global();
const navbar = new Navbar();

describe('Navbar checking (Desktop)', () => {

  beforeEach('Visit Site', () => {
    global.visitEkraf();
  })

  it('Navigate to Etalase Kreatif', () => {
    navbar.visitEtalaseKreatif();
  })

  it('Navigate to Agenda Kreatif', () => {
    navbar.visitAgendaKreatif();
  })

  it('Navigate to Sebaran Pelaku', () => {
    navbar.visitSebaranPelaku();
  })

  it('Navigate to Kata Kreatif', () => {
    navbar.visitKataKreatif();
  })

  it('Navigate to FAQ', () => {
    navbar.visitFAQ();
  })

})

describe('Navbar Checking (Responsive)', () => {

  beforeEach('Visit Site', () => {
    navbar.runMobile();
  })

  it('Navigate to Etalase Kreatif', () => {
    navbar.visitEtalaseKreatif();
  })

  it('Navigate to Agenda Kreatif', () => {
    navbar.visitAgendaKreatif();
  })

  it('Navigate to Sebaran Pelaku', () => {
    navbar.visitSebaranPelaku();
  })

  it('Navigate to Kata Kreatif', () => {
    navbar.visitKataKreatif();
  })

  it('Navigate to FAQ', () => {
    navbar.visitFAQ();
  })
})