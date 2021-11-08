
const app = Vue.createApp({
  data() {
    return {
      title: "Contador App - Vue",
      count: 0,
      limit: 1
    };
  },
  methods: {
    modCount(instruction = "add", limit = 1) {
      this.limit = limit
      if (instruction === "dis") this.count -= this.limit;
      else this.count += this.limit;
    },
  },
});