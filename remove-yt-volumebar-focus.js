// ==UserScript==
// @name     Remove yt volumebar focus
// @description Sets focus to video element after using volume bar, so that left/right arrow keys can be used for video seeking instead of volume change
// @license MIT
// @version  1.2
// @grant    none
// @match    https://www.youtube.com/*
// @namespace https://greasyfork.org/users/847699
// ==/UserScript==

let videoElem = document.querySelector("video.html5-main-video");
while(videoElem == null){
	videoElem = document.querySelector("video.html5-main-video");
  setInterval(1000)
}

const volumeArea = document.querySelector(".ytp-volume-area");
const videoProgressBar = document.querySelector(".ytp-progress-bar-container");

volumeArea.addEventListener("click", (_) => {
    setTimeout(() => {
        videoElem.focus();
    }, 50);
});

videoProgressBar.addEventListener("click", (_) => {
    setTimeout(() => {
        videoElem.focus();
    }, 50);
});
