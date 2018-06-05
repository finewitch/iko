export function getRecentYTVid() {
    console.log('get recent yt');
    $(document).ready(function () {
        $.ajax({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/playlistItems',
            data: {
                'maxResults': '25',
                'part': 'snippet,contentDetails',
                'playlistId': 'PLB7k7K6kbWZ1gpTXCaTJFaxnv5qPqDIw8',
                key: 'AIzaSyDfbTdwB7b6movlz3WaKZUNLZ11cfJuNW0'
            },
            dataType: 'jsonp'
        }).done((response) => {
            console.log(response);
        })
    });
}