
export function createVidTape(playerSource){
    var vidIds = []
    var dates = []
    playerSource.forEach((el, i) => {
        var id = el.contentDetails.videoId;
        var desc = el.snippet.description;
        var date = el.snippet.publishedAt;
        var obj= {}
        obj[id] = desc;
        vidIds.push(obj)
        dates.push(date)

    })
    console.log(vidIds);
    var videos = Array.from(document.querySelectorAll('.swiper-slide .vid'));
    
    var descCont = Array.from(document.querySelectorAll('.swiper-slide p'));
    var dateCont = Array.from(document.querySelectorAll('.swiper-slide span'));
    // console.log(moment.duration('PT15M33S').asMilliseconds(););
    for(var i = 0; i < videos.length; i++){
        if(vidIds[i] ===  undefined){
            return;
        }
        // console.log(vidIds[i]);
        var key = Object.keys(vidIds[i])

        descCont[i].innerHTML = vidIds[i][key]
        dateCont[i].innerHTML = dates[i].split('T')[0]

        var divId = videos[i].id;

        videos[i] = new YT.Player(divId, {
            height: '500px',
            width: '100%',
            videoId: Object.keys(vidIds[i])[0],
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
            // console.log('state', event);

        }

        function onPlayerReady(event) {
            // console.log('ready!!!', event);
        }
        function onPlayerError(event){
            // console.log(event);
        }

    }
}
