/*

ARROW FUNCTIONS

ES6

As funções de seta nos ppermitem escrever uma sintaxe de função mais curta

*/


// retorno implicito
const soma = (param1, param2) => param1 + param2

const result = soma(11, 2)


const btn = document.querySelector('#btn')

btn.onclick = () => {
    console.log(this)
}
