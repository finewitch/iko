export function createPlayer(data){
    var videoCont = document.getElementById("video-player")
    var mainVid = videoCont.querySelector("#main-vid") 
    var linkPart = 'https://www.youtube.com/embed/'
    var id = data[0].contentDetails.videoId;

    if(data == undefined){
        console.log('no video, error',);
    }else{
        createHeaders(data[0].snippet.title, data[0].snippet.description, data[0].snippet.publishedAt);
        mainVid.src = linkPart + id
        
        //pass first 3 after excluding main
        createVidTape(data.slice(1,4));
    }
}
function createVidTape(mostRecent){

    var container = document.querySelector('.videosrecent-cont-vidtape')

    mostRecent.forEach(el=>{
        getData(el, container)
    })

}

function getData(el, container){
    var vidId = el.contentDetails.videoId;
    var vidDesc = el.snippet['description'];
    console.log(vidId, vidDesc);
    createVidObj(vidId, vidDesc, container);
}
function createVidObj(id, desc, container){
    var content = `<div class="vid-frame">
                        <div class="vid-frame-desc">${desc}</div>
                        <iframe class="vidtape-vid" width="350" height="320" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>`

    container.innerHTML += content;
    ellipsizeTextBox();
}

function ellipsizeTextBox() {
    var allDescDivs = document.querySelectorAll('.vid-frame-desc')
    allDescDivs.forEach(el=>{
        var wordArray = el.innerHTML.split(' ');
        while(el.scrollHeight > el.offsetHeight) {
            wordArray.pop();
            el.innerHTML = wordArray.join(' ') + '...';
            }
    })
}

function createHeaders(header, desc, date){
    var headers = document.querySelector('.videosrecent-cont')
    headers.querySelector('.vidrec-title').innerText = header;
    headers.querySelector('.vidrec-desc').innerText = desc;
}