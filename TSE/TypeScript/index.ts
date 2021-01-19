
    
    // Script principal donde vamos a exportar todo
    import MediaPlayer from './plugins/MediaPlayer';
    import AutoPlay from './plugins/Autoplay';
    import AutoPause from './plugins/AutoPause';

    //obtiene el elemento de video
    const video = document.querySelector('video');

    // Crea una nueva "Clase" y añade los plugins
    //  dentro del parentesis ...
    const player = new MediaPlayer({ el: video,
                        plugins: [new AutoPlay(), new AutoPause()]
                    });

    //const button = document.querySelector('button');
    const button_play: HTMLElement = document.getElementById('play')
    const button_mute: HTMLElement = document.getElementById('mute')
    button_play.onclick = () => player.togglePlay();
    button_mute.onclick = () => player.mute();


    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error)})

    }
