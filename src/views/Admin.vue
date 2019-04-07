<template lang="html">
  <div class="">
    <table class="table-responsive">

      <!-- Table Head -->
      <thead class="thead">

        <th>Name</th>
        <th>Alter</th>
        <th>Gruppe</th>
        <th>Logger ID</th>
        <th>Flarm ID</th>
        <th>WK</th>
        <th>Immatrikulation</th>
        <th>Training 1</th>
        <th>Training 2</th>
        <th>Training 3</th>
        <th>Camping</th>
        <th>Abhol Service</th>

      </thead>

      <!-- Table Body -->
      <tbody>
        <tr v-for="i in participants" v-bind:key="i.uid">

          <td>{{ i.prename + " " + i.surname}}</td>
          <td>{{ i.birth }}</td>
          <td>{{ i.group }}</td>
          <td>{{ i.logger_id }}</td>
          <td>{{ i.flarm_id }}</td>
          <td>{{ i.sign }}</td>
          <td>{{ i.immat }}</td>
          <td v-bind:class="{'table-success': i.training1, 'table-danger': !i.training1}">{{ i.training1 }}</td>
          <td v-bind:class="{'table-success' : i.training2, 'table-danger': !i.training2}">{{ i.training2 }}</td>
          <td v-bind:class="{'table-success' : i.training3, 'table-danger': !i.training3}">{{ i.training3 }}</td>
          <td v-bind:class="{'table-success' : i.camping, 'table-danger': !i.camping}">{{ i.camping }}</td>
          <td v-bind:class="{'table-success' : i.pickup_service, 'table-danger': !i.pickup_service}">{{ i.pickup_service }}</td>
          <td></td>

        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ training1_count }}</td>
          <td>{{ training2_count }}</td>
          <td>{{ training3_count }}</td>
          <td>{{ camping_count }}</td>
          <td>{{ pickup_service_count }}</td>
        </tr>
      </tbody>

    </table>

    <p>emails: {{email_list}}</p>
  </div>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: "admin",
  data(){
    return {
      participants: []
    }
  },
  computed: {
    training1_count(){
      let counter = 0;
      this.participants.forEach((element) => {
        if(element.training1)
          counter += 1;
      });
      return counter;
    },
    training2_count(){
      let counter = 0;
      this.participants.forEach((element) => {
        if(element.training2)
          counter += 1;
      });
      return counter;
    },
    training3_count(){
      let counter = 0;
      this.participants.forEach((element) => {
        if(element.training3)
          counter += 1;
      });
      return counter;
    },
    camping_count(){
      let counter = 0;
      this.participants.forEach((element) => {
        if(element.camping)
          counter += 1;
      });
      return counter;
    },
    pickup_service_count(){
      let counter = 0;
      this.participants.forEach((element) => {
        if(element.pickup_service)
          counter += 1;
      });
      return counter;
    },
    email_list(){
      let email_list = "";
      this.participants.forEach((element) => {
        if(email_list == ""){
          email_list = element.email;
        } else {
          email_list += `, ${element.email}`;
        }
        console.log(element.email);
      });
      console.log("test")
      return email_list;
    }
  },
  created() {
    const vm = this;

    // Get all documents with verified property is true.
    firebase.firestore().collection("users").where("verified", "==", true).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // set all verified participants to the users array.
        vm.participants.push(doc.data());
      });
    }).catch(function(error) {
      console.log(`Error getting documents: ${error}`);
    });
  }
}
</script>

<style lang="css">
</style>
