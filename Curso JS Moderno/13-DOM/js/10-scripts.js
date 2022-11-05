const enalce = document.createElement('a');

enalce.textContent = 'hola putita'
enalce.href = '/nuevo-enlace'

console.log(enalce)

enalce.setAttribute('date-enlace', 'nuevo-enlace')
enalce.classList.add('alguna-clase')

const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(enalce)

/*
navegacion.insertBefore(enalce, navegacion.children[1])
function miFuntion(){
    alert('comiste')
}
*/

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por pesrona';
parrafo3.classList.add('precio');

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const card = document.createElement('div');
card.classList.add('card');

// Vamos a asignar la imagen al card...
card.appendChild(imagen);

// y el info
card.appendChild(info);


// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // al inicio info

console.log(parrafo1);
console.log(parrafo2);