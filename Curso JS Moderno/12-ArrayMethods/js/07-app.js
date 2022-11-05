
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const meses3= ['Noviembre', 'Diciembre'];

// Unir 2 arreglos con concat...
const resultado = meses.concat(meses2,meses3, 'adar bet');
console.log(resultado);

// Existe otra forma... que es con rest operator o spread operator..
const resultado2 = [...meses,...meses2 ]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
console.log(resultado2)