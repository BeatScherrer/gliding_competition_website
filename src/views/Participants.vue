<template lang="mp">
  <div class="">
    <p v-for="item in users">
      {{ item.prename }}
    </p>
    <button class="btn btn-secondary" type="button" name="button" @click="test">test</button>
  </div>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'participants',
  data(){
    return {
      users: []
    }
  },
  methods: {
    test(){
      console.log(this.users);
    }
  },
  created() {
    let vm = this;

    // Get all documents with verified property is true.
    firebase.firestore().collection("users").where("verified" , "==", true).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // set all verified participants to the users array.
        vm.users.push(doc.data());
      });
    }).catch(function(error) {
      console.log(`Error getting documents: ${error}`);
    });
  }
}
</script>

<style lang="css">
</style>
