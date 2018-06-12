<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './assets/scss/palette.scss';
  @import url('https://fonts.googleapis.com/css?family=Raleway|Work+Sans');

#app {
font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:$text-color;
  margin-top: 60px;
}
body {
  background: $color1;

}
</style>
