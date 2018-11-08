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
          <input type="text" class="form-control" id="vorname" placeholder="Max" required>
        </div>
        <div class="form-group required col-md-6">
          <label for="nachname" class="control-label">Nachname</label>
          <input type="text" class="form-control" id="nachname" placeholder="Muster" required>
        </div>
      </div>
      <div class="form-group required">
        <label for="strasse" class="control-label">Strasse</label>
        <input type="text" class="form-control" id="strasse" placeholder="Musterstrasse 1" required>
      </div>
      <div class="form-row">
        <div class="form-group required col-md-8">
          <label for="ortschaft" class="control-label">Ortschaft</label>
          <input type="text" class="form-control" id="ortschaft" placeholder="Musterhausen" required>
        </div>
        <div class="form-group required col-md-4">
          <label for="postleitzahl" class="control-label">Postleitzahl</label>
          <input type="text" class="form-control" id="postleitzahl" placeholder="1234" required>
        </div>
      </div>
      <div class="form-group required">
        <label for="strasse" class="control-label">Mobiltelefon</label>
        <input type="number" class="form-control" id="mobile" placeholder="+41 XX XXX XX XX" required>
      </div>

      <hr>

      <p class="lead">Account Informationen</p>

      <div class="form-group required">
        <label for="email" class="control-label">Email</label>
        <input type="email" class="form-control" name="email" placeholder="max@muster.com" required>
      </div>
      <div class="form-group required">
        <label for="passwort" class="control-label">Passwort</label>
        <input type="password" class="form-control" name="password" placeholder="password" required>
      </div>
      <div class="form-group required">
        <label for="passwort_ver" class="control-label">Passwort wiederholen</label>
        <input type="password" class="form-control" name="password_ver" placeholder="password" required>
      </div>

      <hr>

      <p class="lead">Wettbewerbs Informationen</p>

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="flugzeugtyp" class="control-label">Flugzeugtyp</label>
          <input type="text" class="form-control" name="flugzeugtyp" placeholder="" required>
        </div>
        <div class="form-group col-md-4">
          <label for="immatrikulation" class="control-label">Immatrikulation</label>
          <input type="text" class="form-control" name="immatrikulation" placeholder="" required>
        </div>
        <div class="form-group col-md-4">
          <label for="callsign" class="control-label">Wettbewerbskennzeichen</label>
          <input type="text" class="form-control" name="callsign" placeholder="" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="logger_id" class="control-label">Logger ID</label>
          <input type="text" class="form-control" name="logger_id" placeholder="" required>
        </div>
        <div class="form-group col-md-6">
          <label for="flarm_id" class="control-label">Flarm ID</label>
          <input type="text" class="form-control" name="flarm_id" placeholder="" required>
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

      <button type="submit" class="btn btn-primary shadow" >Registrieren</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
