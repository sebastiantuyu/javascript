
// Plugin que va a exportar sus funciones

function MediaPlayer(config){ 
    this.media = config.el;
    this.plugins = config.plugins || [];

    //Inicializar plugins
    this._initPlugins();

}

MediaPlayer.prototype._initPlugins = function(){
    //this.pl
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

/* MediaPlayer.prototype.tryPlay() = function(){
    if(this.media.paused){
        this.play();
    }else{
        this.pause();
    }
}; */

export default MediaPlayer;