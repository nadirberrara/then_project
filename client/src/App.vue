<template>
  <div id="app">

    <!-- <section class="hero is-info is-fullheight is-bold"> -->
    <div class="hero hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a href="#" class="nav-item">
              HOME
              <!-- <img src="" alt=""> -->
            </a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a href="http://localhost:8080/#/signup" class="nav-item">Signup</a>
            <a href="http://localhost:8080/#/login" v-if="$root.user" class="nav-item">Login</a>
            <a href="http://localhost:8080/#/rules" class="nav-item">Rules</a>
            <a href="" class="nav-item">About</a>
          </div>
        </div>
      </header>
    </div>
    <!-- </section> -->

    <div class="logo">
      <img src="./assets/logo3-copie2.png" style="width: 400px">
    </div>

    <section class="columns">
      <div class="column is-half is-offset-one-quarter">
        <router-view></router-view>
        <hr>
        <div class="columns">
          <footer class="column"> @nadir </footer>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #814374;
  /* color: white */
}

a.nav-item:not(.button) {
  color: white
}

a {
  color: white
}

footer.column {
  color: white
}

.logo {
  margin-top: 30px;
}
</style>
