const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe...')
    }
})

const resultado = meses.includes('Enero') // si esta o no  es para array

const existe = carrito.some ( producto =>  producto.nombre === 'Celular') // si esta o no es para objetos y array

const existe2 = meses.some ( mes =>  mes === 'Marzo') // si esta o no es para objetos y array