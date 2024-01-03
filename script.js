let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Daytime", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Towards the End", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Beginning of End", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Sunshine", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Florish-The never Ending path", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

let songIndex = 0;
let audioElement = new Audio(songs[songIndex].filePath);

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})




masterPlay.addEventListener("click", () => {
    let newIndex = document.getElementById(songIndex.toString())
    if (audioElement.paused) {
        audioElement.src = songs[songIndex].filePath
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        newIndex.classList.remove("fa-play-circle");
        newIndex.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        newIndex.classList.remove("fa-pause-circle");
        newIndex.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


let makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    })

}




Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
    
        if (audioElement.paused) {
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        }

        else if (songIndex == parseInt(e.target.id)) {
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");


        }
        else {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        }
    })
})



document.getElementById("next").addEventListener("click", () => {
    if (songIndex == 9) {
        songIndex = 9;
    }
    else {
        songIndex += 1;
    }
    makeAllPlays()
    let newIndex = document.getElementById(songIndex.toString())
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    newIndex.classList.remove("fa-play-circle");
    newIndex.classList.add("fa-pause-circle");

})


document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    makeAllPlays()
    let newIndex = document.getElementById(songIndex.toString())
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    newIndex.classList.remove("fa-play-circle");
    newIndex.classList.add("fa-pause-circle");

})
