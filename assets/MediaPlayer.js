
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
    this.plugins.forEach( plugin => {
            plugin.run(this)
    })
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