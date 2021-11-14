import { reactive } from 'vue'

const store = reactive({
  balance: 1000,
  increment(){ this.balance += 100 },
  modifyBalance(value){ this.balance += value },
  decrement(){ this.balance -= 50 } 
})


export default store