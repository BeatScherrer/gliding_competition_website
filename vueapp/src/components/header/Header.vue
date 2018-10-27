<template>
  <header>
    <app-navigation/>
    <div class="jumbotron jumbotron-fluid">
      <div class="container jumbotron-text">
        <h1 class="display-4">Segelflug Junioren Schweizermeisterschaft</h1>
        <h1 class="display-5">01.05.2019 - 06.05.2019</h1>
        <h1 class="display-5">Dittingen</h1>
      </div>
      <router-link class="nav-item" to="/register">
        <button class="btn btn-primary btn-lg">
          Teilnehmen
        </button>
      </router-link>
    </div>
  </header>
</template>

<script>
import Navigation from './navigation/Navigation.vue'

export default {
  data () {
    return {
      msg: 'This is the header'
    }
  },
  components: {
    appNavigation: Navigation
  }
}
</script>

<style lang="scss">
header {
  display: block;
}

.jumbotron {
  height: 400px;
  background-image: url("./assets/flugplatz_dittingen.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  position: relative;
}

.jumbotron-text h1 {
  color: white;
  font-family: Roboto;
  font-weight: 900;
  text-align: left;
  font-size: 30px;
}

@media only screen and (min-width: 768px) {
    .jumbotron-text h1 {
      font-size: 50px;
    }
}

</style>
