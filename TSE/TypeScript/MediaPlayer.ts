
// Plugin que va a exportar sus funciones

import { config } from "process";

class MediaPlayer { 
    media: HTMLMediaElement
    plugins: Array<any>
    // EL VIDEO ELEMENT ES UN ELEMENTO HTMLELEMENT
    constructor(config){
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlugins();
    }


    private initPlugins(){
        const player = {
        play: () => this.play(),
        pause: ()=> this.pause(),
        media: this.media,
        // GETTER
        get muted() {
            return this.media.muted
        },
        // SETTER
        set muted(value) {
            this.media.muted = value
        },
    }
    
    // PASAMOS EL OBJETO PLAYER, Y ASI LIMITAMOS EL ACCESO DE LAS DEMAS FUNCIONES AL MEDIA
    this.plugins.forEach( plugin => { plugin.run(this)})
    }

    play(){
        this.media.play();

    }

    pause(){
        this.media.pause();

    }

    togglePlay(){
        if(this.media.paused){
            this.play();
        }else{
            this.pause();
        }
    }
    mute(){
        if(!this.media.muted){
            this.media.muted = true
       }else{
           this.media.muted = false
       }
    }
}

export default MediaPlayer;