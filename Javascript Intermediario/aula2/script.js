let menuMobile = document.querySelector('.menuMobile')
let btnMenu = document.querySelector('.btnMenu')

let open = false

function openOrClose() {

    if (open === true) {
        open = false
        menuMobile.classList.remove('open')
        btnMenu.innerText = 'abrir menu'
    } else if (open === false) { 
        open = true
        menuMobile.classList.add('open')
        btnMenu.innerText = 'fechar menu'
    }

}