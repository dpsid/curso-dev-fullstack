let toast = document.querySelector('.toast')
let btn = document.querySelector('.btn')
let captur = document.querySelector('#input')


btn.onclick = function() {
    toast.classList.add('visible')

    toast.innerText = `Tarefa ${captur.value} cadastrada com sucesso!`
    setTimeout(function() {
        toast.classList.remove('visible')
    }, 5000)
}