# About

This userscript restores focus to video element after using volume or progress
bar, so that shortcuts for video seeking and volume control are consistent
regardless of last action. Left/right arrows always seek video backward/forward and
up/down arrows always change volume.
Requires userscript manager like Greasemonkey/Tampermonkey.

## Before

Without this script, when clicking on volume bar, it keeps the focus. Pressing left or right arrow key changes volume level.

![Image showing behaviour before applying this script](./img/yt_before.png)

## After

After applying this script, when clicking on volume bar, the video element takes focus. Pressing left or right arrow key seeks forward or backward. You can still press up and down arrow keys to change volume level.

![Image showing behaviour after applying this script](./img/yt_after.png)
