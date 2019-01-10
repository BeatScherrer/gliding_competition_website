<template lang="mp">
  <div class="table-responsive">
    <table class="table table-stripped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Vorname</th>
          <th scope="col">Nachname</th>
          <th scope="col">Jahrgang</th>
          <th scope="col">Gruppe</th>
          <th scope="col">Flugzeug</th>
          <th scope="col">Kennzeichen</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(user, index) in users">
          <td> {{ ++index }}</td>
          <td> {{ user.prename }} </td>
          <td> {{ user.surname }} </td>
          <td> {{ user.birth.split('-')[0] }} </td>
          <td> {{ user.group }} </td>
          <td> {{ user.glider }} </td>
          <td> {{ user.sign.toUpperCase() }} </td>
        </tr>
      </tbody>
    </table>
  </div>
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
  methods: {
    compareSign(a, b) {
      const signA = a.sign.toUpperCase();
      const signB = b.sign.toUpperCase();

      if(signA > signB) return 1;
      else if(signB > signA) return -1;

      return 0;
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
      vm.users.sort(vm.compareSign);
    }).catch(function(error) {
      console.log(`Error getting documents: ${error}`);
    });
  }
}
</script>

<style lang="css">
</style>
