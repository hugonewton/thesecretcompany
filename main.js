// bvcyusgvciuysg


// PLAY VIDEO FROM TRACK RECORD SECTION

  $('#play-btn-track-1').on('click', function(e) {
    var $video = $('#video-track-record-1');
    src = $video.attr('src');
    $video.attr('src', src + '?autoplay=1');
  });

  $('#play-btn-track-2').on('click', function(e) {
    var $video = $('#video-track-record-2');
    src = $video.attr('src');
    $video.attr('src', src + '?autoplay=1');
  });
  $('#play-btn-track-3').on('click', function(e) {
    var $video = $('#video-track-record-3');
    src = $video.attr('src');
    $video.attr('src', src + '?autoplay=1');
  });
  $('#play-btn-track-4').on('click', function(e) {
    var $video = $('#video-track-record-4');
    src = $video.attr('src');
    $video.attr('src', src + '?autoplay=1');
  });
