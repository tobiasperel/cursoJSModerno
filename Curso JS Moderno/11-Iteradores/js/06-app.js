let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, index) =>  {   // es como un for nombre in nombres primero va el value y despues el indice
    console.log(`${index} : ${pendiente}`);
});

pendientes.map( (pendiente, index) =>  {   // es como un for nombre in nombres primero va el value y despues el indice
    console.log(`${index} : ${pendiente}`);
});


const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

carrito.forEach( producto =>  {
    console.log(`Agregaste ${producto}`);
});
