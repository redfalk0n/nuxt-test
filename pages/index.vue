<template lang="pug">
  //- .container
  //-   .buttons
  //-     button(@click="shuffleList" key="shuf") Shuff
  //-   transition-group(name="flip-list")
  //-     p(v-for="(item, index) in list" v-bind:key="'p' + index") 
  //-       | {{item}}
  .container
    button.add(@click="addElem" key="qwe") Add
    button.rm(@click="rmElem" key="asd") Rm
    button#shuffle(@click="shuffleList") Перемешать
    div
      transition-group(name="flip-list")
        p(v-for="(item, index) in list" :key="'p' + item") 
          | {{ item }}
</template>

<script>
import { shuffle } from 'lodash'

export default {
  data() {
    return {
      value: true,
      list: [1, 2, 3, 4, 5, 6],
    }
  },
  methods: {
    addElem() {
      this.list.push('7')
    },
    rmElem() {
      this.list.pop()
    },
    shuffleList() {
      this.list = shuffle(this.list)
    },
  },
}
</script>

<style>
.container {
  margin: auto;
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
.flip-list-move {
  transition: all 1s;
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
