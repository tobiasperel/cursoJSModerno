const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const btnReset = document.querySelector('#resetBtn');
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
eventListener()

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



function eventListener(){
    document.addEventListener('DOMContentLoaded',iniciarApp)

    email.addEventListener('blur',validarFormulario)
    asunto.addEventListener('blur',validarFormulario)
    mensaje.addEventListener('blur',validarFormulario)

    formulario.addEventListener('submit', enviarEmail)

    btnReset.addEventListener('click', resetearFormulario)
}


function iniciarApp(){

    btnEnviar.disabled = true
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

function validarFormulario(event){

    if( event.target.value.length > 0 ) {
        
        const error = document.querySelector('p.error')
        if (error){
            error.remove();
        }
        

        event.target.classList.remove('border', 'border-red-500')
        event.target.classList.add('border', 'border-green-500');
    }else{
        event.target.classList.remove('border', 'border-green-500')
        event.target.classList.add('border', 'border-red-500');
        mostarError('Todos los campos son obligatorios');
    }

    if(event.target.type === 'email'){

        
        if (re.test(event.target.value)){
            console.log('email valido')
            
        }else{
            console.log('El email no es valido')
            event.target.classList.add('border', 'border-red-500');
            mostarError('El email no es valido');
        }
    }
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
    }
}

function mostarError(mensaje){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error')
    if (errores.length === 0){
        formulario.appendChild(mensajeError)
    }
}


function enviarEmail(event){
    event.preventDefault()

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    setTimeout( () => {
        spinner.style.display = 'none';
        const parrafo = document.createElement('p')
        parrafo.textContent = 'El mensaje fue enviado con éxito!'
        parrafo.classList.add('border', 'border-green-500', 'background-color-100', 'text-green-500', 'p-3', 'mt-5','mb-5', 'text-center')
        formulario.insertBefore(parrafo, spinner)
        setTimeout( () => {
            parrafo.remove()
            resetearFormulario()
        }, 5000);
    }, 3000);
}


function resetearFormulario(event){
    event.preventDefault()
    formulario.reset()
    iniciarApp()
}