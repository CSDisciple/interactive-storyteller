<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/community">Community</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/faq">FAQ</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #343a40;
  
}
#nav {
  padding: 30px;
  background-color: #343a40 !important;
  padding: 2em;
}

#nav a {
  font-weight: bold;
  color: #c8d9eb;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
