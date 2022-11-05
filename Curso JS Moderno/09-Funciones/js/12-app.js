const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

const nuevoArray = carrito.map( producto => {            // al ser un valor es opcional el parentesis
    return `Articulo: ${ producto.nombre } Precio: ${ producto.precio} `   
})

const nuevoArray3 = carrito.map (producto => `Articulo: ${ producto.nombre } -  Precio: ${ producto.precio} ` )  



const nuevoArray2 = carrito.forEach( producto => {  
    return `Articulo: ${ producto.nombre } Precio: ${ producto.precio} ` 
})

console.log(nuevoArray)         // la diferencia de map es que permite generar nuevo 
console.log(nuevoArray2)