<template lang="html">
  <!-- <div class="">
    <p>Registrierung kommt bald...</p>
  </div> -->
  <div class="register" id="register">
    <p>
      Da zum Zeitpunkt der Anmeldung für einen Wettbewerb oft der Flugzeugtyp und andere Informationen noch nicht verfügbar oder gänzlich klar sind, bieten wir ein Login system an wo ihr eure Daten anpassen und vervollständigen könnt. Dafür müsst Ihr euch jedoch registrieren oder mit eurem Google Account anmelden. Die Daten werden selbstverständlich vertraulich behandelt und nicht weiter gegeben.<br>
      Es wird gebeten die fehlenden Informationen selbständig zu vervollständigen.
      <br><br>
      Wir bitten euch zudem die <router-link :to="{ name: 'information', params: {} }"> Ausschreibung</router-link> durchgelesen zu haben bevor ihr euch hier für den Wettbewerb anmeldet.
    </p>

    <hr>

    <div class="alert alert-danger" role="alert" v-if="this.$store.state.error">
      {{ this.$store.state.error }}
    </div>

    <form class="register-form" novalidate id="register-form">
      <div class="form-group">
        <label for="email" class="control-label">Email</label>
        <input type="email" class="form-control" name="email" placeholder="max@muster.com" required v-model="user.email">
      </div>
      <div class="form-group">
        <label for="passwort" class="control-label">Passwort</label>
        <input type="password" class="form-control" name="password" placeholder="password" required v-model="user.password">
      </div>
      <div class="form-group">
        <label for="passwort_ver" class="control-label">Passwort wiederholen</label>
        <input type="password" class="form-control" name="password_ver" placeholder="password" required v-model="user.password_ver">
      </div>
    </form>


    <button class="btn btn-primary shadow" @click="signUp">Registrieren</button>

    <hr>

    <div class="social-logins">
      <button type="button" class="btn btn-light social-button" name="button" @click="googleLogin">
        <a id="google-button" class="btn btn-block btn-social btn-google">
          <i class="fa fa-google"></i> Sign in with Google
        </a>
      </button>
    </div>

    <hr>

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

      this.$store.dispatch('userSignUp', this.user);
    },
    googleLogin(event) {
      event.preventDefault();
      this.$store.dispatch('userSignInWithGoogle');
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

.register-form {
  max-width: 350px;
  margin: auto auto;
}


.form-check-input {
  text-align: left;
}

.social-button {
  margin: 5px;
}

.btn-social {
  width: 200px;
  height: 40px;
}

i {
  margin-right: 10px;
  font-size: 20px;
}

#facebook-button {
  background-color: #3b5998;
}

i {
  margin-right: 20px;
  font-size: 20px;
}
</style>
