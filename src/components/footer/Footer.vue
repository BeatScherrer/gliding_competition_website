<template>
  <!-- Footer -->
  <footer>
      <!-- Footer Elements -->
      <div class="container">
        <!-- Social Network Icons- -->
        <div class="row">
          <div class="col-md-12">
            <!-- Facebook -->
            <a class="fb-ic" href="https://www.facebook.com/jsmdittingen2019/">
              <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <!--Instagram-->
            <a class="ins-ic" href="https://www.instagram.com/flugplatz_dittingen_lspd/">
              <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
          </div>
        </div>
        <!-- Copyright -->
        <div class="text-center py-3">© 2018 Copyright:
          <a href="https://sg-dittingen.ch/d/index.php/de/"> Segelfluggruppe Dittingen</a>
        </div>
      </div>

    </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      msg: 'This is the footer'
    }
  }
}
</script>

<style lang="css" scoped>

footer {
  padding-top: 50px;
  width: 100%;
}

i {
  color: black;
}

</style>
