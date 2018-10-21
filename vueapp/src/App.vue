<template>
  <div class="" id="app">
    <app-header></app-header>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div class="container main-container">
      <div class="row">
        <div class="col-md-10 router-container">
          <router-view> </router-view>
        </div>

        <div class="col-md-2" style="">
          <app-sponsors> </app-sponsors>
        </div>
        <!-- <router-view class="col-md-10"> </router-view>
        <app-sponsors class="col-md-2"> </app-sponsors> -->
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import Sponsors from './components/sponsors/Sponsors.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    appSponsors: Sponsors
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.router-container {
  padding: 50px 0;
}

.sponsors-container {

}

.jumbotron {
  background-image: url("./assets/flugplatz_dittingen.jpg");
  opacity: 0.5;
}
</style>
