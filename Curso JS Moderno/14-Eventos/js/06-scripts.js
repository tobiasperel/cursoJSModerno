const cardDiv = document.querySelector('.card')
const infodDiv = document.querySelector('.info')
const tituloDiv = document.querySelector('.titulo')

cardDiv.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click en card')
})
infoDiv.addEventListener('click', ()=>{
    e.stopPropagation()
    console.log('click en card')
})
tituloDiv.addEventListener('click', ()=>{
    e.stopPropagation()
    console.log('click en card')
})