


document.getElementById('region').addEventListener('submit', (e) => {
    e.preventDefault()


    for (let element of e.target.elements) {
        console.log(element.type)
    }
   
} )