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