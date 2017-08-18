<template>
  <div id="app">
    <p>
      <router-link :to="'/'">Home</router-link>
    </p>
    <img src="./assets/editing-pen.png">
    <h1>THEN</h1>
    <router-view></router-view>
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
