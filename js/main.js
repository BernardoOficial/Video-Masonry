
// PLAY E PAUSE VIDEO
const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener("mouseover", playVideo);
    video.addEventListener("mouseout", pauseVideo);
})

function playVideo(event) {
    event.target.play();
}

function pauseVideo(event) {
    event.target.pause();
}

// POPUP
const popup = document.querySelector('.popup-container')

popup.addEventListener('click', event => {
    const clickedElement = event.target;
    const classElement = [...clickedElement.classList];
    const classNameToClose = ['popup-container', 'popup-close'];

    for(let i = 0; i < classNameToClose.length; i++) {

        const temAClasse = classElement.some(classe => classe === classNameToClose[i]);
        if(temAClasse) {
            popup.style.display = 'none'
            break;
        };
    }
})