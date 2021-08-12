//Changing heart color
let heart = document.getElementById('heart');
let ms1 = [2400, 1800, 100];
let ms2 = [2500, 1730,130];
var i = 0;
var j = 0;
  
function changeToSecondHeart() {
    setTimeout(function() {
        heart.src = './assets/icons/heart-blue.svg';
        heart.style.position = 'relative';
        heart.style.left = '5px';
        i++;
        if (i < ms1.length) {
            changeToSecondHeart();
        }
    }, ms1[i])
}

function changeToFirstHeart() {
    setTimeout(function() {
        heart.src = './assets/icons/heart.svg';
        heart.style.left = '-5px';
        j++;
        if (j < ms2.length) {
            changeToFirstHeart();
        }
    }, ms2[j])
}

changeToSecondHeart();
changeToFirstHeart();

//Video 
let video = document.getElementById("video"); 
let play = document.getElementById("play"); 
let pause = document.getElementById("pause"); 
var resume = document.querySelector("p.resume");

play.addEventListener('click', playPause);
pause.addEventListener('click', playPause);
video.addEventListener('mouseover', showPause);

function onPlay() {
    resume.classList.contains("hidden") ? null : resume.classList.toggle("hidden");
    play.classList.toggle("playClicked");
    setTimeout(function(){
        play.classList.toggle("hidden");
        video.play();
        play.classList.toggle("playClicked");
    }, 1500);
}

function showPause() {
    if(!video.paused) {
        pause.classList.toggle("hidden");
    }
}

function onPause() {
    video.pause();
    pause.classList.toggle("hidden");
    resume.classList.toggle("hidden");
    play.classList.toggle("hidden");
}

function playPause(e) {
    video.paused ? onPlay() : onPause();
}

//Bug if you click immediately twice the play button.
//Pause button with timeline (progress video) not completed.