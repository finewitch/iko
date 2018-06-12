console.log('\'Allo \'Allo!');
import { getRecentYTVid } from './ajax/YTAjax'
import { createPlayer } from './components/YTDom'

getRecentYTVid(passDataToPlayer);

function passDataToPlayer(playerSource){
    createPlayer(playerSource)
}