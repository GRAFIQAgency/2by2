<script>
//EXTERNI SOURCE VIDEI U PRODUKCI
$(document).ready(function () {
  // Find all video elements
  var $videos = $('video');
  
  // Find all play/pause buttons
  var $buttons = $('[video-playback="button"]');

  // Function to pause all videos and update all buttons
  function pauseAllVideos() {
    $videos.each(function() {
      this.pause();
    });
    $buttons.each(function() {
      $(this).find('[video-playback="play"]').show();
      $(this).find('[video-playback="pause"]').hide();
    });
  }

  // Function to play a specific video and update its button
  function playVideo($video, $button) {
    $video[0].play();
    $button.find('[video-playback="pause"]').show();
    $button.find('[video-playback="play"]').hide();
  }

  // Add click event listener to each button
  $buttons.on('click', function () {
    var $button = $(this);
    var $video = $button.siblings('video');

    if ($video[0].paused) {
      pauseAllVideos(); // Pause all videos first
      playVideo($video, $button); // Then play this video
    } else {
      pauseAllVideos(); // Just pause all videos, including this one
    }
  });
});
</script>
