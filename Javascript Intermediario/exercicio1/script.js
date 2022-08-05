let btnSubtraction = document.querySelector('.btnSubtraction')
let btnAddition = document.querySelector('.btnAddition')
let viewfinder = document.querySelector('div')

let count = 0
let increament

btnSubtraction.onclick = function(){
    clearInterval(increament)
    increament = setInterval(function(){
        count--
        viewfinder.innerText = count
    },800)
}
    
btnAddition.onclick = function(){
    clearInterval(increament)
    increament = setInterval(function(){
        count++
        viewfinder.innerText = count
    },800)
}