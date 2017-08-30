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
            <router-link to="/signup" v-if="!$root.user" class="nav-item">Signup / Login</router-link>
            <a href="" v-if="$root.user" @click="logout" class="nav-item">Logout</a>
            <router-link to="/" class="nav-item">About</router-link>
          </div>
        </div>
      </header>
    </div>
    <!-- </section> -->
    <!-- <p v-if="!$root.user" class="notification nav-item is-danger">You are disconnected</p> -->
    <div class="logoThen">
      <img src="./assets/logo-then2.png" style="width: 500px">
    </div>

    <hr>

    <section class="">
      <div class="">
        <router-view></router-view>

        <hr>
        <div class="">
          <footer>
            <div class="logo">
              <div class="columns is-half is-narrow">
                <div class="column ">
                  <a href="http://facebook.com" target="_blank" class="fa fa-facebook"></a>
                  <a href="http://plus.google.com" target="_blank" class="fa fa-google-plus"></a>
                  <a href="http://linkedin.com" target="_blank" class="fa fa-linkedin"></a>
                  <a href="http://twitter.com" target="_blank" class="fa fa-twitter"></a>
                </div>

              </div>
              <hr>

              <img src="./assets/logo3-copie2.png" style="width: 200px">
            </div>
            <p>
              @ Nadir BERRARA / IH Jun17
            </p>
          </footer>
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
  },
  methods: {
    logout(event) {
      event.preventDefault()
      this.$root.tempMsg = "bye bye"
      auth.logout(this)
    }
  }
}
</script>

<style scoped>
footer {
  color: white;
  padding-bottom: 20px
}
</style>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: rgba(129, 67, 116, 0.5); */
  background: url("./assets/background1.jpg") no-repeat fixed;
  background-size: cover;
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

.photos {
  margin: 20px
}

a.fa.fa-facebook {
  margin: auto 5px;
  color: #3B5998
}

a.fa.fa-google-plus {
  margin: auto 5px;
  color: #d34836
}

a.fa.fa-linkedin {
  margin: auto 5px;
  color: #007bb6
}

a.fa.fa-twitter {
  margin: auto 5px;
  color: #00aced
}
</style>
