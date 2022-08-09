const clients = [
    {name: 'Fulano', lastname: 'Da Silva'},
    {name: 'Ciclano', lastname: 'Santos'},
    {name: 'Beltrano', lastname: 'Moreira'},
]

let clientsFinal = []
clients.forEach(function(clients){
    clientsFinal.push(clients.name + ' ' + clients.lastname)
})

console.log(clientsFinal)

const clientsFinalMap = clients.map(clients => clients.name + ' ' + clients.lastname)

console.log(clientsFinalMap)
