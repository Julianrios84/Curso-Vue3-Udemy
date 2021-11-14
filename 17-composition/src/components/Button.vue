<template>
  <div>
    <button @click="counterAction" >{{btnText}}</button>
  </div>
</template>
<script>
export default {
  props: {
    btnText: String
  },
  setup({ btnText }, context) {

    const counterAction = () => context.emit("action");

    return {
      btnText,
      counterAction
    }
  }
}
</script>
