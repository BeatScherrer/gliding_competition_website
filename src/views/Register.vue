<template lang="html">
  <!-- <div class="">
    <p>Registrierung kommt bald...</p>
  </div> -->
  <div class="register">
    <p>
      Da zum Zeitpunkt der Anmeldung für einen Wettbewerb oft der Flugzeugtyp und andere Informationen noch nicht verfügbar oder gänzlich klar sind, bieten wir ein Login system an wo Ihr eure Daten anpassen und vervollständigen könnt. Dafür müsst Ihr euch jedoch registrieren oder mit eurem Google Account anmelden. Die Daten werden selbstverständlich vertraulich behandelt und nicht weiter gegeben.<br>
      Es wird gebeten die fehlenden Informationen selbständig zu vervollständigen.
      <br><br>
      Wir bitten euch zudem die Ausschreibung durchgelesen zu haben bevor ihr euch hier für den Wettbewerb anmeldet.
    </p>

    <hr>

    <div class="alert alert-danger" role="alert" v-if="this.$store.state.error">
      {{ this.$store.state.error }}
    </div>

    <form class="register-form" novalidate>
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
<<<<<<< HEAD
      <button type="button" class="btn btn-primary social-button" id="facebook-button" name="button" @click="facebookLogin">
        <a class="btn btn-block btn-social btn-facebook">
          <i class="fa fa-facebook"></i> Sign in with Facebook
        </a>
      </button>
=======
>>>>>>> develop
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

<<<<<<< HEAD
      this.$store.dispatch('userSignInWithGoogle');
    },
    facebookLogin(event) {
      event.preventDefault();

      this.$store.dispatch('userSignInWithFacebook');
    }
=======
    this.$store.dispatch('userSignInWithGoogle');
>>>>>>> develop
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
  text-align: center;
  width: 200px;
  height: 40px;
<<<<<<< HEAD
  padding-top: 10px;
=======
  padding-top: 7px;
}

i {
  margin-right: 10px;
  font-size: 20px;
>>>>>>> develop
}

#facebook-button {
  background-color: #3b5998;
}

i {
  margin-right: 20px;
  font-size: 20px;
}
</style>
