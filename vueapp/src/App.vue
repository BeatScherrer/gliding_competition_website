<template>
  <div class="" id="app">
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-10 main-content" style="">
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

.main-content {
  padding: 20px;
}

.router-container {
}

.sponsors-container {

}
</style>
