// bvcyusgvciuysg


// PLAY VIDEO FROM TRACK RECORD SECTION

  $('#play-btn-track-1').on('click', function(e) {
    var $video = $('#video-track-record-1');
    src = $video.attr('src');
    $video.attr('src', src + '?autoplay=1');
  });
