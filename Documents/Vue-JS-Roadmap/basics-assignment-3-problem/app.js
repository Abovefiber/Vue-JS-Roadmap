const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      quoteOne: "Too much",
      quoteTwo: "Not there yet",
    };
  },
  watch: {
    counter(value) {
      if (value > 37) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
  },
  computed: {
    getCounterValue() {
      if (this.counter > 37) {
        return this.quoteOne;
      } else {
        return this.quoteTwo;
      }
    },
  },
  methods: {
    addFive(num) {
      this.counter += num;
    },
    addOne(num) {
      this.counter += num;
    },
  },
});

app.mount("#assignment");
