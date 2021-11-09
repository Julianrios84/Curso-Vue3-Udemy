<template>
  <div class="hello">
    <h1>Contador: {{ contador }}</h1>
    <button-contador @action="handleIncrement" />
    <button-contador @action="handleDecrement" texto="Disminuir" />
  </div>
</template>

<script>
import ButtonContador from "./ButtonContador.vue";
export default {
  components: { ButtonContador },
  name: "HelloWorld",
  props: {
    contador: Number,
  },
  data: () => ({
    contador: 0,
  }),
  methods: {
    handleIncrement() {
      this.contador++
    },
    handleDecrease() {
      this.contador--
    }
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
