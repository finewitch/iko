import { getRecentYTVid } from './ajax/YTAjax'
import { createVidTape } from './components/YTDom'
import { scrollIntoView, mobileMenu, hideHotNews } from './jsUtils'
import { shortenArticels } from './onDomActions'

window.onYouTubeIframeAPIReady = function (event) {
    // window.clicked=false;
    setTimeout(()=>{
        getRecentYTVid(passDataToPlayer);
    }, 1000)

    function passDataToPlayer(playerSource) {
        // console.log(playerSource);
        createVidTape(playerSource);
            }
        }
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1.7,
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
        
scrollIntoView('contact')

mobileMenu();

hideHotNews();

shortenArticels();
        
        
        
        