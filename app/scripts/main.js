
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
                slidesToShow:1,
                slidesToScroll: 1,
                arrows: true,
                centerMode: true,
                centerPadding: '100px',
                lazyLoad: 'progressive',
                speed: 1300,
                dots: true,
                // prevArrow: $('.prev'),
                // nextArrow: $('.next'),
                // cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)'
            });
        });
    }
}





