<template lang="html">
  <div class="login">


    <form id="login-form" v-on:submit.prevent="login">

      <div class="alert alert-danger" role="alert" v-if="this.$store.state.error">
        {{ this.$store.state.error }}
      </div>

      <h2>Teilnehmer Login</h2>
      <p>Bitte logge dich mit deiner Email Adresse und deinem Passwort ein.</p>

      <hr>

      <div class="form-group">
          <input type="email" class="form-control" id="inputEmail" placeholder="Email Address" v-model="user.email">
      </div>
      <div class="form-group">
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="user.password">
      </div>
      <div class="forgot">
        <a href="reset.html">Forgot password?</a>
      </div>
      <button type="submit" class="btn btn-secondary">Login</button>

      <hr>

    </form>
    <div class="social-logins">
      <button type="button" class="btn btn-light social-button" name="button" @click="googleLogin">
        <a id="google-button" class="btn btn-block btn-social btn-google">
          <i class="fa fa-google"></i> Sign in with Google
        </a>
      </button>
      <button type="button" class="btn btn-primary social-button" id="facebook-button" name="button" @click="facebookLogin">
        <a class="btn btn-block btn-social btn-facebook">
          <i class="fa fa-facebook"></i> Sign in with Facebook
        </a>
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      }
    };
  },
  methods: {
    login(event){
      event.preventDefault();

      this.$store.dispatch('userSignIn', this.user);
    },
    googleLogin(event) {
      event.preventDefault();

      this.$store.dispatch('userSignInWithGoogle');
    },
    facebookLogin(event) {
      event.preventDefault();

      this.$store.dispatch('userSignInWithFacebook');
    },
    forgotPassword(){
      alert('Ich arbeite momentan daran die Passwort vergessen zu implementieren');
    }
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
}
</script>

<style lang="css" scoped>

#login-form {
  max-width: 350px;
  margin: auto auto;
}

.forgot {
  text-align: left;
  font-size: 12px;
}

.social-button {
  margin: 5px;
}

.btn-social {
  text-align: center;
  width: 200px;
  height: 40px;
  padding-top: 10px;
}

#facebook-button {
  background-color: #3b5998;
}

i {
  margin-right: 20px;
  font-size: 20px;
}
</style>
