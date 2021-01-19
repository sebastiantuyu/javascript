
import MediaPlayer from '../../../assets/MediaPlayer.js'

class AutoPause{
private threshold: number;
player: MediaPlayer

    constructor(){
        
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player) {   
        this.player = player
         
        const observer = new IntersectionObserver(this.handleIntersection,{
            threshold:this.threshold,
        })

        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0]
        console.log(entry.intersectionRatio)
        //entry.intersectionRatio >= 0.25   VISIBLE
        const isVisible = entry.intersectionRatio >= this.threshold
        
        /*
        if (!isVisible){
           this.player.play()
        } else{
            this.player.pause()
        }*/

     
    }

    private handleVisibilityChange(){
        const visible = document.visibilityState === 'visible';
        if(visible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }

}


export default AutoPause
