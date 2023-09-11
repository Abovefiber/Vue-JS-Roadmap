const app = Vue.createApp({
  data() {
    return {
      textName: "",
      pressedKey: "",
    };
  },
  methods: {
    saveInput(event) {
      this.textName = event.target.value;
    },

    confirmInput() {
      this.pressedKey = this.textName;
    },
    // inputText(event) {
    //   this.textName = event.target.value;
    // },
    // inputEnter(event) {
    //   this.pressedKey = this.textName;
    // },
    showAlert() {
      alert("Submitted");
    },
  },
});

app.mount("#assignment");
