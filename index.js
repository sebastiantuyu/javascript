
    const video = document.querySelector('video');
    const button = document.querySelector('button');
    // Crea una funcion a forma de "Clase"
    function MediaPlayer(){}
    MediaPlayer.prototype.play = function(){
         if(video.paused){
              video.play();}else{video.pause();}
    };
    const player = new MediaPlayer();
    button.onclick = () => player.play();
         
//             button.onclick = () => { if(video.paused){video.play();      }else{video.pause();}};
             
             