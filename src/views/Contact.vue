<template lang="html">
  <!-- <div class="">
    <p>Kommt bald...</p>
  </div> -->
  <div class="contact container">
    <div class="row">
      <div class="card-group">
        <contact-card v-for='contact in contacts' v-bind:person="contact" :key="contact.name"> </contact-card>
      </div>
    </div>
  </div>
</template>

<script>
import contactCard from '@/components/contact/contactCard/ContactCard.vue'

export default {
  components: {
    contactCard
  },
  data(){
    return {
      contacts: [
        {
          name: "Florian Anklin",
          role: "OK Präsident"
        },
        {
          name: "Beat Scherrer",
          role: "Wettbewerbsleitung, Website"
        },
        {
          name: "Simo Schlumpf",
          role: "Sponsoring"
        },
        {
          name: "Michael Jermann",
          role: "Startplatz"
        },
        {
          name: "Dominic Grond",
          role: "Infrastruktur"
        },
        {
          name: "Hanspeter Jermann",
          role: "Verpflegung"
        },
        {
          name: "David Buchwalder",
          role: "Social Media"
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>

</style>
