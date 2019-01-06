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

      <button class="btn btn-primary shadow" @click="signUp">Registrieren</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {
        email: '',
        password: '',
        password_ver: '',
      }
    }
  },
  methods: {
    signUp(event){
      event.preventDefault();

      if(this.comparePasswords !== true)
      {
        return;
      }
      console.log(this.email);
      this.$store.dispatch('userSignUp', { email: this.user.email, password: this.user.password });
    }
  },
  computed: {
    comparePasswords(){
      console.log('compare passwords');
      return this.password === this.password_ver ? true : 'Passwords dont\'t match';
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
