
export function createVid1(playerSource){
    var vidIds = []
    playerSource.forEach((el, i) => {
        var id = el.contentDetails.videoId;
        vidIds.push(id)

    })
    var videos = Array.from(document.querySelectorAll('.swiper-slide .vid'));

    for(var i = 0; i < videos.length; i++){

        var divId = videos[i].id;

        videos[i] = new YT.Player(divId, {
            height: '500px',
            width: '100%',
            videoId: vidIds[i],
            playerVars: {       
                enablejsapi: 0,
                controls: 0,
                autoplay: 0,
                autohide: 1,
                showinfo: 0,
                rel: 0,
            },
            events: {
                'onReady': onPlayerReady,
                'onError': onPlayerError,
                'onStateChange': onPLayerStateChange
            }
        }); 

        function onPLayerStateChange(event) {
            console.log('state', event);

        }

        function onPlayerReady(event) {
            console.log('ready!!!', event);
        }
        function onPlayerError(event){
            console.log(event);
        }

    }
}