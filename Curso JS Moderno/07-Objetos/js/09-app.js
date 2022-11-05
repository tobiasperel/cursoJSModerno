//para no modificar el objeto
"use strict"; //para que no sea verzatil

const producto ={
    nombre : 'carlos',
    precio: 35,
    vaAlCine: true,

}
Object.seal(producto) // solo se puede modificar
producto.nombre = 'pepe'
console.log(producto);

console.log(Object.isSealed(producto)); // para ver si esta frizado