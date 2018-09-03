import { getRecentYTVid } from './ajax/YTAjax'
import { createVidTape } from './components/YTDom'
import { scrollIntoView, mobileMenu, hideHotNews } from './jsUtils'
import { connectWithFb } from './FBApi';
import { shortenArticels } from './onDomActions'

window.onYouTubeIframeAPIReady = function (event) {
    setTimeout(()=>{
        getRecentYTVid(passDataToPlayer);
    }, 1000)

function passDataToPlayer(playerSource) {
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

//turn on-off hot news
// hideHotNews();

shortenArticels();

window.fbAsyncInit = function() {
     FB.init({
          appId            : '1146824515471850',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.1'
     });

     connectWithFb();

     };

     (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = 'https://connect.facebook.net/en_US/sdk.js';
               fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
        
        
        
        