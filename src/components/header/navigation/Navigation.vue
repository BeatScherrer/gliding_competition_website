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
        <router-link tag="li" class="nav-item" to="/news">
          <a class="nav-link">Neuigkeiten</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/participants">
          <a class="nav-link">Teilnehmer</a>
        </router-link>
        <!-- <router-link tag="li" class="nav-item" to="/results">
          <a class="nav-link">Aufgaben & Resultate</a>
        </router-link> -->
        <router-link tag="li" class="nav-item" to="/information">
          <a class="nav-link">Informationen</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/sponsoring">
          <a class="nav-link">Sponsoring</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/contact">
          <a class="nav-link">Kontakt</a>
        </router-link>
      </ul>
      <ul class="ml-auto">
        <router-link tag="li" class="nav-item" to="/login">
          <button class="btn btn-secondary shadow">
            Login
          </button>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
nav {
  position: -webkit-sticky;
  top: 0;
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
