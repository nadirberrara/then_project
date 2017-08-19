<template>
  <div id="app">
  
    <!-- <section class="hero is-info is-fullheight is-bold"> -->
    <div class="hero hero-head" style="color: black;">
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
            <a href="" class="nav-item is-active">Profile</a>
            <a href="" class="nav-item">Rules</a>
            <a href="" class="nav-item">About</a>
          </div>
        </div>
      </header>
    </div>
    <!-- </section> -->
  
    <img src="./assets/editing-pen.png">
  
    <section class="hero">
      <router-view></router-view>
    </section>
  
    <hr>
    <footer>@nadir </footer>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
