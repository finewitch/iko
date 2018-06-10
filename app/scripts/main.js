console.log('\'Allo \'Allo!');
import { getRecentYTVid } from './ajax/YtAjax'
import { createPlayer } from './components/YtDom'
import { CLIENT_RENEG_LIMIT } from 'tls';
import { createCipher } from 'crypto';
getRecentYTVid(passDataToPlayer);

function passDataToPlayer(playerSource){
    createPlayer(playerSource)
}