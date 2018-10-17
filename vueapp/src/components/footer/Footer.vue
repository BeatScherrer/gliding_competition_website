<template>
  <!-- Footer -->
  <footer>
      <!-- Footer Elements -->
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!-- Facebook -->
            <a class="fb-ic">
              <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <!-- Twitter -->
            <a class="tw-ic">
              <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <!--Instagram-->
            <a class="ins-ic">
              <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
          </div>
        </div>
      </div>
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://sg-dittingen.ch/d/index.php/de/"> Segelfluggruppe Dittingen</a>
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

<style lang="scss" scoped>

footer {
  width: 100%;
  background-color: lightgray;
  height: 200px;
}

</style>
