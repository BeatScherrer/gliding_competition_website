<template lang="html">
  <div class="login">
    <form id="login-form" v-on:submit.prevent="login">
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
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

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
    test(){
      console.log(this.user);
    },
    login(event){
      event.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(
        (user)=>{
          alert(`Success! Logged in as ${user.user.email}`);
          this.$router.push('user');
        },
        (err)=>{
          alert(`Oops: ${err.message}`);
        }
      );
    },
    forgotPassword(){

    }

  }
}
</script>

<style lang="css" scoped>
.login{
  max-width: 250px;
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
