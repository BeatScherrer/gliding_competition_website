<template lang="html">
  <div class="col-xs-12 col-md-6 col-lg-4">
    <div class="card">
      <!-- <img class="card-img-top" src="./assets/DSCF9619.jpeg" alt="Card image cap"> -->
      <div class="card-body">
        <h5 class="card-title">{{ person.name }}</h5>
        <p class="card-text">{{ person.role }}</p>
        <hr>
        <p class="card-text"><small class="text-muted"><a v-bind:href="mailTo">contact</a></small></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['person'],
  computed: {
    mailTo(){return `mailto:mail@jsm2019.ch?Subject=${this.person.role}`}
  }
}
</script>

<style lang="css" scoped>
.card {
  margin: 10px 0;
  width: 100%;
}

h2 {
  font-size: 20px;
}

a {
  font-size: 14px;
}
</style>
