
export function createVidTape(playerSource) {

    window.vid = [];

    var container = document.querySelector('.vid-tape')
    playerSource.forEach((el, i) => {
        
        var id = el.contentDetails.videoId;
        var url = el.snippet.thumbnails.standard.url;

        createHolders(id, container);
        
    })
    createVid1();
}
function createHolders(id, container){
    
    var item = `
    <div>
        <div>
            <div id="${id}" class="vid"></div>
        </div>
    </div>
    `

    container.innerHTML += item;

}
function createVid1(){

    var videos = Array.from(document.querySelectorAll('.vid-tape .vid'));

    for(var i = 0; i < videos.length; i++){

        var divId = videos[i].id;

        videos[i] = new YT.Player(divId, {
            height: '100%',
            width: '100%',
            videoId: divId,
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