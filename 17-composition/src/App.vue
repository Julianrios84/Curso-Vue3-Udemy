<template>
  <div>
    <Header/>
    <Balance/>
  </div>
</template>

<script>
import Balance from './components/Balance.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Balance
  }
}
</script>

