
import { getRecentYTVid } from './ajax/YTAjax'
import { createPlayer } from './components/YTDom'
import { getBgVid } from './components/YTapi'


window.onYouTubeIframeAPIReady = function () {

    getBgVid();
    
    getRecentYTVid(passDataToPlayer);

    function passDataToPlayer(playerSource){
        createPlayer(playerSource)
    }
}
   




