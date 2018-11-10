<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navList" aria-controls="navList" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link :to="{ name: 'news', params: {} }">
      <img src="./assets/logo_wings_transparent.png" height="60" class="d-inline-block" alt="logo">
    </router-link>

    <div class="collapse navbar-collapse" id="navList">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <router-link tag="li" class="nav-item" to="/news" data-toggle="collapse" data-target=".navbar-collapse.show">
          <a class="nav-link" v-on:click="test">Neuigkeiten</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/participants" data-toggle="collapse" data-target=".navbar-collapse.show">
          <a class="nav-link">Teilnehmer</a>
        </router-link>
        <!-- <router-link tag="li" class="nav-item" to="/results">
          <a class="nav-link">Aufgaben & Resultate</a>
        </router-link> -->
        <router-link tag="li" class="nav-item" to="/information" data-toggle="collapse" data-target=".navbar-collapse.show">
          <a class="nav-link">Informationen</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/sponsoring" data-toggle="collapse" data-target=".navbar-collapse.show">
          <a class="nav-link">Sponsoring</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show">
          <a class="nav-link">Kontakt</a>
        </router-link>
      </ul>
      <ul class="ml-auto">
<<<<<<< HEAD
        <router-link tag="li" class="nav-item" to="/login">
          <button class="btn btn-secondary shadow">
=======
        <router-link tag="li" class="nav-item" to="/login" data-toggle="collapse" data-target=".navbar-collapse.show">
          <button class="btn btn-secondary shadow" @click="scrollToContent">
>>>>>>> b08a172d1f56213fa38f7ede0ebc107fbc89ad36
            Login
          </button>
        </router-link>
        <button class="btn btn-secondary shadow" type="button" name="button" @click="test">test Button</button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
<<<<<<< HEAD
    test: function(){
      window.scrollBy(200,200);
      //alert(window.pageXOffset + window.pageYOffset);
      window.console.log('test');
    }
=======

>>>>>>> b08a172d1f56213fa38f7ede0ebc107fbc89ad36
  }
}
</script>

<style lang="css" scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
