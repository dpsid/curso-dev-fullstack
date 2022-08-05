document.querySelector('h1').innerHTML = 'Exemplo'

let coun = 0
let boxes = document.querySelectorAll('div')

let count = 0
boxes.forEach(function(e) { // função anonima / callback
    count++
    e.innerHTML = `box ${count}`
})