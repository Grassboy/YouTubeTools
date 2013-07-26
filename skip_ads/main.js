setTimeout(function(){
  var container = document.getElementById('player-api');
  if(container) {
    container.innerHTML = [
      '<iframe width="100%" height="100%" src="//www.youtube.com/embed/',
      document.querySelector('meta[itemprop="videoId"]').getAttribute("content"),
      '?autoplay=1&vq=hd1080" frameborder="0" allowfullscreen></iframe>'
    ].join('');
  }
}, 1000);
