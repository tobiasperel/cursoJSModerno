const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',(e)=>{ 
    e.preventDefault()
    console.log(e)
    console.log(e.target.action)
})

function validarForm(e){ 
    e.preventDefault()
    console.log(e)
    console.log(e.target.action)

}
