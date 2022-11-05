const meses = ['enero','febreor', "marzo", "abril"]

meses[0] = 'nuevo mes'
meses[9] = 'agosto'  // se saltea las que no existen

//aceceer
console.table(meses)
console.log(meses.length) // largo del array

for(let i=0; i<meses.length; i++){
    console.log(meses[i])
}