//en vez de pisarla crea una nueva
const carrito = [];


const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

resultado = [...carrito,producto,producto2,producto3]


console.table(resultado);