/*
     DOM - Document Object Model 
*/

// document.body.innerText = "<h1>Detta är en rubrik <h1/>"
// document.body.innerHTML = "<h1>Detta är en rubrik <h1/>"

// document.getElementById('results').innerText = "Hejsan";     <--- Vanligaste sättet
// document.getElementById('results').innerHTML = "<h1>Hejsan<h1/>";
// console.log(document.getElementById('results').innerText)

// let text = document.getElementById('results').innerText
// let text2 = text + ' hejsan igen'

// document.getElementById('results').innerText = text2

// Detta funkar på input element
// var name = document.getElementById('name').value
// var name = document.getElementsByTagName('input')[0].value
// var name = document.getElementsByName('name')[0].value
// var name = document.getElementsByClassName('input-text')[0].value


// Detta funkar på alla andra element
// var last = document.getElementsByTagName('div')[0].innerText
// var last = document.getElementById('results').innerText 
// var last = document.getElementsByClassName('div-text')[0].innerText

// var last = document.querySelector('#results').innerText = "Kalle id"
// var last = document.querySelector('.div-text').innerText = "Kalle class"
// var last = document.querySelector('div').innerText = "Kalle div"

// var last = document.querySelectorAll('.div-text')


// console.log(name)
// console.log(last)

var regform = document.getElementById('regform')
console.log(regform)