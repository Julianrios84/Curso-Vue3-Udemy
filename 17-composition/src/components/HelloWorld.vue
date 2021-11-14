<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <hr>
    <Counter />
    <!-- <h2 :style="{color}">Counter: {{counter}}</h2> -->
    <Button btnText="Increment" @action="increment" />
    <Button btnText="Decrement" @action="decrement"/>
    <hr>

    <input type="text" name="name" v-model="person.name">
    <p>
      {{person}}
    </p>
    <hr>

    <ol>
      <li v-for="(post, i) in posts" :key="i">
        {{ post.title }}
      </li>
    </ol>
  </div>
</template>

<script>
import { computed, provide, ref, onMounted }  from 'vue'
import { useCounter } from '../hooks/useCounter'
import Button from './Button.vue'
import Counter from './Counter.vue'

export default {
  name: 'HelloWorld',
  components: {Button},
  props: {
    msg: String
  },
  setup({msg}) {
    const title = msg;
    const posts = ref([])
    // const counter = ref(0);
    // const person = ref({});

    // const increment = () => counter.value++;
    // const decrement = () => counter.value--;
    // const color = computed(() => (counter.value < 0 ? "red": "green"))

    // provide("counter", counter)
    // provide("color", color)

    onMounted(
      async() =>
       {
         const res = fetch("https://jsonplaceholder.typicode.com/posts")
         const data = res.json()
         console.log(data)
         posts.value = data
       }
    )

    return {
      title, ...useCounter(), posts
    }
  }
}
</script>


