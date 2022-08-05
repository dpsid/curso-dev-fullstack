

let quadrado = document.querySelector('.quadrado')

function minhaFuncao(e) {
    console.log(e.key)
}

// quadrado.onclick = minhaFuncao

// quadrado.onmousemove = minhaFuncao

// quadrado.onmouseenter = minhaFuncao

// window.addEventListenerListener('resized', minhaFuncao)

window.addEventListener('keypress', minhaFuncao)