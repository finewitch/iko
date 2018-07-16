export function shortenArticels(){
     console.log('here');
     var header = document.querySelector('.article-header');
     if(header === null){
          return;
     }
     var H = header.querySelector('h2').innerHTML;
     console.log(H.split(' '));
     H.split(' ').forEach(word=>{
          console.log(word.length);
          if(word.length > 10){
               header.classList.add('smaller')
               console.log(header);
          }
     })
}