<template>
  <header id="jsm-header">
    <img class = "img-parallax" data-speed="" src="../../assets/flugplatz_dittingen.jpg" alt="">
  </header>
</template>

<script>
export default {
  name: 'jsm-header',
  data () {
    return {
      msg: 'This is the header'
    }
  }
}

$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});

</script>

<style lang="scss">
#jsm-header{
  background-color: lightblue;
}

header {
  height: 500px;
  overflow: hidden;
}

.img-parallax {
  width: 100vmax;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%,0);
  pointer-events: none
}
</style>
