<template lang="html">
  <div class="">
    <p>Registrierung kommt bald...</p>
  </div>
  <!-- <div class="register">
    <p>
      Da zum Zeitpunkt der Anmeldung für einen Wettbewerb oft der Flugzeugtyp und andere Informationen noch nicht verfügbar oder gänzlich klar sind, bieten wir ein Login system an wo Ihr eure Daten anpassen und vervollständigen könnt. Dafür müsst Ihr euch jedoch registrieren. Die Daten werden selbstverständlich vertraulich behandelt und nicht weiter gegeben.<br>
      Es wird gebeten die fehlenden Informationen selbständig zu vervollständigen.
    </p>
    <hr>
    <form class="needs-validation" novalidate>
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

      <hr>

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
      <button type="submit" class="btn btn-primary shadow" >Registrieren</button>
    </form>
  </div> -->
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

.form-group.required .control-label:after {
  content:" *";
  color:red;
}
</style>
