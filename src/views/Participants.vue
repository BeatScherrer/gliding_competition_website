<template lang="mp">
  <div class="">
    <p> Teilnehmerliste kommt bald...</p>
  </div>

  <!-- <div class="">



    <div class="table-responsive">
      <table class="table table-stripped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Vorname</th>
            <th scope="col">Nachname</th>
            <th scope="col">Geburstdatum</th>
            <th scope="col">Gruppe</th>
            <th scope="col">Flugzeug</th>
            <th scope="col">Kennzeichen</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users">
            <td> {{ i+1 }}</td>
            <td> {{ user.prename }} </td>
            <td> {{ user.surname }} </td>
            <td> {{ user.birth }} </td>
            <td> {{ user.group }} </td>
            <td> {{ user.glider }} </td>
            <td> {{ user.sign.toUpperCase() }} </td>
          </tr>
        </tbody>
      </table>
    </div>


  </div> -->
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'participants',
  data(){
    return {
      users: [],
      i: 1
    }
  },
  created() {
    let vm = this;

    // Get all documents with verified property is true.
    firebase.firestore().collection("users").where("verified", "==", true).get()
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
