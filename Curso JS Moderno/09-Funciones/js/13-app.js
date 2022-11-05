const reproductor = {
    cancion = 'sads',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),

    pausar: () => console.log('pausando...'),

    borrar: function(id) {
        console.log(`Borrando canción con id: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    },

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log ('AÑADIENDIO '+ cancion)
    },
    get obtenerCancion(){
        console.log ('obteniendo '+ this.cancion)
    }

}


reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');
