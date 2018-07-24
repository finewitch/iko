export function getRecentYTVid(passDataToPlayer) {
    // console.log('get recent yt');
    $(document).ready(function () {
        $.ajax({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/playlistItems',
            data: {
                'maxResults': '6',
                'part': 'snippet,contentDetails',
                'playlistId': 'UU1apzoDLjDp1kDXp2cfw6FQ',
                'key': 'AIzaSyDfbTdwB7b6movlz3WaKZUNLZ11cfJuNW0',
                'hd': 1,
                'width': '450px',
            },
            dataType: 'json'
        }).done((response) => {
            // console.log(response, 'response');

            var playerSource = response.items;

            passDataToPlayer(playerSource)

        }).fail((response) => {
            console.log(response, 'ERROR');
        })
    });
}