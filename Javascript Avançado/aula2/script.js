/*

HOISTING (IÇAR, ERGUER)

Hoisting é o comportamento padrão do Javascript de mover as declarações para o topo de um escopo

*/

function test() {
    function otherFunction() {
        console.log('ok sou uma outra função')
    }

    otherFunction()
} 

test()