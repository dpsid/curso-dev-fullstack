const clientes = [
    {name: 'Thiago', score: 34},
    {name: 'Jaqueline', score: 38},
    {name: 'Sarah', score: 80},
    {name: 'Clara', score: 50},
    {name: 'Sophia', score: 98},
]

// acc = acumulator
// curr = current
const clientesFinal = clientes.reduce((acc, curr) => {
    if (curr.score >= 50) {
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass: [],
    fail: []
})

console.log(clientesFinal)

const numbers = [1, 2, 3, 4]

const numbersFinal = numbers.reduce((acc, curr) => {
    acc+= `${curr + 1}`
    return acc
}, '')

console.log(numbersFinal)


