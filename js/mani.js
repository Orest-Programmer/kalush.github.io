const player = document.querySelector(".player"),
musicName = document.querySelector(".name_music"),
musicSrc = document.querySelector("#music"),
playPauseBtn = document.querySelector(".play"),
progressBar = document.querySelector(".progress"),
progressContainer = document.querySelector(".progress__container"),
imgPlayBtn = document.querySelector(".img__src");

window.addEventListener("load", ()=>{
    loadMusic(musicName);
})

function loadMusic(song){
    song = musicName.innerHTML;
    musicSrc.src = `audio/${song}.mp3`
}

function playMusic(){
    player.classList.add("paused");
    musicSrc.play();
    imgPlayBtn.src = "img/pause.png";
}

function pausedMusic(){
    player.classList.remove("paused");
    musicSrc.pause();
    imgPlayBtn.src = "img/play.png";
}


playPauseBtn.addEventListener("click", ()=>{
    const isMusicPaused = player.classList.contains("paused");
    isMusicPaused ? pausedMusic() : playMusic();
})

musicSrc.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width =`${progressWidth}%`
    let musicCurrentTime = document.querySelector(".current"),
    musicDuration = document.querySelector(".duration");
    musicSrc.addEventListener("loadeddata", ()=>{
        

        let audioDuration = musicSrc.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;

    });

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressContainer.addEventListener("click", (e)=>{
    let progressWidthval = progressContainer.clientWidth;
    let clickedOffSet = e.offsetX;
    let songDuration = musicSrc.duration;

    musicSrc.currentTime = (clickedOffSet / progressWidthval) * songDuration;
});