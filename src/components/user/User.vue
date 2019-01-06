<template lang="html">
  <div class="">
    <h4>{{ user.email }}</h4>

    <hr>

    <form class="needs-validation" novalidate>
      <p class="lead">Personen Informationen</p>
      <div class="form-row">
        <div class="form-group required col-md-6">
          <label for="vorname" class="control-label">Vorname</label>
          <input type="text" class="form-control" id="vorname" placeholder="Max" required v-model="user.prename">
        </div>
        <div class="form-group required col-md-6">
          <label for="nachname" class="control-label">Nachname</label>
          <input type="text" class="form-control" id="nachname" placeholder="Muster" required v-model="user.surname">
        </div>
      </div>
      <div class="form-group required">
        <label for="strasse" class="control-label">Strasse</label>
        <input type="text" class="form-control" id="strasse" placeholder="Musterstrasse 1" required v-model="user.street">
      </div>
      <div class="form-row">
        <div class="form-group required col-md-8">
          <label for="ortschaft" class="control-label">Ortschaft</label>
          <input type="text" class="form-control" id="ortschaft" placeholder="Musterhausen" required v-model="user.city">
        </div>
        <div class="form-group required col-md-4">
          <label for="postleitzahl" class="control-label">Postleitzahl</label>
          <input type="text" class="form-control" id="postleitzahl" placeholder="1234" required v-model="user.zip">
        </div>
      </div>
      <div class="form-group required">
        <label for="strasse" class="control-label">Mobiltelefon</label>
        <input type="number" class="form-control" id="mobile" placeholder="+41 XX XXX XX XX" required v-model="user.mobile">
      </div>

      <hr>

      <p class="lead">Account Informationen</p>

      <div class="form-group required">
        <label for="passwort" class="control-label">Passwort</label>
        <input type="password" class="form-control" name="password" placeholder="password" required v-model="user.password">
      </div>
      <div class="form-group required">
        <label for="passwort_ver" class="control-label">Passwort wiederholen</label>
        <input type="password" class="form-control" name="password_ver" placeholder="password" required v-model="user.password_ver">
      </div>

      <hr>

      <p class="lead">Wettbewerbs Informationen</p>

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="flugzeugtyp" class="control-label">Flugzeugtyp</label>
          <input type="text" class="form-control" name="flugzeugtyp" placeholder="" required v-model="user.glider">
        </div>
        <div class="form-group col-md-4">
          <label for="immatrikulation" class="control-label">Immatrikulation</label>
          <input type="text" class="form-control" name="immatrikulation" placeholder="" required v-model="user.immat">
        </div>
        <div class="form-group col-md-4">
          <label for="callsign" class="control-label">Wettbewerbskennzeichen</label>
          <input type="text" class="form-control" name="callsign" placeholder="" required v-model="user.sign">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="logger_id" class="control-label">Logger ID</label>
          <input type="text" class="form-control" name="logger_id" placeholder="" required v-model="user.logger_id">
        </div>
        <div class="form-group col-md-6">
          <label for="flarm_id" class="control-label">Flarm ID</label>
          <input type="text" class="form-control" name="flarm_id" placeholder="" required v-model="user.flarm_id">
        </div>
      </div>

      <hr>


      <div class="form-group row">
        <div class="col-lg-8">An folgenden Trainingstagen dabei:</div>
        <div class="col-lg-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkTraining1">
            <label class="form-check-label" for="gridCheck1">
              Sonntag 28.4.2019
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkTraining2">
            <label class="form-check-label" for="gridCheck2">
              Montag 29.4.2019
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkTraining3">
            <label class="form-check-label" for="gridCheck3">
              Dienstag 30.4.2019
            </label>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-lg-8">Camping:</div>
        <div class="form-check col-lg-4">
          <input class="form-check-input" type="checkbox" id="checkCamping" v-model="user.camping">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-lg-8">Rückholservice:</div>
        <div class="form-check col-lg-4">
          <input class="form-check-input" type="checkbox" id="checkService" v-model="user.pickup_service">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-lg-8">Ich lasse mein Flugzeug bevorzugt über Nacht montiert:</div>
        <div class="form-check col-lg-4">
          <input class="form-check-input" type="checkbox" id="checkOverNight" v-model="user.glider_assembled">
        </div>
      </div>

      <hr>

      <button class="btn btn-primary shadow" @click="saveData">Speichern</button>
    </form>

  </div>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'user',
  data(){
    return {
      user: {}
    }
  },
  methods: {
     saveData(event){
       // Prevent default form submission.
       event.preventDefault();

    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(this.user);
    }
  },
  created(){
    const vm = this;
    const docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    docRef.get().then(
      function(doc){
        if(doc.exists){
          console.log(`Document data: ${doc.data()}`);
          vm.user = doc.data();
          vm.user.email = firebase.auth().currentUser.email;
        } else {
          console.log(`Doc data is undefined`);
        }
      }).catch(function(err){
        console.log(`Oops: ${err.message}`);
      });
 }
}
</script>

<style lang="css">
</style>
