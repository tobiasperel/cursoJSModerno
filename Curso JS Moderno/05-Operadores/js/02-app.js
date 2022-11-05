const numero1 = 20
const numero2 = '20'
const numero3 = 30

console.log( numero1 == numero3 );
console.log( numero1 == numero2 ); // te tira true aunque tengan distinto tipo
console.log( numero1 === numero2 );// te tira flase es mas estrcito pórque se fija el tipo tambien


console.log( numero1 != numero3 ); //diferente
console.log( numero1 != numero2 ); // te tira true aunque tengan distinto tipo
console.log( numero1 !== numero2 );// te tira flase es mas estrcito pórque se fija el tipo tambien