<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <router-link tag="li" class="nav-item" to="/news">
          <a class="nav-link">News</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/participants">
          <a class="nav-link">Participants</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/results">
          <a class="nav-link">Results</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/information">
          <a class="nav-link">Information</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/contact">
          <a class="nav-link">Contact</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/tracking">
          <a class="nav-link">Live Tracking</a>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <router-link tag="li" class="nav-item" to="/register">
          <button class="btn btn-primary">
            Register
          </button>
        </router-link>
        <router-link tag="li" class="nav-item" to="/login">
          <button class="btn btn-secondary">
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

<style lang="scss" scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
