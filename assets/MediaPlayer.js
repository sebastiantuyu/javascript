
// Plugin que va a exportar sus funciones

function MediaPlayer(config){ 
    this.media = config.el;

    // configura un array de plugins o setea un array vacio 
    // por default
    this.plugins = config.plugins || [];

    //Inicializar plugins
    this._initPlugins();

}

MediaPlayer.prototype._initPlugins = function(){
    /* this.plugins.forEach( plugin => {
            plugin.run(this)
    }) */
    const player = {
        play: () => this.play(),
        pause: ()=> this.pause(),
        media: () => this.media(),
        // GETTER
        get muted() {
            return this.media.muted
        },
        // SETTER
        set muted(value) {
            if(!value){
                value = true
            }else{
                value = false
            }
        },
    }
    
    // PASAMOS EL OBJETO PLAYER, Y ASI LIMITAMOS EL ACCESO DE LAS DEMAS FUNCIONES AL MEDIA
    this.plugins.forEach( plugin => { plugin.run(player)})
}

MediaPlayer.prototype.play = function(){
    this.media.play();
};

MediaPlayer.prototype.pause = function(){
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused){
        this.play();
    }else{
        this.pause();
    }
}

MediaPlayer.prototype.mute = function(){
    if(this.media.muted){
        this.media.muted = false
    }else{
        this.media.muted = true
    }
}

/* MediaPlayer.prototype.tryPlay() = function(){
    if(this.media.paused){
        this.play();
    }else{
        this.pause();
    }
}; */

export default MediaPlayer;