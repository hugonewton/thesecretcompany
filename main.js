// bvcyusgvciuysg


// PLAY VIDEO FROM TRACK RECORD SECTION

  // $('#play-btn-track-1').on('click', function(e) {
  //   var $video = $('#video-track-record-1');
  //   src = $video.attr('src');
  //   $video.attr('src', src + '?autoplay=1');
  // });

  // $('#play-btn-track-2').on('click', function(e) {
  //   var $video = $('#video-track-record-2');
  //   src = $video.attr('src');
  //   $video.attr('src', src + '?autoplay=1');
  // });
  // $('#play-btn-track-3').on('click', function(e) {
  //   var $video = $('#video-track-record-3');
  //   src = $video.attr('src');
  //   $video.attr('src', src + '?autoplay=1');
  // });
  // $('#play-btn-track-4').on('click', function(e) {
  //   var $video = $('#video-track-record-4');
  //   src = $video.attr('src');
  //   $video.attr('src', src + '?autoplay=1');
  // });


  var player = new Vimeo.Player(document.getElementById('video-track-record-1'));
  document.getElementById('play-btn-track-1').addEventListener('click', function() {
    player.play();
  });
  var player2 = new Vimeo.Player(document.getElementById('video-track-record-2'));
  document.getElementById('play-btn-track-2').addEventListener('click', function() {
    player2.play();
  });
  var player3 = new Vimeo.Player(document.getElementById('video-track-record-3'));
  document.getElementById('play-btn-track-3').addEventListener('click', function() {
    player3.play();
  });

  var player4 = new Vimeo.Player(document.querySelector('#player'));
  document.getElementById('play-btn-track-4').addEventListener('click', function() {
    player4.play();
  });


  // const el = document.querySelector("div.user-panel:not(.main) input[name='login']");




  var video = document.querySelectorAll('video');
  video.forEach(function(item) {
      if (item.play() !== undefined) {
          item.play().then(_ => {
              // Autoplay started!
              item.muted = true
          }).catch(error => {
              // Try muted autoplay
              item.muted = true
              item.play().then(_ => {
                  // Muted autoplay started. Show unmute button
              }).catch(error => {
                  // Autoplay was prevented.
                  // Show a "Play" button so that the user can start playback.
              })
          });
      }
  })