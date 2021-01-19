import MediaPlayer from '../../../assets/MediaPlayer.js'

class AutoPlay {

    run(player: MediaPlayer){
        if(!player.media.muted){
            player.media.muted = true
        }
        player.play()
        
    }
    debugger
}



export default AutoPlay;