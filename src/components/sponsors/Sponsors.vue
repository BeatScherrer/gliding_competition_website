<template lang="html">
  <div class="container">
    <div class="row">

      <div class="col-6 col-md-12 sponsor mx-auto" id="sfvs">
        <a href="https://www.segelflug.ch/"><img src="./assets/sfvs.png" alt="sfvs logo" class="mx-auto"></a>
      </div>

      <div class="col-6 col-md-12 sponsor mx-auto" id="arb">
        <a href="http://www.aeroclub-regiobasel.ch/NEU/index.php"><img src="./assets/aeroclub_regio_basel.jpg" alt="arb logo" id="arb-logo"></a>
      </div>

      <div class="col-6 col-md-12 sponsor" id="amstutz">
        <a href="https://www.fromagerieamstutz.ch/en"><img src="./assets/amstutz_logo.png" alt="Fromagerie Amstutz logo"></a>
      </div>

      <div class="col-6 col-md-12 sponsor" id="six">
        <a href="https://www.six-group.com"><img src="./assets/six_logo.png" alt="six-group logo" id="six-logo"></a>
      </div>

      <div class="col-6 col-md-12 sponsor" id="pilatus">
        <a href="https://www.pilatus-aircraft.com"><img src="./assets/pilatus_logo.png" alt="pilatus-group logo" id="pilatus-logo"></a>
      </div>

      <div class="col-6 col-md-12 sponsor" id="amstutz">
        <a href="https://www.cobratrailer.com/?lang=en"><img src="./assets/A.Spindelberger_Logo.jpg" alt="A. Spindelberger logo"></a>
      </div>

      <div class="col-6 col-md-12 sponsor" id="pure_planes">
        <a href="www.pureplanes.de"><img src="./assets/pure_planes_logo.jpg" alt="Pure Planes logo" id="pure-planes-logo"></a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>

.sponsor {
  padding: 10px 10px;
  max-height: 100px;
  margin: auto 0;
  }

  #six-logo {
    height: 50px;
  }

  #pure-planes-logo {
    height: 100px;
  }

  a {
    margin:auto;
  }

  img {
    object-fit: contain;
    max-width: 100%;
  }

  p {
    text-align: center;
  }

</style>
