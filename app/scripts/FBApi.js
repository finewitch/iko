import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

export function connectWithFb(){

     var title, desc, img, num;
     var btn = document.getElementById('fb-share');

     if(btn === null){
          return;
     }

     btn.addEventListener('click', function(){

          var status = metaTags()
          console.log(status);
          console.log(img);
          console.log(desc.innerHTML);
          if(!status){
               return;
          }
          if(img === ''){
               FB.ui({
                    method: 'share_open_graph',
                    action_type: 'og.shares',
                    display: 'popup',
                    action_properties: JSON.stringify({
                         object: {
                              'og:url': 'http://ikonowicz.com/pubs-single' + num + '.html',
                              'og:title': title.innerHTML + ' – artykuł',
                              'og:description': desc.innerHTML,
                         }
                    })
               },
               function (response) {
                    // Action after response
                    console.log(response);
               });

          }else{
               FB.ui({
                    method: 'share_open_graph',
                    action_type: 'og.shares',
                    display: 'popup',
                    action_properties: JSON.stringify({
                         object: {
                              'og:url': 'http://ikonowicz.com/pubs-single' + num + '.html',
                              'og:title': title.innerHTML + ' – artykuł',
                              'og:description': desc.innerHTML,
                              'og:image': img.src
                         }
                    })
               },
               function (response) {
                    // Action after response
                    console.log(response);
               });

          }
          })



          function metaTags(){
               //get els
               title = document.querySelector('[data-og="ogtitle"]');
               desc = document.querySelector('[data-og="ogdesc"]');
               img = document.querySelector('[data-og="ogimg"]');
               num = document.querySelector('[data-og-num]').getAttribute('data-og-num');
          
               var arr = [title,desc, num];
               var arrSuccess = true;

               if(img === null){
                    img = '';
               }
               arr.forEach(function(el){
                    if(el === null){
                         arrSuccess = false;
                    }
               })

               return arrSuccess;
          }

}