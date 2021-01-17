
    
    // Script principal donde vamos a exportar todo
    import MediaPlayer from './MediaPlayer.js';
    import AutoPlay from './plugins/Autoplay.js';
    import AutoPause from './plugins/AutoPause.js';

    //obtiene el elemento de video
    const video = document.querySelector('video');

    // Crea una nueva "Clase" y añade los plugins
    //  dentro del parentesis ...
    const player = new MediaPlayer({ el: video,
                        plugins: [new AutoPlay(), /* new AutoPause() */ ]
                    });

    //const button = document.querySelector('button');
    const button_play = document.getElementById('play')
    const button_mute = document.getElementById('mute')
    button_play.onclick = () => player.togglePlay();
    button_mute.onclick = () => player.mute();

    // Crea una funcion a forma de "Clase"
/*     function MediaPlayer(){}
    MediaPlayer.prototype.play = function(){
         if(video.paused){
              video.play();}else{video.pause();}
    };
    const player = new MediaPlayer();
    button.onclick = () => player.play(); */
         
//             button.onclick = () => { if(video.paused){video.play();      }else{video.pause();}};
             
             