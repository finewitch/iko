import { getRecentYTVid } from './ajax/YTAjax'
import { createVidTape } from './components/YTDom'
import { getBgVid } from './components/YTapi'

window.onYouTubeIframeAPIReady = function (event) {
    getBgVid();

    getRecentYTVid(passDataToPlayer);

    function passDataToPlayer(playerSource) {

        createVidTape(playerSource);
        
        $(document).ready(function () {
            $('.vid-tape').on('init', function (slick) {
                console.log('started', slick);
            });
            $('.vid-tape').slick({
                slidesToShow:1,
                // slidesToScroll: 1,
                arrows: true,
                infinite: true,
                centerMode: true,
                dots: true,
                swipeToSlide: true,
                variableWidth: true,
            })
        });
    }
}





