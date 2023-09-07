const app = Vue.createApp({
  data() {
    return {
      name: "Andrei Sibucao",
      age: 21,
      image: "drei.jpg",
    };
  },
  methods: {
    ageAddition() {
      return this.age + 5;
    },
    calculateRandom(){
        return Math.random();
    }
  },
});

app.mount("#assignment");
