<template>
  <div>
    <h1>Balance: ${{store.balance}}</h1>
    <button @click="store.modifyBalance(100)" >+100</button>
    <button @click="store.modifyBalance(-50)" >-50</button>
  </div>
</template>
<script setup>
import store from '../store/store'
</script>
