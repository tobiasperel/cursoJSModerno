const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('super monitor',500)
console.log(producto2);

const producto3 = new Producto('tele',100)
console.log(producto3);