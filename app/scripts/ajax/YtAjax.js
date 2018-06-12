export function getRecentYTVid(passDataToPlayer) {
    console.log('get recent yt');
    $(document).ready(function () {
        $.ajax({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/playlistItems',
            data: {
                'maxResults': '5',
                'part': 'snippet,contentDetails',
                'playlistId': 'UU1apzoDLjDp1kDXp2cfw6FQ',
                key: 'AIzaSyDfbTdwB7b6movlz3WaKZUNLZ11cfJuNW0'
            },
            dataType: 'jsonp'
        }).done((response) => {
            console.log(response);

            var playerSource = response.items;

            passDataToPlayer(playerSource)
            
        }).fail((response)=>{
            console.log(response, 'ERROR');
        })
    });

    // var player;
    //   function onYouTubeIframeAPIReady() {
    //       console.log('API CONTROL CENTER');
    //     player = new YT.Player('player', {
    //       height: '360',
    //       width: '640',
    //       videoId: 'GydlyCkOShA',
    //       events: {
    //         'onReady': onPlayerReady,
    //         'onStateChange': onPlayerStateChange
    //       }
    //     });
    //   }
    //   function onPlayerReady(event) {
    //     event.target.playVideo();
    //   }
}
