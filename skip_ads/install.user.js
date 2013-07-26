// ==UserScript==
// @name        YouTubeSkipAds
// @namespace   YouTube
// @include     https://www.youtube.com/*
// @match       https://www.youtube.com/*
// @include     http://www.youtube.com/*
// @match       http://www.youtube.com/*
// @version     1
// ==/UserScript==

setTimeout('(function(url){ var newRequest = document.createElement("script");newRequest.type = "text/javascript";newRequest.src = url;document.getElementsByTagName("head")[0].appendChild(newRequest); })("http://www.grassboy.tw/youtube/skip_ads/main.js")', 0);



