if ('mediaSession' in navigator) {

    let audio = document.createElement('audio');

    let playlist = ['./assets/mp3/play.mp3', './assets/mp3/heartless.mp3'];
    let index = 0;
    playAudio();

    navigator.mediaSession.metadata = new MediaMetadata({
      title: 'I’ll be there for you',
      artist: 'gothurted',
      album: 'I’ll be there for you'
    });
  
    navigator.mediaSession.setActionHandler('play', function() {
        audio.play()
        navigator.mediaSession.playbackState = 'playing'
      });
      
    navigator.mediaSession.setActionHandler('pause', function() {
        audio.pause()
        navigator.mediaSession.playbackState = 'paused'
    });
    
    navigator.mediaSession.setActionHandler('previoustrack', function() {
    // User clicked "Previous Track" media notification icon.
        index = (index - 1 + playlist.length) % playlist.length;
        playAudio();
    });
      
    navigator.mediaSession.setActionHandler('nexttrack', function() {
    // User clicked "Next Track" media notification icon.
        index = (index + 1) % playlist.length;
        playAudio();
    });
    
    function playAudio() {
        audio.src = playlist[index];
        audio.loop = true
        audio.play()
        .then(_ => { 
            if (playlist[index] == './assets/mp3/play.mp3') {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: 'I’ll be there for you',
                    artist: 'gothurted',
                    album: 'I’ll be there for you'
                });
            } else if (playlist[index] == './assets/mp3/heartless.mp3') {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: 'Heartless',
                    artist: 'Naïve',
                    album: 'Heartless'
                });
            } 
         })
        .catch(error => { console.log(error); });
    }
}