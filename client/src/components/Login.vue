<template>
  <div class="login">
      <div class="login-screen">
        <div class="app-title">
          <h1>Login</h1>
        </div>
  
        <div class="login-form">
          <div class="control-group">
          <input type="text" class="login-field" value="" placeholder="username" id="login-name">
          <label class="login-field-icon fui-user" for="login-name"></label>
          </div>
  
          <div class="control-group">
          <input type="password" class="login-field" value="" placeholder="password" id="login-pass">
          <label class="login-field-icon fui-lock" for="login-pass"></label>
          </div>
  
          <a class="btn btn-primary btn-large btn-block" href="#">login</a>
          <a class="login-link" href="#">Lost your password?</a>
          <button v-google-signin-button="clientId" class="google-signin-button" data-onsuccess="OnGoogleAuthSuccess"> Continue with Google</button>
        </div>
      </div>
    </div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: '847172705023-1dmhasn37hqg6lu7bvcaaqa09va2oaar.apps.googleusercontent.com'
  }),
  methods: {
    OnGoogleAuthSuccess (idToken) {
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color:#343a40;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

 
    .login {
    margin: 20px auto;
    width: 300px;
    }
    .login-screen {
    background-color: #FFF;
    padding: 20px;
    border-radius: 5px
    }
    
    .app-title {
    text-align: center;
    color: #777;
    }
    
    .login-form {
    text-align: center;
    }
    .control-group {
    margin-bottom: 10px;
    }
    
    input {
    text-align: center;
    background-color: #ECF0F1;
    border: 2px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 200;
    padding: 10px 0;
    width: 250px;
    transition: border .5s;
    }
    
    input:focus {
    border: 2px solid #3498DB;
    box-shadow: none;
    }
    
    .btn {
      border: 2px solid transparent;
      background: #3498DB;
      color: #ffffff;
      font-size: 16px;
      line-height: 25px;
      padding: 10px 0;
      text-decoration: none;
      text-shadow: none;
      border-radius: 3px;
      box-shadow: none;
      transition: 0.25s;
      display: block;
      width: 250px;
      margin: 0 auto;
    }
    
    .btn:hover {
      background-color: #2980B9;
    }
    
    .login-link {
      font-size: 12px;
      color: #444;
      display: block;
        margin-top: 12px;
    }
</style>