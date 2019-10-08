<template lang="pug">
  .container
      button(@click="value = !value") QEWQWE
      transition(name="bounce")
        p(v-if="value") ASDASD
</template>

<script>
export default {
  data() {
    return {
      value: true,
    }
  },
}
</script>

<style lang="scss">
.container {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
