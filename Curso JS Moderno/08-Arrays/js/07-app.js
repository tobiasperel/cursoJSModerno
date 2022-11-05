const carrito = [];


const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);


const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

//carrito.pop(); //eliminar ultimo elemento
//carrito.shift(); //eliminar el primero elemento

console.table(carrito);

carrito.splice(0,2) // desde hasta donde elemino no incluyes [0,2)

console.table(carrito);