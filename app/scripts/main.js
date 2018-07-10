import { getRecentYTVid } from './ajax/YTAjax'
import { createVid1 } from './components/YTDom'
import { getBgVid } from './components/YTapi'

window.onYouTubeIframeAPIReady = function (event) {
    window.clicked=false;
    getBgVid();

    getRecentYTVid(passDataToPlayer);

    function passDataToPlayer(playerSource) {
        createVid1(playerSource);
            }
        }
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 50,
            // slidesPerGroup: 1,
            // loop: true,
            // loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // loop:true,
        });
        
        
        
        
        
        