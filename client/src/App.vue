<template>
  <div id="app">

    <!-- <section class="hero is-info is-fullheight is-bold"> -->
    <div class="hero hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <router-link to="/" class="nav-item">
              HOME
              <!-- <img src="" alt=""> -->
            </router-link>
          </div>

          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <router-link to="/create" class="nav-item">
              New Story
            </router-link>
            <router-link to="/signup" class="nav-item">Signup</router-link>
            <router-link to="/login" v-if="$root.user" class="nav-item">Login</router-link>
            <router-link to="/" class="nav-item">About</router-link>
          </div>
        </div>
      </header>
    </div>
    <!-- </section> -->

    <div class="logo">
      <img src="./assets/logo3-copie2.png" style="width: 400px">
    </div>

    <section class="">
      <div class="">
        <router-view></router-view>
        <hr>
        <div class="">
          <footer> @ Nadir BERRARA / IH Jun17 </footer>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
import auth from './components/api'
export default {
  name: 'app',
  created() {
    // Try to load the user when the app is loaded
    // This happens only once
    auth.loadUser(this)
  }
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

footer {
  color: white;
  padding-bottom: 20px
}
</style>
