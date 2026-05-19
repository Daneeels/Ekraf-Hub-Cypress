describe('FAQ Testing', () => {

  beforeEach('Visit Site', () => {
    cy.visit('https://hub.ekraf.go.id/')
    cy.url().should('include', 'hub.ekraf.go.id')
    cy.contains('a', 'FAQ').click()
    cy.url().should('include', '/faq')
  })

  it('FAQ Toggle Testing', () => {

    cy.get('#accordionFAQ .b-faq__box').each(($box, index) => {
    if (index === 0) return; // skip first item, it's open by default

    const $btn = $box.find('.b-faq__box__button');

    // --- Assert closed before clicking
    cy.wrap($btn).should('have.attr', 'aria-expanded', 'false');

    // --- Click to open
    cy.wrap($btn).click();
    cy.wait(350);

    // --- Assert panel is now open
    cy.wrap($btn).should('have.attr', 'aria-expanded', 'true');

    // --- Click again to close
    cy.wrap($btn).click();
    cy.wait(350);

    // --- Assert panel is now closed
    cy.wrap($btn).should('have.attr', 'aria-expanded', 'false');
    });

  })

    it('FAQ Content Testing', () => {
    
    cy.get('#accordionFAQ .b-faq__box').each(($box, index) => {
    const $btn = $box.find('.b-faq__box__button');

    cy.wrap($btn).click();
    cy.wait(350);

    if (index === 0) {
        cy.wrap($box)
        .find('.b-faq__box__content p') 
        .should('contain.text', 'hub@ekraf.go.id')
        .and('contain.text', '0812-9999-8881')
        .and('contain.text', 'hub.ekraf.go.id')
        .and('contain.text', '@ekraf.ri');
    }else if (index === 1) {
        cy.wrap($box)
        .find('.b-faq__box__content p') 
        .should('contain.text', 'Semua individu dan komunitas yang bergerak di bidang ekonomi kreatif dipersilakan untuk bergabung, baik pemula maupun profesional.');
    }else if (index === 2) {
        cy.wrap($box)
        .find('.b-faq__box__content')
        .should('contain.text', 'EKRAF Hub')
        .and('contain.text', 'Platform pengumpulan data pelaku Ekonomi Kreatif')
        .and('contain.text', 'Pendaftaran')
        .and('contain.text', 'Agenda Kreatif')
        .and('contain.text', 'Etalase Kreatif')
        .and('contain.text', 'Sebaran Pelaku Kreatif');
    }else if(index === 3){
        cy.wrap($box)
        .find('.b-faq__box__content')
        .should('contain.text', 'EKRAF Hub menyediakan ruang')
        .and('contain.text', 'Lengkapi bagian profile usaha kamu')
        .and('contain.text', 'tim admin akan melakukan verifikasi produk kamu');
    }else if(index === 4){
        cy.wrap($box)
        .find('.b-faq__box__content')
        .should('contain.text', 'Dengan mendaftar di ekraf hub, kamu dapat beberapa manfaat antara lain;')
        .and('contain.text', 'Mengakses informasi program, pelatihan')
        .and('contain.text', 'Menjalin koneksi dan kolaborasi dengan pelaku kreatif')
        .and('contain.text', 'Memperoleh eksposur bagi produk dan jasa Anda.')
        .and('contain.text', 'Mengikuti kurasi, pendaftaran program inkubasi');
    }else if(index === 5){
        cy.wrap($box)
        .find('.b-faq__box__content')
        .should('contain.text', 'Pendaftaran dapat dilakukan secara online melalui situs hub.ekraf.go.id')
        .and('contain.text', 'Login Ekraf Hub jika sudah memiliki akun.')
        .and('contain.text', ' Jika belum memiliki akun, buat akun dengan mengisikan')
        .and('contain.text', 'Jika sudah lakukan verifikasi email kemudian login ');
    }else if(index === 6){
        cy.wrap($box)
        .find('.b-faq__box__content')
        .should('contain.text', 'langkah-langkah berikut')
        .and('contain.text', 'Masuk ke Akun Anda')
        .and('contain.text', 'Lengkapi Profil')
        .and('contain.text', 'Pilih Menu')
        .and('contain.text', 'Isi Detail Produk')
        .and('contain.text', 'Nama Produk')
        .and('contain.text', 'Deskripsi Produk')
        .and('contain.text', 'Foto Produk')
        .and('contain.text', 'Tahun Rilis Produk')
        .and('contain.text', 'Tautan E-Commerce')
        .and('contain.text', 'Status Hak Kekayaan Intelektual')
        .and('contain.text', 'Simpan dan Ajukan')
        .and('contain.text', 'Menunggu Proses Verifikasi')
        .and('contain.text', 'pelaku usaha');
    }
    
    });

  })

})