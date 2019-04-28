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
        <router-link tag="li" class="nav-item" to="/news" data-toggle="collapse" data-target=".navbar-collapse.show" >
          <a class="nav-link">Neuigkeiten</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/participants" data-toggle="collapse" data-target=".navbar-collapse.show" >
          <a class="nav-link">Teilnehmer</a>
        </router-link>
        <!-- <router-link tag="li" class="nav-item" to="/results">
          <a class="nav-link">Aufgaben & Resultate</a>
        </router-link> -->
        <router-link tag="li" class="nav-item" to="/information" data-toggle="collapse" data-target=".navbar-collapse.show" >
          <a class="nav-link">Informationen</a>
        </router-link>
        <!-- <router-link tag="li" class="nav-item" to="/tasksresults" data-toggle="collapse" data-target=".navbar-collapse.show" >
          <a class="nav-link">Aufgaben & Resultate</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/livetracking" data-toggle="collapse" data-target=".navbar-collapse.show" >
          <a class="nav-link">Live Tracking</a>
        </router-link> -->
        <router-link tag="li" class="nav-item" to="/sponsoring" data-toggle="collapse" data-target=".navbar-collapse.show" >
          <a class="nav-link">Sponsoring</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show" >
          <a class="nav-link">Kontakt</a>
        </router-link>

        <router-link tag="li" class="nav-item" to="/livetracking" data-toggle="collapse" data-target=".navbar-collapse.show" >
          <a class="nav-link">Live Tracking</a>
        </router-link>

        <hr v-if="user">

        <router-link tag="li" class="nav-item" to="/user" data-toggle="collapse" data-target=".navbar-collapse.show" v-if="user" >
          <a class="nav-link">Meine Daten</a>
        </router-link>

        <hr>

      </ul>
      <ul class="ml-auto">
        <router-link tag="li" class="nav-item" id="loginButton" to="/login" data-toggle="collapse" data-target=".navbar-collapse.show" v-if="!user" @click.native="scrollToContent">
          <button class="btn btn-secondary shadow">
            Login
          </button>
        </router-link>
        <button class="btn btn-secondary shadow" id="logoutButton" @click="logout" v-if="user">
          Logout
        </button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  methods: {
    logout() {
      this.$store.dispatch('userSignOut');
    },
    scrollToContent() {
      // wait for components to be rendered
      this.$nextTick(() => {
        document.getElementById("main-content").scrollIntoView(true);
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
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

hr {
  margin: 10px;
}

.btn {
  margin-top: 15px;
}

</style>
