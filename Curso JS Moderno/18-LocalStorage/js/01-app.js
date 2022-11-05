localStorage.setItem('nombre','tobias') // local storage toma todo como si fuese string. No acepta objetos ni arrays

const producto = {
    nombre: 'carlos',
    peso : 85
}

const productoString = JSON.stringify(producto) // te lo convierte en json

localStorage.setItem('producto',productoString)

const meses = ['Enero','febrero','marzo']
/*
const mesesString   = JSON.stringify(meses)

localStorage.setItem('meses',mesesString)
*/

// tambien para acortarlo se puede hacer:

localStorage.setItem('meses',JSON.stringify(meses))

