const clients = [
    {name: 'Fulano', lastname: 'Da Silva', age: 14},
    {name: 'Ciclano', lastname: 'Santos', age: 18},
    {name: 'Beltrano', lastname: 'Moreira', age: 20},
]

const clientsOlders = clients.filter(clients => {
    //if ternario
    return clients.age >= 18
})

console.log(clientsOlders)