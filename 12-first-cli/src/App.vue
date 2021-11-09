<template>
  <div id="app">
    <Header title="Welcome Vue.js"/>
    <Container/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    Container,
    Footer
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

</style>
