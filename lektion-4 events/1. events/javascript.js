  
/* 
    Javascript Events 
    
        Triggers:
        click, blur, focus, keydown, keyup, mouseclick dblclick etc.
        document = DOM - Document Object Model
        window = BOM - Browser Object Model
*/

// let counter = 0
// const array = []


// document.getElementById('firstname').addEventListener('keyup', (e) => {
//     if(e.target.value.length < 4) {
//         document.getElementById('results').innerText = 'För få tecken i ' + e.target.id
//         document.getElementById('add_btn').disabled = true
//     }
//     else {
//         document.getElementById('results').innerText = ''
//         document.getElementById('add_btn').disabled = false
//     }
// })

// document.getElementById('firstname').addEventListener('keyup', (e) => {
//     validateInputLength(e)
// })
// document.getElementById('lastname').addEventListener('keyup', (e) => {
//     validateInputLength(e)
// })

// function validateInputLength(e) {
//     if(e.target.value.length < 4) {
//         document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
//         document.getElementById('add_btn').disabled = true
//     }
//     else {
//         document.getElementById(`${e.target.id}-error`).innerText = ''
//         document.getElementById('add_btn').disabled = false
//     }
// }




let inputs = document.getElementsByTagName('input')

for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        if(e.target.value.length < 4) {
            document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
            document.getElementById('add_btn').disabled = true
        }
        else {
            document.getElementById(`${e.target.id}-error`).innerText = ''
            document.getElementById('add_btn').disabled = false
        }
    })
} 

    // //Lägg till
    // document.getElementById('add_btn').addEventListener('click', () => {
    //     let element = document.getElementById('input')
    //     arrey.push(element.value)
    //     element.value = ''
    //     console.log(arrey)
    // } )
    // // Ta bort
    // document.getElementById('remove_btn').addEventListener('click', () => {

    //     arrey.pop(++counter)
    //     console.log(arrey)
    // } )


  