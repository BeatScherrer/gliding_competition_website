<template lang="html">
  <div class="contact container">
    <div class="row">
      <div class="card-group">
        <contact-card v-for='i in 5'> </contact-card>
      </div>
    </div>
  </div>
</template>

<script>
import contactCard from './contactCard/contactCard.vue'

export default {
  components: {
    contactCard
  }
}
</script>

<style lang="css" scoped>

</style>
