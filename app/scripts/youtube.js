'use strict';
// create youtube player

var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api?enablejsapi=1';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//    after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '600',
        videoId: 'XDvPjm10CM0',
        playerVars: {
            controls: '0'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    //event.target.playVideo();
    player.mute();
    console.log('player ready');
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 30000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

$('document').ready(function() {

    $('.play').click(function(evt) {
        evt.preventDefault();

        console.log('start player and audio');
        player.playVideo();

        var song = $('audio').get(0);
        if (song.paused) {
            song.play();
        } else {
            //song.pause();
        }

    });

    $('.pause').click(function(evt) {
        evt.preventDefault();

        console.log('pause player and audio');
        player.pauseVideo();
        var song = $('audio').get(0);
        song.pause();

    });

});
