let formCad = document.querySelector('#formCad')


formCad.onsubmit = function(e){
    e.preventDefault()

    let error = false

    let inputName = document.forms['formCad']['nome']

    if (!inputName.value) {
        error = true
        inputName.classList.add('inputError')

        let span = inputName.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    } else {
        inputName.classList.remove('inputError')
        let span = inputName.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['formCad']['email']

    if (!inputEmail.value) {
        error = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o e-mail corretamente'
    } else {
        inputEmail.classList.remove('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let selectCity = document.forms['formCad']['city']

    if (!selectCity.value) {
        error = true
        selectCity.classList.add('inputError')

        let span = selectCity.nextSibling.nextSibling
        span.innerText = 'Selecione uma cidade'
    } else {
        selectCity.classList.remove('inputError')
        let span = selectCity.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!error) {
        formCad.submit()
    }
}