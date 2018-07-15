// export function createYT1(container, id) {
//   var YT1;
//   YT1 = new YT.Player(container, {
//     height: '600',
//     width: '100%',
//     videoId: id,
//     playerVars: {
//       showinfo: '0',
//       rel: '0'
//     },
//     events: {
//       'onReady': onPlayerReady
//     }
//   });

//   function onPlayerReady(event) {
//     //
//   }
// }
// export function createYTtapeVid(i, id, miniVidScope) {
//   miniVidScope['vid' + i] = new YT.Player('vid-' + i, {
//     height: '430',
//     width: '100%',
//     videoId: id,
//     playerVars: {
//       showinfo: '0',
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
//   function onPlayerStateChange(event) {
//     console.log(event);
//   }
//   function onPlayerReady(event) {
//     console.log('PLAYER READY');
//     // event.target.playVideo();
//   }
// }

export function getBgVid() {
  console.log('bg vid');
  var myvid = document.getElementById('landing-wrapper-bg');
  var BGvid = new YT.Player(myvid, {
    height: '600px',
    width: '100%',
    videoId: '05GaMJ84qJg',
    playerVars: {
      playlist: '05GaMJ84qJg',
      mute: 1,
      autoplay: 1,
      controls: 0,
      autohide: 1,
      showinfo: 0,
      rel: 0,
      loop: 1,
      suggestedQuality: 'hd1080',
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError,
      'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
    }
  });

  function onPlayerError(event) {
    console.log(event);
  }
  function onPlayerPlaybackQualityChange(event){
    console.log(event);
    if (event.data == YT.PlayerState.BUFFERING) {
      event.target.setPlaybackQuality('hd1080');
    }

  }
  function onPlayerReady(event) {
    console.log('PLAYER READY');
    event.target.setPlaybackQuality('hd1080');
    BGvid.playVideo();
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    console.log(event);
    if (event.data == YT.PlayerState.BUFFERING) {
      event.target.setPlaybackQuality('hd1080');
    }
    BGvid.playVideo();
    event.target.playVideo();

    // console.log('PLAYER READY');
    // player.setPlaybackQuality('hd1080');
    // event.target.playVideo();
  }
}