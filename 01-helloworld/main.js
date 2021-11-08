const app = Vue.createApp({
  data() {
    return {
      user: {
        title: 'Hello World',
        name: 'Julian',
        age: -26,
        movies: ["batman", "spiderman", "superman"],
        url: "https://google.com",
        picture: "https://i.picsum.photos/id/444/600/600.jpg?hmac=l2WCfoWvjDAjGWTUizn-mKrSbKG56CUi3xQV_XqfQ9Q",
        classValue: "good"
      }
    }
  }
});

console.log(app)