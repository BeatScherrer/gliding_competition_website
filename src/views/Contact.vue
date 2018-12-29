<template lang="html">
  <div class="contact container">
    <div class="row">
      <div class="card-group">
        <contact-card v-for='i in 5' :key="i"> </contact-card>
      </div>
    </div>
  </div>
</template>

<script>
import contactCard from '@/components/contact/contactCard/ContactCard.vue'

export default {
  components: {
    contactCard
  }
}
</script>

<style lang="css" scoped>

</style>
