const player = document.querySelector('.player'),
playBtn = document.querySelector('.play'),
audio = document.querySelector('.audio'),
title = document.querySelector('.name_music'),
imgPlay = document.querySelector('.img__src'),
before = document.querySelector('.before'),
after = document.querySelector('.after'),
progressContainer = document.querySelector('.progress__container'),
progress = document.querySelector('.progress')

function loadSong(song){
    title.innerHTML = song
    audio.src = `audio/${song}.mp3`
    
}

loadSong('Kalush Orchestra - Stefania')

function playSong(){
    player.classList.add('play')
    audio.play()
    imgPlay.src = './img/pause.png'

}

function pauseSong(){
    player.classList.remove('play')
    audio.pause()
    imgPlay.src = './img/play.png'

}

playBtn.addEventListener('click', () =>{
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

function updateProgress(e){    
    const {duration, currentTime} = e.srcElement
    const progressPercent =( currentTime / duration ) *100
    progress.style.width = `${progressPercent}%`
    console.log(currentTime/0.100)
}

audio.addEventListener('timeupdate', updateProgress)

function setProgress(e){
   const width =this.clientWidth
   const clickX =e.offsetX
   const duration = audio.duration
   
   audio.currentTime = (clickX / width) * duration
 
}

progressContainer.addEventListener('click', setProgress)

// function formatSecondsAsTime(secs, format) {
//     var hr  = Math.floor(secs / 3600);
//     var min = Math.floor((secs - (hr * 3600))/60);
//     var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
  
//     if (min < 10){ 
//       min = "0" + min; 
//     }
//     if (sec < 10){ 
//       sec  = "0" + sec;
//     }
  
//     return min + ':' + sec;
//   }