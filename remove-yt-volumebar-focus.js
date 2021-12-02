// ==UserScript==
// @name     Remove yt volumebar focus
// @description Sets focus to video element after using volume bar, so that left/right arrow keys can be used for video seeking instead of volume change
// @license MIT
// @version  1
// @grant    none
// @match    https://www.youtube.com/*
// ==/UserScript==

const volumeArea = document.querySelector(".ytp-volume-area");
const videoElem = document.querySelector("video.html5-main-video");

volumeArea.addEventListener("click", (_) => {
    setTimeout(() => {
        videoElem.focus();
    }, 50);
});
