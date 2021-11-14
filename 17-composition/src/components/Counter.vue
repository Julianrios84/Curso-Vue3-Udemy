<template>
  <div>
    <h2 :style="{color}">Counter: {{counter}}</h2>
  </div>
</template>
<script>
import { inject } from 'vue'

export default {
  setup() {
    const counter = inject("counter")
    const color = inject("color")

    return { counter, color }
  }
}
</script>
<style lang="">
  
</style>