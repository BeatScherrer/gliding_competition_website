<template lang="html">
  <div class="">
    <h4>Willkommen {{ user.prename }}!</h4>

    <hr>

    <div class="alert alert-danger" role="alert" v-if="this.$store.state.error">
      {{ this.$store.state.error }}
    </div>

    <form class="needs-validation" novalidate>
      <p class="lead">Personen Informationen</p>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="vorname" class="control-label">Vorname</label>
          <input type="text" class="form-control" id="vorname" placeholder="Max" v-model="user.prename">
        </div>
        <div class="form-group col-md-6">
          <label for="nachname" class="control-label">Nachname</label>
          <input type="text" class="form-control" id="nachname" placeholder="Muster" v-model="user.surname">
        </div>
      </div>
      <div class="form-group">
        <label for="strasse" class="control-label">Strasse</label>
        <input type="text" class="form-control" id="strasse" placeholder="Musterstrasse 1" v-model="user.street">
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="ortschaft" class="control-label">Ortschaft</label>
          <input type="text" class="form-control" id="ortschaft" placeholder="Musterhausen" v-model="user.city">
        </div>
        <div class="form-group col-md-4">
          <label for="postleitzahl" class="control-label">Postleitzahl</label>
          <input type="text" class="form-control" id="postleitzahl" placeholder="1234" v-model="user.zip">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="birth">Geburtsdatum</label>
          <input type="date" class="form-control" name="birth" value="" v-model="user.birth">
        </div>
        <div class="form-group col-md-6">
          <label for="strasse" class="control-label">Mobiltelefon</label>
          <input type="tel" class="form-control" id="mobile" placeholder="+41 XX XXX XX XX" v-model="user.mobile">
        </div>
      </div>

      <hr>

      <p class="lead">Wettbewerbs Informationen</p>

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="flugzeugtyp" class="control-label">Flugzeugtyp</label>
          <input type="text" class="form-control" name="flugzeugtyp" placeholder="" v-model="user.glider">
        </div>
        <div class="form-group col-md-4">
          <label for="immatrikulation" class="control-label">Immatrikulation</label>
          <input type="text" class="form-control" name="immatrikulation" placeholder="" v-model="user.immat">
        </div>
        <div class="form-group col-md-4">
          <label for="callsign" class="control-label">Wettbewerbskennzeichen</label>
          <input type="text" class="form-control" name="callsign" placeholder="" v-model="user.sign">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="group" class="control-label">Gruppe</label>
          <input type="text" class="form-control" name="callsign" placeholder="" v-model="user.group">
        </div>
        <div class="form-group col-md-4">
          <label for="logger_id" class="control-label">Logger ID</label>
          <input type="text" class="form-control" name="logger_id" placeholder="" v-model="user.logger_id">
        </div>
        <div class="form-group col-md-4">
          <label for="flarm_id" class="control-label">Flarm ID</label>
          <input type="text" class="form-control" name="flarm_id" placeholder="" v-model="user.flarm_id">
        </div>
      </div>

      <hr>


      <div class="form-group row">
        <div class="col-lg-8">An folgenden Trainingstagen dabei:</div>
        <div class="col-lg-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkTraining1" value="Sonntag 28.4.2019" v-model="user.training1">
            <label class="form-check-label" for="gridCheck1">
              Sonntag 28.4.2019
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkTraining2" value="Montag 29.4.2019" v-model="user.training2">
            <label class="form-check-label" for="gridCheck2">
              Montag 29.4.2019
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkTraining3" value="Dienstag 30.4.2019" v-model="user.training3">
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

      <!-- <p class="lead">Passwort ändern:</p>

      <div class="form-group">
        <label for="passwort" class="control-label">Passwort</label>
        <input type="password" class="form-control" name="password" placeholder="password" v-model="user.password">
      </div>
      <div class="form-group">
        <label for="passwort_ver" class="control-label">Passwort wiederholen</label>
        <input type="password" class="form-control" name="password_ver" placeholder="password" v-model="user.password_ver">
      </div>

      <hr> -->

      <button class="btn btn-primary shadow" @click="saveData">Speichern</button>
      <button class="btn btn-danger shadow" id="deleteUserBtn" type="button" name="deleteUser" @click="deleteUser"> Account löschen </button>

    </form>

  </div>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'user',
  data(){
    return {
      user: {
        prename: '',
        surname: '',
        street: '',
        city: '',
        zip: '',
        birth: '',
        mobile: '',

        glider: '',
        immat: '',
        sign: '',
        group: '',
        logger_id: '',
        flarm_id: '',
        training1: false,
        training2: false,
        training3: false,
        camping: false,
        pickup_service: false,
        glider_assembled: false,
        verified: false
      }
    }
  },
  methods: {
    saveData(event){
       // Prevent default form submission.
       event.preventDefault();

       firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(this.user).then(function() {
         alert("Daten wurden übernommen.");
       });
    },
    deleteUser(event) {
      event.preventDefault();

      const confirmation = confirm("Willst du deinen Account wirklich löschen?");
      if(confirmation == true) {
        if(this.$store.state.user) {
          this.$store.dispatch('userDelete');
        }
      }
    }
  },
  created(){
    const vm = this;
    const docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    docRef.get().then(
      function(doc){
        if(doc.exists){
          console.log(doc.data());
          vm.user = doc.data();
          vm.user.email = firebase.auth().currentUser.email;
        } else {
          firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(vm.user);
          console.log(`empty doc created`);
        }
      }).catch(function(err){
        console.log(`Oops: ${err.message}`);
      });
 }
}
</script>

<style lang="css">

#deleteUserBtn {
  margin-left: 20px;
}

</style>
