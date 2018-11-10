<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-6 col-md-12 sponsor mx-auto" id="arb">
        <a href="http://www.aeroclub-regiobasel.ch/NEU/index.php"><img src="./assets/arb_logo.png" alt="arb logo" id="arb_logo"></a>
        <p>Aeroclub Regio Basel</p>
      </div>
      <div class="col-6 col-md-12 sponsor mx-auto" id="sfvs">
        <img src="./assets/sfvs.png" alt="sfvs logo" class="mx-auto">
      </div>
      <div class="col-6 col-md-12 sponsor" id="amstutz">
        <a href="https://www.fromagerieamstutz.ch/en"><img src="./assets/amstutz_logo.png" alt="Fromagerie Amstutz logo"></a>
      </div>

      <div class="col-6 col-md-12 sponsor" id="amstutz">
        <a href="https://www.cobratrailer.com/?lang=en"><img src="./assets/A.Spindelberger_Logo.jpg" alt="A. Spindelberger logo"></a>
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
  padding: 15px 0;
  max-height: 400px;
  margin: auto 0;
  }

  #arb_logo {
    height: 110px;
  }


  a {margin:auto;}

  img {
    object-fit: contain;
    max-width: 100%;
  }

  p {
    text-align: center;
  }

</style>
