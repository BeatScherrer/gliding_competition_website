<template lang="mp">
  <div class="table-responsive">
    <p>
      Aufgrund der Platzverhältnisse ist die Teilnehmerzahl auf 25 Plätze beschränkt.
    </p>

    <hr>

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
      users: []
    }
  },
  methods: {
  },
  created() {
    // Get all documents with verified property == true and sort after sign.
    firebase.firestore().collection("users").where("verified", "==", true).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // set all verified participants to the users array.
        this.users.push(doc.data());
      });
      this.users.sort(function(a, b) {
        const signA = a.sign;
        const signB = b.sign;
        //compare the signs
        if(signA < signB) return -1;
        if(signA > signB) return 1;
        return 0;
      });
    }).catch(function(error) {
      console.log(`Error getting documents: ${error}`);
    });
  }
}
</script>

<style lang="css">
</style>
