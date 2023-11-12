(function () {
  var video = document.querySelector('#player');

  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource('https://prod-sports-north-gm.jiocinema.com/bpk-tv/Colors_HD_voot_MOB/Fallback/index.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
    });
  }

  
  plyr.setup(video);
})();
