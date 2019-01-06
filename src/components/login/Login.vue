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

      <div class="g-signin2" data-onsuccess="onSignIn"></div>

      <button type="submit" class="btn btn-secondary" name="button" @click="googleLogin">Google</button>
      <div class="" id="my-signin2"> </div>
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

.btn{
  margin: 15px;
}
</style>
