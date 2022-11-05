const navegacion = document.querySelector('.navegacion');
console.log(navegacion.childNodes);
console.log(navegacion.children);

console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);


const card = document.querySelector('.card');

card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0]);                        //ir al hijo


console.log(card.parentElement.parentElement.parentElement);    //ir al padre

console.log(card.nextElementSibling.nextElementSibling);      //ir al siguente hermano

const ultimoCard = document.querySelector('.card:nth-child(4)')

console.log(ultimoCard.previousElementSibling);  //ir al anterior hermano

console.log(ultimoCard.lastElementChild);  //ir al anterior hermano
console.log(ultimoCard.firstElementChild);  //ir al anterior hermano