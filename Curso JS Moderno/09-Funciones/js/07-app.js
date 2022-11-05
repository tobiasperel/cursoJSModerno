function iniciarApp() { 
    console.log('Iniciar app');
    saludar('Juan', 'De la torre'); 
    saludar('Juan'); 
}

function saludar(nombre, apellido = 'no igreso apellido mamerto') { 
    console.log( `Hola ${nombre}  ${apellido} ` );
}

iniciarApp()