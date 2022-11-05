//para no modificar el objeto
"use strict"; //para que no sea verzatil

const producto ={
    nombre : 'carlos',
    precio: 35,
    vaAlCine: true,

}
Object.freeze(producto) // para que el objeto no pueda ser modificado

console.log(producto);

console.log(Object.isFrozen(producto)); // para ver si esta frizado