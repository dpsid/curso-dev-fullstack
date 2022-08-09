/*

LOCAL STORAGE

 */


const tarefas = [
    {tarefa: 'estudar js'},
    {tarefa: 'estudar nod.js'},
    {tarefa: 'estudar react.js'},
]

const tarefasJason = JSON.stringify(tarefas)

localStorage.setItem('tarefa', tarefasJason)

const listaTarefasSalvas = localStorage.getItem('tarefa')

const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)