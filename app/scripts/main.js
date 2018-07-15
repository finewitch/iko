import { getRecentYTVid } from './ajax/YTAjax'
import { createVidTape } from './components/YTDom'
import { getBgVid } from './components/YTapi'
import { scrollIntoView } from './jsUtils'

window.onYouTubeIframeAPIReady = function (event) {
    // window.clicked=false;
    // getBgVid();

    getRecentYTVid(passDataToPlayer);

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
 var btn = document.querySelector('.hamburger')
 btn.addEventListener('click', function(){
     this.classList.toggle('is-active')
     var hamburgerMenu = document.getElementById('mobile-menu');
     if (this.classList.contains('is-active')){
         hamburgerMenu.classList.add('open')
     }else{
        hamburgerMenu.classList.remove('open')
     }
 })

        
        
        
        