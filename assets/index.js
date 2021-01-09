
    
    // Script principal donde vamos a exportar todo
    import MediaPlayer from './MediaPlayer.js';
    import AutoPlay from './plugins/Autoplay.js';


    const video = document.querySelector('video');

    // Crea una nueva "Clase" y añade los plugins
    //  dentro del parentesis ...
    const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]});

    const button = document.querySelector('button');
    button.onclick = () => player.togglePlay();

    // Crea una funcion a forma de "Clase"
/*     function MediaPlayer(){}
    MediaPlayer.prototype.play = function(){
         if(video.paused){
              video.play();}else{video.pause();}
    };
    const player = new MediaPlayer();
    button.onclick = () => player.play(); */
         
//             button.onclick = () => { if(video.paused){video.play();      }else{video.pause();}};
             
             