const { createApp } = Vue



//option object.
createApp({
  data() {
    return {
      message: '<h1>Hello Vue</h1>',
      image: './img/1.jpg',
      alt: 'Angela Carrol',
      myclass: 'red',

    }
  },
  methods: {
    colorchange(el) {
      if (this.myclass === 'red') {
        this.myclass = el;

      } else {
        this.myclass = 'red';
      }
    }
  }

}).mount('#app')