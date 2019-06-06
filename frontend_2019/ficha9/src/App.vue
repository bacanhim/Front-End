<template>
  <div id="app">
    <div>
      <router-link :to="{name : 'Dashboard'}" class="button--green">Dashboard</router-link>
      <router-link :to="{name:'Login'}" class="button--green">Login</router-link>
      <a href="#" @click="logout" class="button--green">Logout</a>
    </div>
    <!-- <img src="./assets/logo.png" alt=""> -->
    <router-view />
  </div>
</template>
<script>
  import router from './router'
  export default {
    name: "App",
    methods: {
      logout(e) {
        axios.get("/api/logout")
          .then(function () {
            console.log("Logged out")
            router.push("/")
          })
          .catch(function (errors) {
            console.log(errors)
          })
      }
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top:60px; 
  }
  .button--green{
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    margin: 5px;
  }
  .button--green:hover{
    color: #fff;
    background-color: #3b8070;
  }
</style>