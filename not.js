const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle')
const gorevListesi = document.querySelector('.gorev-listesi')

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSil);
document.addEventListener('DOMContentLoaded',localStorageOku)
function gorevSil(e) {
    const tiklanilanEleman = e.target;

    if (tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
        console.log("check");
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
    }
    if (tiklanilanEleman.classList.contains('gorev-btn-sil')) {

        tiklanilanEleman.parentElement.classList.toggle('kaybol');

        tiklanilanEleman.parentElement.addEventListener('transitionend', function () {
            tiklanilanEleman.parentElement.remove();
        })
    }
}

function gorevEkle(e) {
    e.preventDefault();
    gorevItemOlustur(yeniGorev.value);
 //localstorage

 localStorageKaydet(yeniGorev.value);
 yeniGorev.value = '';


}

function localStorageKaydet(yeniGorev) {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'))
    }
    gorevler.push(yeniGorev);
    localStorage.setItem('gorevler', JSON.stringify(gorevler))


}
function localStorageOku() {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'))
    }
    gorevler.foreach(function (gorev) {
        gorevItemOlustur(gorev);
    })

}
function gorevItemOlustur(gorev) {

    // DİV

    const div = document.createElement('div');
    div.classList.add('gorev-item')

    // Li

    const li = document.createElement('li');
    li.classList.add('gorev-tanim')
    li.innerText = gorev;
    div.appendChild(li);

    //  btn
    const tmmBtn = document.createElement('button')
    tmmBtn.classList.add('gorev-btn')
    tmmBtn.classList.add('gorev-btn-tamamlandi')
    tmmBtn.innerHTML = '<i class="far fa-check-square"></i>'

    div.appendChild(tmmBtn)
   
    //
    const silBtn = document.createElement('button')
    silBtn.classList.add('gorev-btn')
    silBtn.classList.add('gorev-btn-sil')
    silBtn.innerHTML = '<i class="far fa-trash-alt"></i>'

    div.appendChild(silBtn)


    // ulye ekleme

    gorevListesi.appendChild(div)
}