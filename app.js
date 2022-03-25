const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    resultText() {
      console.log('resultText');
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter > 37) {
        return 'Too much!';
      } else {
        return '37';
      }
    },
  },
  methods: {
    addFive() {
      console.log('addFive');
      this.counter = this.counter + 5;
      console.log(this.counter);
    },
    addOne() {
      console.log('addOne');
      this.counter++;
      console.log(this.counter);
    },
  },
  watch: {
    counter() {
      setTimeout(() => {
        this.counter = 0;
      }, 5000);
    },
  },
});

app.mount('#assignment');
