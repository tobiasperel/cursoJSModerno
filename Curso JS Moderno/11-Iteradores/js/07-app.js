const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];


for(let pendiente of pendientes){
    console.log(pendiente)
}

for(let producto of carrito){
    console.log(producto.producto)
}