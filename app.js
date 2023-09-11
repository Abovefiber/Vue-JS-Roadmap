const app = Vue.createApp({
  data() {
    return {
      textName: "",
      pressedDown: "",
      pressedEnter: "",
    };
  },
  methods: {
    inputDown(event) {
      this.pressedDown = this.textName;
    },
    inputEnter(event) {
      this.pressedEnter = this.textName;
    },
    inputText(event) {
      this.textName = event.target.value;
    },
    showAlert() {
      alert("Submitted");
    },
  },
});

app.mount("#assignment");
