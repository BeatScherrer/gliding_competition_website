<template lang="html">
  <div class="sponsors">
    <div class="row">
      <div class="col-6 col-md-12 sponsor" id="arb_container">
        <a href="http://www.aeroclub-regiobasel.ch/NEU/index.php"><img src="./assets/arb_logo.png" alt="arb logo" id="arb_logo"></a>
        <p>Aeroclub Region Basel</p>
      </div>
      <div class="col-6 col-md-12 sponsor">
        <a href="https://segelflug.ch/?lang=de"><img src="./assets/sfvs.jpeg" alt="sfvs logo"></a>
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
  .sponsors {

  }

  .sponsor {
    padding: 15px 0;
    max-height: 400px;
  }

  #arb_logo {
    height: 100px;
  }

  img {
    object-fit: contain;
    max-width: 100%;
  }

  p {
    text-align: center;
  }

</style>
