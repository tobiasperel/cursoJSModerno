const nav = document.querySelector('.navegacion')

/* 
nav.addEventListener('click',()=>{   // clickeando
    console.log('hace click')
})
*/

nav.addEventListener('mouseenter',()=>{ // pasando por arriba
    console.log('hace click')
    nav.style.background = 'transparent'
})

nav.addEventListener('mouseout',()=>{ 
    console.log('sali')
    nav.style.background = 'white'
})
