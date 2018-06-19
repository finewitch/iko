import { createYT1, createYTtapeVid } from './YTapi';

// export function createPlayer(data){

//     var videoCont = document.getElementById('video-player')
//     var mainVid = videoCont.querySelector('#main-vid') 
//     var linkPart = 'https://www.youtube.com/embed/'
//     var id = data[0].contentDetails.videoId;

//     if(data == undefined){

//         console.log('no video, error');

//     }else{

//         createHeaders(data[0].snippet.title, data[0].snippet.description, data[0].snippet.publishedAt);

//         createYT1(videoCont, id);
       
//         createVidTape(data.slice(1,4));

//     }
// }

// function createVidTape(mostRecent){

//     var container = document.querySelector('.videosrecent-cont-vidtape')

//     var miniVidScope = {};

//     mostRecent.forEach((el, i)=>{
//         createVidObj(el, container, i, miniVidScope)
//     })
//     // console.log(miniVidScope);

// }
// function createVidObj(el, container, i, miniVidScope){

//     var id = el.contentDetails.videoId;
//     var desc = el.snippet['description'];
//     var title = el.snippet['title'];

//     var content = `<div class="vid-frame">
//                         <div class="vid-frame-desc tape-${i}">
//                         <h4>${title}</h4>
//                     ${desc}</div>
//                     <div id="vid-${i}"></div>
//                     </div>`
    
//     container.innerHTML += content;

//     createYTtapeVid(i, id, miniVidScope)
//     // ellipsizeTextBox()
// }

// // function ellipsizeTextBox() {
// //     var allDescDivs = document.querySelectorAll('.vid-frame-desc')
// //     allDescDivs.forEach(el=>{
// //         var wordArray = el.innerHTML.split(' ');
// //         while(el.scrollHeight > el.offsetHeight) {
// //             wordArray.pop();
// //             el.innerHTML = wordArray.join(' ') + '...';
// //             }
// //     })
// // }

// function createHeaders(header, desc, date){
//     var headers = document.querySelector('.videosrecent-cont')
//     headers.querySelector('.vidrec-title').innerText = header;
//     headers.querySelector('.vidrec-desc').innerText = desc;
// }

export function createVidTape(playerSource){

    playerSource.forEach((el)=>{
        var id = el.contentDetails.videoId;

        createOwlPart(id)

    })
}
function createOwlPart(id){
    var container = document.querySelector('.owl-carousel');
    var item = `<div class="item-video">
                    <a class="owl-video" href='https://www.youtube.com/watch?v=${id}'></a>
                </div>`

    
    // container.innerHTML += item;
    $('.owl-carousel').owlCarousel('add', item).owlCarousel('refresh')
    
}