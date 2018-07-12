import { getRecentYTVid } from './ajax/YTAjax'
import { createVidTape } from './components/YTDom'
import { getBgVid } from './components/YTapi'

window.onYouTubeIframeAPIReady = function (event) {
    // window.clicked=false;
    getBgVid();

    getRecentYTVid(passDataToPlayer);

    function passDataToPlayer(playerSource) {
        console.log(playerSource);
        createVidTape(playerSource);
            }
        }
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 50,
            // slidesPerGroup: 1,
            // loop: true,
            // loopFillGroupWithBlank: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        
        
        
        
        
        