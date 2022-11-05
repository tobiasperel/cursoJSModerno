const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []

eventListenners()

function eventListenners(){
    formulario.addEventListener('submit',agregarTweet)

    document.addEventListener('DOMContentLoaded',() =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        crearHTML()
    })
    

}

function agregarTweet(event){
    event.preventDefault();

    const tweet = document.querySelector('#tweet').value;
    if(tweet===''){
        mostarEror("El mensaje no puede estar vacio!")
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet: tweet
    }

    tweets = [...tweets,tweetObj]
    console.log(tweets)
    crearHTML();
    formulario.reset()
}

function mostarEror(error){
    const mensajeError =document.createElement('p')
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError)
    setTimeout(() => {
        mensajeError.remove();
    },3000);
}

function crearHTML(){
    limpiarHTML()
    tweets.forEach(tweet =>{
        const btnEliminar = document.createElement('a')
        btnEliminar.classList.add('borrar-tweet')
        btnEliminar.textContent= 'X'

        btnEliminar.onclick = () =>{
            borrarTweet(tweet.id);
        }
        
        const li = document.createElement('li')
        li.textContent = tweet.tweet

        li.appendChild(btnEliminar)

        listaTweets.appendChild(li)

        console.log(tweets.lenth)
    });
    sincronizarStorage()
}

function limpiarHTML(){
    
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
    
}

function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id )
    crearHTML()
}