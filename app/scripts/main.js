
import { getRecentYTVid } from './ajax/YTAjax'
import { createPlayer, createVidTape } from './components/YTDom'
import { getBgVid } from './components/YTapi'

window.onYouTubeIframeAPIReady = function (event) {
    getBgVid();

    getRecentYTVid(passDataToPlayer);

    function passDataToPlayer(playerSource) {
        createVidTape(playerSource);
        //     // createPlayer(playerSource)
        $(document).ready(function () {
            $('.vid-tape').slick({

                slidesToScroll: 3,
                centerMode: true,
                centerPadding: '60px',
                lazyLoad: 'progressive',
                speed: 600,
                arrows: false,
                dots: true,
                cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)'
            });
        });
    }
}





