export function scrollIntoView(element){
    var linkpart = element + '-link';
    var link = document.getElementById(linkpart)
    link.addEventListener('click', (e)=>{
        var target = element + '-target';
        document.getElementById(target).scrollIntoView({
            behavior: 'smooth'
        })
    })
}

export function mobileMenu(){
    var btn = document.querySelector('.hamburger')
    if(btn !=null){
        btn.addEventListener('click', function(){
            this.classList.toggle('is-active')
            var hamburgerMenu = document.getElementById('mobile-menu');
            if (this.classList.contains('is-active')){
                hamburgerMenu.classList.add('open')
            }else{
               hamburgerMenu.classList.remove('open')
            }
        })
    }
}

export function hideHotNews(){
    // var pageOffset = window.pageYOffset;
    // console.log('yolo', pageOffset);
    var newsCont = document.querySelector('.recentnews-navigation');
    window.onscroll = function() {
        var currentPos = window.pageYOffset;
        console.log(currentPos);
        if(currentPos > 100){
            newsCont.classList.add('hide-scroll')
        }else{
            newsCont.classList.remove('hide-scroll')
        }
    }
}