<template>
  <div class="" id="app">
    <app-header></app-header>
    <div class="container main-container">
      <div class="row">
        <!-- main content -->
        <div class="col-sm-12 col-md-9 router-container">
          <router-view> </router-view>
        </div>
        <!-- sponsors -->
        <div class="col-sm-12 col-md-3" style="">
          <app-sponsors> </app-sponsors>
        </div>
        <!-- <router-view class="col-md-10"> </router-view>
        <app-sponsors class="col-md-2"> </app-sponsors> -->
      </div>
    </div>
    <hr/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import Sponsors from '@/components/sponsors/Sponsors.vue'

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

<style lang="css">
#app {
  font-family: Roboto, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
}

.router-container {
  padding: 50px 20px;
}

html {
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
}
</style>
