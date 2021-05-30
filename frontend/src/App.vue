<template>
<div>

  <Header />
  <Navi />
  <Article />

</div>
</template>

<script>
import Article from './components/Article.vue'
import Header from './components/Header.vue'
import Navi from './components/Navi.vue'

export default {
  name: 'App',
  components: {
    Navi,
    Header,
  Article
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logoNavi{
  height: 100px;
}

#logoText {
  width: 200px;
}
</style>
