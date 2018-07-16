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