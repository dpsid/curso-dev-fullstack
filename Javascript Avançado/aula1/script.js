/*


Global
Local

- O escopo determina a visibilidade de uma variável
- As funçoes no JS criam o seu próprio escopo
    - As variáveis de uma função não são acessiveis fora dela

*/

function test() {
    let a = 123
}

test()

console.log(a)