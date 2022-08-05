
let pc = document.querySelector('#pc')
let count = 0


let interval = setInterval(function(){
    count++
    pc.innerText = count
}, 500)

let btnStop = document.querySelector('#btnStop')

btnStop.onclick = function(){
    clearInterval(interval)
}