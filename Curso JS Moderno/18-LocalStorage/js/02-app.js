const nombreJson = localStorage.getItem('producto') 
console.log(nombreJson)

nombre = JSON.parse(nombreJson) // para convertirlo en un objeto
console.log(nombre)

