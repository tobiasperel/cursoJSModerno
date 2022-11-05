const producto ={
    nombre : 'carlos',
    precio: 35,
    vaAlCine: true,
    informacion: {
        peso: 15,    
        calidad : 'buena'
    },
    pais: {
        ciudad: 'bsas',    
        barrio : 'palermo'
    }
}

const {nombre , informacion:{peso},pais } = producto

console.log(nombre,peso,pais ); 

