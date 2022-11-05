const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('keydown',()=>{ // pasando por arriba
    console.log('escribiendo')
})

busqueda.addEventListener('keydup',()=>{ // pasando por arriba
    console.log('escribiendo')
})

busqueda.addEventListener('copy',()=>{ // pasando por arriba
    console.log('escribiendo')
})

busqueda.addEventListener('paste',()=>{ // pasando por arriba
    console.log('escribiendo')
})

busqueda.addEventListener('cut',(event)=>{ // pasando por arriba
    console.log(event.type)
})


busqueda.addEventListener('input',(event)=>{ // pasando por arriba
    console.log(event.target.value) //te dice lo que el usuario esta escribiendo
})
