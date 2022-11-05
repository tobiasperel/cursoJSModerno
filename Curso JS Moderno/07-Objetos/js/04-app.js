const producto ={
    nombre : 'carlos',
    precio: 35,
    vaAlCine: true

}

//const nombre = producto.nombre

//console.log(nombre);

const { nombre,precio } = producto

console.log(nombre,producto.vaAlCine); // mando nombre y precio