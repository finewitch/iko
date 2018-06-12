export function createYT1(container, id){
     var YT1;
     YT1 = new YT.Player(container, {
         height: '600',
         width: '100%',
         videoId: id,
         playerVars: {
             showinfo:'0',
             rel: '0'
         },
         events: {
           'onReady': onPlayerReady
         }
       });
     
     function onPlayerReady(event) {
         // console.log('PLAYER READY');
         // event.target.playVideo();
       }
     // console.log(player);
     // mainVid.src = linkPart + id
     
     //pass first 3 after excluding main
}
export function createYTtapeVid(i, id, miniVidScope){
     // scope['counter' + i] = 0;
     // console.log(miniVidScope);
     miniVidScope['vid' + i] = new YT.Player('vid-' + i, {
          height: '430',
          width: '100%',
          videoId: id,
          playerVars: {
              showinfo:'0',
          },
          events: {
            'onReady': onPlayerReady,
               'onStateChange' : onPlayerStateChange
          }
        });
        function onPlayerStateChange(event){
             console.log(event);
        }
        function onPlayerReady(event) {
          console.log('PLAYER READY');
          // event.target.playVideo();
        }
}