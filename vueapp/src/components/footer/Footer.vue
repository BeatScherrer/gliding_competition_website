<template>
  <!-- Footer -->
  <footer>
      <!-- Footer Elements -->
      <div class="container">
        <!-- Social Network Icons- -->
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

<style lang="scss" scoped>

footer {
  padding-top: 50px;
  width: 100%;
}

</style>
