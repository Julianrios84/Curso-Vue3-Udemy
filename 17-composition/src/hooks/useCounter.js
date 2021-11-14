import { computed, provide, ref }  from 'vue'

export function useCounter() {
  const counter = ref(0);
  const person = ref({});

  const increment = () => counter.value++;
  const decrement = () => counter.value--;
  const color = computed(() => (counter.value < 0 ? "red": "green"))

  provide("counter", counter)
  provide("color", color)

  return {
     person, increment, decrement
  }
}