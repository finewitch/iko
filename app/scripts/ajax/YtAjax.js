export function getRecentYTVid(passDataToPlayer) {
    console.log('get recent yt');
    $(document).ready(function () {
        $.ajax({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/playlistItems',
            data: {
                'maxResults': '6',
                'part': 'snippet,contentDetails',
                'playlistId': 'UU1apzoDLjDp1kDXp2cfw6FQ',
                key: 'AIzaSyDfbTdwB7b6movlz3WaKZUNLZ11cfJuNW0'
            },
            dataType: 'jsonp'
        }).done((response) => {
            // console.log(response, 'response');

            var playerSource = response.items;

            passDataToPlayer(playerSource)
            
        }).fail((response)=>{
            console.log(response, 'ERROR');
        })
    });
}

// var GoogleAuth; // Google Auth object.
// export function initClient() {

//   gapi.client.init({
//       'apiKey': 'YOUR_API_KEY',
//       'clientId': 'YOUR_CLIENT_ID',
//       'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
//       'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
//   }).then(function () {
//       GoogleAuth = gapi.auth2.getAuthInstance();

//       // Listen for sign-in state changes.
//       GoogleAuth.isSignedIn.listen(updateSigninStatus);
//   });
// }
