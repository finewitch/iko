
import { getRecentYTVid } from './ajax/YTAjax'
import { createPlayer, createVidTape } from './components/YTDom'
import { getBgVid } from './components/YTapi'

alert('main.js');
window.onYouTubeIframeAPIReady = function (event) {

    getBgVid();
    
    getRecentYTVid(passDataToPlayer);
    
    function passDataToPlayer(playerSource){
            createVidTape(playerSource);
    //     // createPlayer(playerSource)
    console.log('tutej');
    }
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:3,
        nav:true,
        loop:true,
        margin:20,
        video:true,
        center:true,
        autoWidth:true,
        // slideTransition: 'linear',
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })
});




