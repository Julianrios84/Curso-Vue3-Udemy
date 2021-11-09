<template>
  <div id="btn-contador">
    <button @click="execAction" >{{ texto }}</button>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: "Aumentar",
    },
  },
  methods: {
    execAction() {
      this.$emit("action")
    },
  }
};
</script>

<style></style>
