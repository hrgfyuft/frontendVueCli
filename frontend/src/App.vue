<template>
<div>
  <img alt="logo" id="logo" src="./assets/logo400.png">
  <Article />
</div>
</template>

<script>
import Article from './components/Article.vue'

export default { 
  name: 'App',
  components: {
  Article
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#logo{
  width: 400px;
  height: 400px;
}
</style>
