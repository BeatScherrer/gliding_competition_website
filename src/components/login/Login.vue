<template lang="html">
  <div class="login" id="login">


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
      <button type="submit" class="btn btn-primary">Login</button>

      <hr>

    </form>
    <div class="social-logins">
      <button type="button" class="btn btn-light social-button" name="button" @click="googleLogin">
        <a id="google-button" class="btn btn-block btn-social btn-google">
          <i class="fa fa-google"></i> Sign in with Google
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
  width: 200px;
  height: 40px;
}

i {
  margin-right: 10px;
  font-size: 20px;
}
</style>
