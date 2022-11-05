window.addEventListener('scroll', ()=>{
    const scrollpx = window.scrollY
    console.log(scrollpx)

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect()
    if(ubicacion.top<784){
        console.log(ubicacion)
    }else{
        console.log(ubicacion)
    }
    
})

