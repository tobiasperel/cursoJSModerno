//para no modificar el objeto
"use strict"; //para que no sea verzatil

const producto ={
    nombre : 'carlos',
    precio: 35,
    vaAlCine: true,

}

const medias={
    calidad : 'alta',
    peso: 35,

}

const total = Object.assign(producto,medias) //une los objetos
const total2 = {...producto,...medias} // lo mismo pero mas usada
console.log(total);

