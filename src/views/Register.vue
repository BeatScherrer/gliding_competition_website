<template lang="html">
  <!-- <div class="">
    <p>Registrierung kommt bald...</p>
  </div> -->
  <div class="register">
    <p>
      Da zum Zeitpunkt der Anmeldung für einen Wettbewerb oft der Flugzeugtyp und andere Informationen noch nicht verfügbar oder gänzlich klar sind, bieten wir ein Login system an wo Ihr eure Daten anpassen und vervollständigen könnt. Dafür müsst Ihr euch jedoch registrieren. Die Daten werden selbstverständlich vertraulich behandelt und nicht weiter gegeben.<br>
      Es wird gebeten die fehlenden Informationen selbständig zu vervollständigen.
      <br><br>
      Wir bitten euch zudem die Ausschreibung durchgelesen zu haben bevor ihr euch hier für den Wettbewerb anmeldet.
    </p>

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
        <label for="email" class="control-label">Email</label>
        <input type="email" class="form-control" name="email" placeholder="max@muster.com" required v-model="user.email">
      </div>
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
          <input class="form-check-input" type="checkbox" id="checkCamping">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-lg-8">Rückholservice:</div>
        <div class="form-check col-lg-4">
          <input class="form-check-input" type="checkbox" id="checkService">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-lg-8">Ich lasse mein Flugzeug bevorzugt über Nacht montiert:</div>
        <div class="form-check col-lg-4">
          <input class="form-check-input" type="checkbox" id="checkOverNight">
        </div>
      </div>

      <hr>

      <button class="btn btn-primary shadow" @click="signUp">Registrieren</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data(){
    return {
      user: {
        prename: '',
        surname: '',
        street: '',
        city: '',
        zip: '',
        mobile: '',

        email: '',
        password: '',
        password_ver: '',

        plane: '',
        immat: '',
        sign: '',
        logger_id: '',
        flarm_id: '',

        training_days: [],
        camping: false,
        pickup_service: false,
        glider_assembled: false
      }
    }
  },
  methods: {
    signUp(){
      console.log(this.user.email);
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(
        ()=>{
          console.log('account created');
          alert(`Your account has been created!`);
        },
        (err)=>{
          alert(`Oops: ${err.message}`);
        }
      );
    }
  }
}
</script>

<style lang="css">

p {
  text-align: left;
}

hr {
  margin: 30px 0;
}

.form-check-input {
  text-align: left;
}

.form-group.required .control-label:after {
  content:" *";
  color:red;
}
</style>
